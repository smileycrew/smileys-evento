import { cn } from "@/lib/utils"

type SkeletonProps = {
  className?: string
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-white/5 h-4 rounded-md w-[550px]",
        className
      )}
    />
  )
}
