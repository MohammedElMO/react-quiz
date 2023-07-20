import { ReactNode } from "react"
import Button from "./common/Button"

function Result({ children }: { children: ReactNode }) {
  return <div className="flex">{children}</div>
}

export default Result
