import { ResponseJSON } from "../Reducers/questionReducer"
import Answer from "./Answer"
import Loader from "./states/Loader"
function AnswerOptions({
  states,
  QA,
  handleSelectedAnswer,
  choosenAnswer,
  isQuestionActive,
}: {
  states: {
    questions: ResponseJSON[]
    status: string
  }
  isQuestionActive: boolean
  QA: ResponseJSON
  choosenAnswer: number | undefined
  handleSelectedAnswer: (a: number) => void
}) {
  return (
    <ul className="options">
      {states.status === "error" && (
        <span className="error">Error! cannot display Questions</span>
      )}
      {states.status === "loading" ? (
        <Loader />
      ) : (
        <Answer
          isQuestionActive={isQuestionActive}
          choosenAnswer={choosenAnswer}
          handleChooseAnswer={handleSelectedAnswer}
          data={QA}
        />
      )}
    </ul>
  )
}

export default AnswerOptions
