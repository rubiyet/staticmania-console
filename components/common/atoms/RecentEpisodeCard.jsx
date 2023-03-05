import Image from "next/image";

export default function RecentEpisodeCard({ item }) {
  return (
    <div className="space-y-8">
      <Image
        key={item.id}
        src={"/" + item.episodeImage}
        alt="episode"
        width={5000}
        height={0}
        className="h-64"
      /> {/* image for episode */}
      <div className="space-y-4">
        <div className="text-2xl font-semibold leading-[1.875rem]">
          Ep {item.id}: {item.episodeTitle} {/* title */}
        </div>
        <div className="text-base font-normal leading-6">
          {item.episodeDescription} {/* description */}
        </div>
        <button>
        <Image
          src={"/listenNow.svg"}
          alt="speaker"
          width={5000}
          height={0}
          className="h-8 w-[7.875rem]"
        />
        </button> {/* if clicked, go to listen now page */}
      </div>
    </div>
  );
}
