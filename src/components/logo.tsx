import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/">
      <Image
        alt="EVENTO logo"
        height={12}
        src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
        width={53}
      />
    </Link>
  )
}
