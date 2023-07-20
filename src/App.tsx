import { useReducer, useState } from "react"
import {
  ProgressKind,
  ProgressReducer,
  initalState,
} from "./Reducers/QAReducer"
import { ActionKind } from "./Reducers/questionReducer"
import AnswerOptions from "./components/AnswerOptions"
import Intro from "./components/Intro"
import Header from "./components/Layout/Header"
import Main from "./components/Layout/Main"
import QuestionProgress from "./components/QuestionProgress"
import Result from "./components/Result"
import Button from "./components/common/Button"
import { useQuestions } from "./hooks/useQuestions"
import Timer from "./components/Timer"
import EndingToaster from "./components/EndingToaster"
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
      isToasted
    },
    dispatchQInfo,
  ] = useReducer(ProgressReducer, initalState)
  const time = "5:00"

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
  const showToaster = (isToasted:boolean) => {
    dispatchQInfo({
      type: ProgressKind.TOAST_ON,
      payload: isToasted,
    })
  }


  return (
    <div className="app">
      <EndingToaster when={isToasted}/>
      <Header />
      <Main>
        {states.status === "active"? (
          <>
            <QuestionProgress points={points} qCount={complatedQuestion} />
            <AnswerOptions
              isQuestionActive={isQuestionsActive}
              QA={states.questions[indexAtQuestion]}
              states={states}
              handleSelectedAnswer={handleSelectedAnswer}
              choosenAnswer={answer}
            />
            <Timer
              isReset={reset}
              time={time}
              activeQuestion={isQuestionsActive}
              showToaster={showToaster}
            />

            {states.questions[answer!] && (
              <Result onNextQuestion={handleNextQuestion} />
            )}
          </>
        ) : (
          <Intro questionCount={states.questions.length}>
            <Button
              className="btn"
              disabled={states.status === "loading"}
              onClick={() =>
                dispatchState({
                  type: ActionKind.ACTIVE_STATUS,
                })
              }
            >
              {states.status === "loading" ? "...starting" : "let's start!"}
            </Button>
          </Intro>
        )}
      </Main>
    </div>
  )
}

export default App
