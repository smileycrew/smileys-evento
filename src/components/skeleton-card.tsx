import Skeleton from "./skeleton"

export default function SkeletonCard() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 rounded-full w-12" />
      <Skeleton className="h-4 rounded-full w-[250px]" />
      <Skeleton className="h-4 rounded-full w-[200px]" />
    </div>
  )
}
