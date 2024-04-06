import H1 from "@/components/h1"
import { getEvent } from "@/lib/server-utils"
import { Metadata } from "next"
import Image from "next/image"

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug

  const event = await getEvent(slug)
  return {
    title: event.name,
  }
}

export async function generateStaticParams() {
  // top 100 most popular events
  return [
    {
      slug: "comedy-extravaganza",
    },
    {
      slug: "dj-practice-session",
    },
  ]
}

export default async function EventPage({ params }: Props) {
  const slug = params.slug

  const event = await getEvent(slug)

  return (
    <main>
      <section className="flex items-center justify-center md:px-20 overflow-hidden py-14 relative">
        <Image
          alt="event background image"
          className="blur-3xl object-cover z-0"
          fill
          priority
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px"
          src={event.imageUrl}
        />

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-16 relative z-1">
          <Image
            alt={event.name}
            className="border-2 border-white/50 object-cover rounded-xl"
            height={201}
            src={event.imageUrl}
            width={300}
          />

          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <H1 className="lg:text-5xl mb-2 mt-1 whitespace-nowrap">
              {event.name}
            </H1>

            <p className="text-xl text-white/75 whitespace-nowrap">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>

            <button className="bg-blur bg-white/20 border-2 border-white/10 capitalize   lg:mt-auto mt-5 py-2 rounded-md sm:w-full state-effects text-lg w-[95vw]">
              Get tickets
            </button>
          </div>
        </div>
      </section>

      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>

        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  )
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-12 text-2xl">{children}</h2>
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="leading-8 max-w-4xl mx-auto text-lg text-white/75">
      {children}
    </p>
  )
}
