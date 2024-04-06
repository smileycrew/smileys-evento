"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchForm() {
  const [searchText, setSearchText] = useState("")
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!searchText) return

    router.push(`/events/${searchText}`)
  }
  return (
    <form className="sm:w-[580px] w-full" onSubmit={handleSubmit}>
      <input
        className="bg-white/[7%] focus:bg-white/10 focus:ring-2 h-16 outline-none px-6 ring-accent/50 rounded-lg transition w-full"
        onChange={(event) => setSearchText(event?.target.value)}
        placeholder="Search events in any city..."
        spellCheck={false}
        value={searchText}
      />
    </form>
  )
}
