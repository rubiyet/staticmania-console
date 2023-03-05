import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex items-center space-x-10">
      <Link href="/about">  
        <button
          className={`w-[2.875rem] h-7 text-black text-base leading-7 font-normal`}
        >
          About
        </button> {/* if clicked, go to about  page */}
      </Link>
    </div>
  );
}
