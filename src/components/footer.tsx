import Link from "next/link"

const routes = [
  {
    name: "Terms & Conditions",
    path: "/terms-conditions",
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 flex h-16 items-center justify-between mt-auto px-3 sm:px-9 text-sx text-white/25">
      <small className="text-xs">
        &copy; 2050 Smiley. All rights reserved.
      </small>

      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
