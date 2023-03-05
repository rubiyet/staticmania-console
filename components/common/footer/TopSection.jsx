import Sponsors from "./Sponsors";
import Image from "next/image";
import Link from "next/link";

export default function FooterTopSection() {
  return (
    <div class=" relative h-[35.875rem] w-full bg-offBlack">
      <div class="absolute px-[5rem] -top-48 w-full">
        <Sponsors />
      </div>
      <div className="pt-48 px-[5rem]">
        <div className="h-[17.875rem] flex justify-between">
          <Link href="/">
            <Image
              src="/logoWhite.svg"
              alt="logo"
              width={0}
              height={0}
              className="w-[12.5rem] h-[2.532rem]"
            />{" "}
            {/* image for logo */}
          </Link>{" "}
          {/* if clicked, go to home page */}
          <div className="text-white space-y-8">
            <div className="font-bold text-xl leading-[1.875rem]">Pages</div>{" "}
            {/* pages */}
            <div className="space-y-4">
              <div className="font-normal text-base leading-6">
                <Link href="/">Home</Link>
              </div>
              <div className="font-normal text-base leading-6">
                <Link href="/">Podcast</Link>
              </div>

              <div className="font-normal text-base leading-6">
                <Link href="/">Host</Link>
              </div>

              <div className="font-normal text-base leading-6">
                <Link href="/">Blog</Link>
              </div>
            </div>
          </div>
          <div className="text-white space-y-8">
            <div className="font-bold text-xl leading-[1.875rem]">Reach Us</div>{" "}
            {/* reach us */}
            <div className="space-y-4">
              <div className="font-normal text-base leading-6"><Link href="/">Contact</Link></div>
              <div className="font-normal text-base leading-6"><Link href="/">About</Link></div>
            </div>
          </div>
          <div className="text-white space-y-8">
            <div className="font-bold text-xl leading-[1.875rem]">
              {" "}
              {/* subscribe */}
              Subscribe
            </div>
            <div className="space-y-8 flex flex-col items-start justify-start">
              <Image
                src="/podcasts/white/ApplePodcasts.svg"
                alt="applePodcasts"
                width={0}
                height={0}
                className="w-[11.563rem] h-[2.25rem]"
              />{" "}
              {/* image for applePodcasts */}
              <Image
                src="/podcasts/white/SoundCloud.svg"
                alt="soundCloud"
                width={0}
                height={0}
                className="w-[11.563rem] h-[2.25rem]"
              />{" "}
              {/* image for soundCloud */}
              <Image
                src="/podcasts/white/GooglePodcasts.svg"
                alt="googlePodcasts"
                width={0}
                height={0}
                className="w-[11.563rem] h-[2.25rem]"
              />{" "}
              {/* image for googlePodcasts */}
              <Image
                src="/podcasts/white/Spotify.svg"
                alt="spotify"
                width={0}
                height={0}
                className="w-[7.989rem] h-[2.25rem]"
              />{" "}
              {/* image for spotify */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
