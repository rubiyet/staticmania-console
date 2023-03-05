import Image from "next/image";
import ArticlesAndNewsCard from "../common/atoms/ArticlesAndNewsCard";

export default function ArticlesAndNewsSection({ item }) {
  //data from json file
  let data = require("../../data.json");
  return (
    <div className="px-[5rem] grid grid-cols-3 gap-4 w-full select-none">
      <div className="relative">
        <Image
          src={"/ReadMoreArticlesAndNewsBanner.png"}
          alt="articles and news"
          width={5000}
          height={0}
          className="h-[32.25rem]"
        />{" "}
        {/* if clicked, go to articles and news page */}
        <div className="pl-10 absolute top-[2.5rem] space-y-4">
          <div className="font-bold text-[2rem] leading-[2.4rem] w-[20.813rem] h-[4.75rem]">Read our <br/> articles & news</div>
          <button className="text-blue text-base leading-6 font-semibold">
            See More
          </button>
        </div>
      </div>
      {data.articlesAndNews.map((item) => (
        <ArticlesAndNewsCard key={item.id} item={item} /> //passing props to ArticlesAndNewsCard
      ))}
    </div>
  );
}
