import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center space-x-[6.625rem] select-none">
      <div className="w-[30.375rem] h-[18.875rem] bg-gray grid grid-cols-1 content-between">
        <div className="w-[29.125rem] h-[13.875rem] grid grid-cols-1 content-between">
          <div className="font-bold text-5xl leading-[3.3rem]">
            Become The Hero Of Your Own Story
          </div>
          <div className=" font-normal text-base leading-7">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </div>
        </div>
        <div className="w-[30.375rem] flex">
          <input className="w-[20.75rem] h-[3rem] bg-offWhite text-black text-base leading-7 font-normal px-4 py-3 ring-0 focus:ring-0 focus:outline-none" placeholder="Enter Your Email Id" /> {/* input field for email */}
          <button className="px-9 py-2 bg-blue text-white text-lg leading-6 font-bold">
          Subscribe
          </button>  {/* if clicked, go for subscription */}
        </div>
      </div>
      <div className="w-[27rem] h-[16rem]">
        <Image src="/topherosection.svg" alt="hero" width={500} height={0} /> {/* banner */}
      </div>
    </div>
  );
}
