import React, { ReactNode } from "react"

type IntroProps = {
  questionCount: number
  children: ReactNode
}

function Intro({ questionCount, children }: IntroProps) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{questionCount} Questions to test your React mastery</h3>
      {children}
    </div>
  )
}

export default Intro
