import PodcastHorizontalList from "@/components/index/PodcastHorizontalList";
import HeroSection from "@/components/index/HeroSection";
import RecentEpisodes from "@/components/index/RecentEpisodes";
import ArticlesAndNewsSection from "@/components/index/ArticlesAndNewsSection";

export default function Home() {
  return (
    <>
    <div className="pt-[6.375rem]"><HeroSection /></div>
    <div className="pt-[9.5rem]"><PodcastHorizontalList /></div>
    <div className="pt-[8.625rem]"><RecentEpisodes /></div>
    <div className="pt-[7.563rem]"><ArticlesAndNewsSection /></div>
    </>
  );
}
