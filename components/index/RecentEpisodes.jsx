
import RecentEpisodeCard from "../common/atoms/RecentEpisodeCard";

export default function RecentEpisodes() {
  //data from json file
  let data = require("../../data.json");

  return (
    <div className="px-[5rem] select-none">
      <div className="flex items-end justify-between">
        <div className="w-[23.25rem] h-[6.75rem] grid grid-cols-1 content-between">
          <span className="h-[2.375rem] text-2xl font-bold">
            Recent Episodes
          </span>
          <span className="h-[3.25rem] text-base font-normal">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black.
          </span>
        </div>
        <button className="w-[11.625rem] h-[3.25rem] bg-blue text-white text-base leading-6 font-medium">
          See All Episodes
        </button> {/* if clicked, go to all episodes page */}
      </div>
      <div className="grid grid-cols-3 gap-4 w-full pt-16">
        {data.recentEpisodes.map((item) => (
          <RecentEpisodeCard key={item.id} item={item} /> //passing props to RecentEpisodeCard
        ))}
      </div>
    </div>
  );
}
