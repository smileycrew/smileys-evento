import EventsList from "@/components/events-list"
import H1 from "@/components/h1"
import { Suspense } from "react"
import Loading from "./loading"
import { capitalize } from "@/lib/utils"
import { Metadata } from "next"
import { z } from "zod"

type Props = {
  params: {
    city: string
  }
}

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined }
}

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city
  return {
    title:
      city === "all"
        ? "Evento - All Events"
        : `Evento - Events in ${capitalize(city)}`,
  }
}

const pageNumberSchema = z.coerce.number().int().positive().optional()

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city
  const parsedPage = pageNumberSchema.safeParse(searchParams.page)
  if (!parsedPage.success) {
    throw new Error("invalid page number")
  }

  return (
    <main className="flex flex-col items-center min-h-[110vh] px-[20px] py-24">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${capitalize(city)}
        `}
      </H1>

      <Suspense fallback={<Loading />} key={city + parsedPage.data}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  )
}
