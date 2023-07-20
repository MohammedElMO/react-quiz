import { useEffect } from "react"

function QuestionProgress({
  points,
  qCount,
  onEnd
}: {
  points: number
  qCount: number
  onEnd:() => void
}) {
  useEffect(() => {
    if(qCount === 15 )
        onEnd()
  }, [qCount])
  
  return (
    <div className="progress">
      <progress max={15} value={qCount} />
      <span>Question {qCount} /15</span>
      <span>{points} / 280 points</span>
    </div>
  )
}

export default QuestionProgress
