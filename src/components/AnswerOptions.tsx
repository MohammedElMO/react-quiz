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
    <div className="options">
        <Answer
          isQuestionActive={isQuestionActive}
          choosenAnswer={choosenAnswer}
          handleChooseAnswer={handleSelectedAnswer}
          data={QA}
        />
    </div>
  )
}

export default AnswerOptions
