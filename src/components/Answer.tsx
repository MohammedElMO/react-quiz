import { ResponseJSON } from "../Reducers/questionReducer"

type AnswerProps = {
  data: ResponseJSON
  handleChooseAnswer: (answerIndex: number) => void
  choosenAnswer: number | undefined
  isQuestionActive: boolean
}
function Answer({
  data,
  handleChooseAnswer,
  choosenAnswer,
  isQuestionActive,
}: AnswerProps) {

  return (
    <>
      <h3>{data.question}</h3>
      {data.options.map((a,idx) => (
        <button
          disabled={isQuestionActive}
          key={a}
          className={`btn btn-option ${
            choosenAnswer === idx && "answer"
          }   ${
            choosenAnswer !== undefined && isQuestionActive
              ? data.correctOption === data.options.indexOf(a) &&
                isQuestionActive
                ? "correct"
                : "wrong"
              : ""
          } `}
          onClick={() => handleChooseAnswer(data.options.indexOf(a))}
        >
          {a}
        </button>
      ))}
    </>
  )
}

export default Answer
