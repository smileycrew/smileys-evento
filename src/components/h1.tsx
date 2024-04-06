import { twMerge } from "tailwind-merge"

type H1Props = {
  children: React.ReactNode
  className?: string
}

export default function H1({ children, className }: H1Props) {
  return (
    <h1
      className={twMerge(
        "font-bold lg:text-6xl text-3xl tracking-tight",
        className
      )}
    >
      {children}
    </h1>
  )
}
