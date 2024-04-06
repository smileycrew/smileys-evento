import EventCard from "./event-card"
import { getEvents } from "@/lib/server-utils"
import PaginationControls from "./pagination-controls"

type EventsListProps = {
  city: string
  page?: number
}

export default async function EventsList({ city, page = 1 }: EventsListProps) {
  const { events, totalCount } = await getEvents(city, page)

  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : ""
  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : ""

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}

      <PaginationControls nextPath={nextPath} previousPath={previousPath} />
    </section>
  )
}
