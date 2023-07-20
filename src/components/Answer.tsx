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
  console.log(data.correctOption)

  return (
    <>
      <h3>{data.question}</h3>
      {data.options.map((a,idx) => (
        <li
          aria-disabled={isQuestionActive}
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
        </li>
      ))}
    </>
  )
}

export default Answer
