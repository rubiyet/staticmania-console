import Image from "next/image";

export default function Sponsors() {
  //data from json file
  let data = require("../../../data.json");

  return (
    <div className="py-[4.5rem] grid grid-cols-1 h-[17.813rem] bg-blue content-between">
      <div className="font-bold text-[2rem] leading-[2.4rem] flex items-center justify-center text-white">
        Our Sponsors
      </div>
      <div className="flex justify-center lg:space-x-8 xl:space-x-16 2xl:space-x-32">
        {data.sponsors.map((item) => (
          <button key={item}>
            <Image
              src={"/sponsors/" + item + ".svg"}
              alt="sponsors"
              width={5000}
              height={0}
              className="lg:h-[2rem] lg:w-[8rem] xl:h-[2.125rem] xl:w-[10rem] 2xl:h-[2.125rem] 2xl:w-[10rem]"
            /> {/* sponsor's logo */}
          </button> //if clicked, go to sponsor's website
        ))}
      </div>
    </div>
  );
}
