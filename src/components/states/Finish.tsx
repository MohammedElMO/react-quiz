function Finish({ maxPoints, points }: { maxPoints: number; points: number }) {
  const percentPoint = (points / maxPoints) * 100
  return (
    <div className="finish">
     {"    "} You Scored {"    "}
      <strong>
           {points} out of         
        <strong> {maxPoints}</strong> 
           {percentPoint.toFixed(0)}
      </strong>
    </div>
  )
}

export default Finish
