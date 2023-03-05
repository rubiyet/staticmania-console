import Image from "next/image";

export default function ArticlesAndNewsCard({ item }) {
  return (
    <div className="space-y-8">
      <Image
        key={item.id}
        src={"/" + item.articleImage}
        alt="episode"
        width={5000}
        height={0}
        className="h-80"
      /> {/* image for article */}
      <div className="space-y-4">
        <div className="text-2xl font-semibold leading-[1.875rem]">
          {item.articleTitle} {/* title */}
        </div>
        <div className="text-base font-normal leading-6">
          {item.articleDescription} {/* description */}
        </div>
        <button>
          <Image
            src={"/ReadNow.svg"}
            alt="speaker"
            width={5000}
            height={0}
            className="h-6 w-[4.875rem]"
          />
        </button> {/* if clicked, go to read now page */}
      </div>
    </div>
  );
}
