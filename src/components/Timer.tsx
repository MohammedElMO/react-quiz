import { useEffect, useState } from "react"

function Timer({
  time,
  activeQuestion,
  isReset,
  showToaster,
}: {
  time: string
  activeQuestion: boolean
  isReset: boolean
  showToaster: (isTimeOut: boolean) => void
}) {
  const minutes = parseInt(time.split(":")[0])
  const seconds = parseInt(time.split(":")[1])
  const [min, seMin] = useState(0)
  const [sec, seSec] = useState(5)

  //TODO: if the timer at 0 then we want to display a toaster to say time out and the highlight the right answer
  // as well as diabling the cursor and then we want to Shoe the next Button

  useEffect(() => {
    const timerMin = setTimeout(() => {
      seMin((min) =>
        !isReset
          ? !activeQuestion
            ? min !== 0
              ? sec === 0
                ? min - 1
                : min
              : min
            : min
          : minutes
      )
    }, 1000)
    const timerSec = setTimeout(() => {
      seSec((sec) =>
        !isReset
          ? min === 0 && sec === 0
            ? sec
            : !activeQuestion
            ? sec === 0
              ? 59
              : sec - 1
            : sec
          : seconds
      )
    }, 1000)

    showToaster(min === 0 && sec === 0)

    return () => {
      clearTimeout(timerMin)
      clearTimeout(timerSec)
    }
  }, [sec, activeQuestion, isReset])

  return (
    <div
      className={`timer ${
        min === 0 && sec === 0
          ? ""
          : min < 2 && sec <= 60 && !activeQuestion
          ? "wrongTime"
          : ""
      }`}
    >
      {min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}
    </div>
  )
}

export default Timer
