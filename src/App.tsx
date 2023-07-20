import { useReducer } from "react"
import {
  ProgressKind,
  ProgressReducer,
  initalState,
} from "./Reducers/QAReducer"
import { ActionKind } from "./Reducers/questionReducer"
import { useQuestions } from "./hooks/useQuestions"
import {
  AnswerOptions,
  Button,
  EndingToaster,
  Error,
  Finish,
  Header,
  Intro,
  Loader,
  Main,
  QuestionProgress,
  Result,
  Timer,
} from "./components"
import ScoreToaster from "./components/ScoreToaster"

function App() {
  const { states, dispatch: dispatchState } = useQuestions()
  const [
    {
      answer,
      complatedQuestion,
      indexAtQuestion,
      isQuestionsActive,
      points,
      reset,
      isToasted,
    },
    dispatchQInfo,
  ] = useReducer(ProgressReducer, initalState)
  const time = "2:00"
  const maxPoints = states.questions.reduce(
    (totalPoints, point) => totalPoints + point.points,
    0
  )

  const handleSelectedAnswer = (AnswerIndex: number) => {
    dispatchQInfo({
      type: ProgressKind.ANSWRING_STATUS,
      payload: AnswerIndex,
    })
    dispatchQInfo({
      type: ProgressKind.ACTIVE_QUESTIONS,
      payload: true,
    })
    dispatchQInfo({
      type: ProgressKind.INCREASE_SCORE,
      payload:
        states.questions[indexAtQuestion].correctOption === AnswerIndex
          ? states.questions[indexAtQuestion].points
          : 0,
    })
  }
  const handleNextQuestion = () => {
    dispatchQInfo({
      type: ProgressKind.NEXT_QUESTION,
      payload: indexAtQuestion,
    })
    dispatchQInfo({
      type: ProgressKind.ACTIVE_QUESTIONS,
      payload: false,
    })
    dispatchQInfo({
      type: ProgressKind.COMPLATED_QUESTION,
      payload: complatedQuestion,
    })
    dispatchQInfo({
      type: ProgressKind.ANSWRING_STATUS,
      payload: undefined,
    })
    dispatchQInfo({
      type: ProgressKind.RESET_TIME,
      payload: !isQuestionsActive,
    })
  }
  const EndQuiz = () => {
    dispatchState({
      type: ActionKind.FINISHED_STATUS,
    })
  }

  const showToaster = (isToasted: boolean) => {
    dispatchQInfo({
      type: ProgressKind.TOAST_ON,
      payload: isToasted,
    })
  }

  return (
    <div className="app">
      <EndingToaster when={isToasted} />
      <ScoreToaster score={points} when={isToasted} />
      <Header />
      <Main>
        {states.status === "loading" && <Loader />}
        {states.status === "error" && <Error />}
        {states.status === "start" && (
          <Intro questionCount={states.questions.length}>
            <Button
              className="btn"
              onClick={() =>
                dispatchState({
                  type: ActionKind.ACTIVE_STATUS,
                })
              }
            >
              let's start!
            </Button>
          </Intro>
        )}
        {states.status === "active" && (
          <>
            <QuestionProgress onEnd={EndQuiz} points={points} qCount={complatedQuestion} />
            <AnswerOptions
              isQuestionActive={isQuestionsActive}
              QA={states.questions[indexAtQuestion]}
              states={states}
              handleSelectedAnswer={handleSelectedAnswer}
              choosenAnswer={answer}
            />
            <Timer
              onEnd={EndQuiz}
              isReset={reset}
              time={time}
              activeQuestion={isQuestionsActive}
              showToaster={showToaster}
            />

            {states.questions[answer!] && (
              <Result>
                <Button
                  disabled={isToasted}
                  className="btn"
                  onClick={handleNextQuestion}
                >
                  Next
                </Button>
              </Result>
            )}
          </>
        )}
        {states.status === "finished" && (
          <Finish points={points} maxPoints={maxPoints} />
        )}
      </Main>
    </div>
  )
}

export default App
