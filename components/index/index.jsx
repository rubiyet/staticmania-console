import ArticlesAndNewsSection from "./ArticlesAndNewsSection";
import HeroSection from "./HeroSection";
import PodcastHorizontalList from "./PodcastsHorizontalList";
import RecentEpisodes from "./RecentEpisodes";


export default function Index() {
  return (
    <>
      <div className="pt-[6.375rem]">
        <HeroSection />
      </div>
      <div className="pt-[9.5rem]">
        <PodcastHorizontalList />
      </div>
      <div className="pt-[8.625rem]">
        <RecentEpisodes />
      </div>
      <div className="pt-[7.563rem]">
        <ArticlesAndNewsSection />
      </div>
    </>
  );
}
