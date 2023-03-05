import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="logo" width={130} height={26} /> {/* image for logo */}
    </Link>
  );
}
