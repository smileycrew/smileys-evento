import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"

type PaginationControlsProps = {
  nextPath: string
  previousPath: string
}

const btnStyles =
  "bg-white/5 flex gap-x-2 hover:opacity-100 items-center opacity-75 px-5 py-3 rounded-md text-xs text-white transition"

export default function PaginationControls({
  nextPath,
  previousPath,
}: PaginationControlsProps) {
  return (
    <section className="flex justify-between w-full">
      {previousPath ? (
        <Link className={btnStyles} href={previousPath}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath && (
        <Link className={btnStyles} href={nextPath}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  )
}
