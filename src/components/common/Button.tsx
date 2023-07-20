import { ComponentProps, ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
} & ComponentProps<"button">

function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>
}

export default Button
