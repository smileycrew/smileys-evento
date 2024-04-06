"use client"

import Link from "next/link"
import Logo from "./logo"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
]

export default function Header() {
  const activePathname = usePathname()

  return (
    <header className="border-b border-white/10 flex h-14 items-center justify-between px-3 sm:px-9">
      <Logo />

      <nav className="h-full">
        <ul className="flex gap-x-6 h-full text-sm">
          {routes.map((route) => (
            <li
              className={cn(
                "flex hover:text-white items-center relative transition",
                {
                  "text-white": activePathname === route.path,
                  "text-white/50": activePathname !== route.path,
                }
              )}
              key={route.path}
            >
              <Link href={route.path}>{route.name}</Link>

              {activePathname === route.path && (
                <motion.div
                  className="absolute bg-accent bottom-0 h-1 w-full"
                  layoutId="header-active-link"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
