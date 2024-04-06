"use client"

import { EventoEvent } from "@prisma/client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

type EventCardProps = {
  event: EventoEvent
}

const MotionLink = motion(Link)

export default function EventCard({ event }: EventCardProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    // top of the target meets the bottom of the view port
    // ends when 50% of the target reaches the bottom of the view port
    offset: ["0 1", "1.5 1"],
    target: ref,
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1])
  return (
    <MotionLink
      className="basis-80 flex-1 h-[380px] max-w-[500px]"
      href={`/event/${event.slug}`}
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      ref={ref}
      style={{
        // @ts-ignore
        opacity: opacityProgress,
        // @ts-ignore
        scale: scaleProgress,
      }}
    >
      <section
        className="bg-white/[3%] flex flex-col h-full overflow-hidden relative rounded-xl state-effects w-full"
        key={event.id}
      >
        <Image
          alt={event.name}
          className="h-[60%] object-cover"
          height={280}
          src={event.imageUrl}
          width={500}
        />

        <div className="flex flex-1 flex-col items-center justify-center">
          <h2 className="font-semibold text-2xl">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="mt-4 text-sm text-white/50">{event.location}</p>
        </div>

        <section className="absolute bg-black/30 flex flex-col items-center justify-center h-[45px] left-[12px] rounded-md top-[12px] w-[45px]">
          <p className="-mb-[5px] font-bold text-xl">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-accent text-xs uppercase">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </MotionLink>
  )
}
