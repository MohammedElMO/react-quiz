import Button from "./common/Button"

function Result({
  onNextQuestion,
}: {
  onNextQuestion: () => void
}) {
  return (
    <div className="flex">
      <Button className="btn" onClick={onNextQuestion}>
        Next
      </Button>
    </div>
  )
}

export default Result
