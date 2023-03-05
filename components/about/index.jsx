export default function About() {
  return (
    <div className="pt-[9.938rem] px-[13rem] space-y-8">
      <div className="text-5xl font-bold leading-[3.3rem] w-[24.188rem] h-[6.625rem]">About Finsweet Podcast</div>
      <div className="text-base font-normal leading-6 w-[30rem] h-[4.5rem]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</div>
      <button className="px-9 py-3 bg-blue text-white text-lg leading-6 font-medium">Subscribe Now!</button> {/* if clicked, go for subscription */}
    </div>
  );
}