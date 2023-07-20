function QuestionProgress({
  points,
  qCount,
}: {
  points: number
  qCount: number
}) {
  return (
    <div className="progress">
      <progress max={15} value={qCount} />
      <span>Question {qCount} /15</span>
      <span>{points} / 280 points</span>
    </div>
  )
}

export default QuestionProgress
