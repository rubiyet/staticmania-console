import Image from "next/image";

export default function PodcastHorizontalList() {
  return (
    <div className="h-[2.313rem] px-[5rem] flex items-center justify-between">
      <span className="text-2xl font-bold">Podcasts Available On</span>
      <Image src="/podcasts/black/ApplePodcasts.svg" alt="podcast" width={0} height={0} className="w-[11.563rem] h-[2.25rem]" />
      <Image src="/podcasts/black/SoundCloud.svg" alt="spotify" width={0} height={0} className="w-[11.563rem] h-[2.25rem]" />
      <Image src="/podcasts/black/GooglePodcasts.svg" alt="apple" width={0} height={0} className="w-[11.563rem] h-[2.25rem]" />
      <Image src="/podcasts/black/Spotify.svg" alt="google" width={0} height={0} className="w-[11.563rem] h-[2.25rem]" />
    </div>
  );
}
