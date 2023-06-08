import Link from 'next/link'
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image
      priority
      src="/images/logo.svg"
      height={32}
      width={95}
      alt="Relari"
    />
    </Link>
  )
}
