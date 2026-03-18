import Image from "next/image";
import Nav from "../_components/nav/Nav";
import { IoMdArrowForward } from "react-icons/io";

import wallpaperHero from "../public/background-hero.png";

const Hero = () => {
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center items-center z-50">
      <div className="absolute w-[150px] h-[150px] bg-[#A5D872] opacity-100 blur-[120px] rounded-full top-[20%] left-[10%] z-110"></div>
      <div className="absolute w-[100px] h-[100px] bg-[#A5D872] opacity-100 blur-[80px] rounded-full top-[30%] left-[80%] z-110"></div>
      <div className="absolute w-[90px] h-[90px] bg-[#A5D872] opacity-100 blur-[90px] rounded-full top-[75%] left-[35%] z-110"></div>
      <Nav />
      <Image
        src={wallpaperHero}
        alt="wallpaper da sessao hero"
        className="w-full h-full absolute object-cover inset-0 z-100 opacity-10"
      />
      <div className="flex flex-col justify-center items-center relative">
        <h2 className="text-white font-bold font-bebas text-5xl md:text-[96px] leading-non z-100">
          THIAGO DE O. NASCIMENTO
        </h2>

        <div className="bg-gradient-to-b from-black to-gray-800 border-3 border-white py-1 px-2 transform -rotate-4 absolute z-110">
          <span className="text-[#A5D872] font-bold md:text-3xl">
            FULLSTACK
          </span>
        </div>

        <h2 className="text-white font-bold font-bebas text-5xl md:text-[96px] leading-none z-100">
          DESENVOLVEDOR
        </h2>
      </div>

      <div className="bg-[#222C3C] px-1 pb-2 pt-1 mt-1 rounded-[12px] flex gap-2 cursor-pointer z-100">
        <button className="bg-[#A5D872] p-2 md:w-[143px] md:h-[50px] rounded-[8px] md:text-[20px] font-semibold cursor-pointer hover:bg-[#94cc5b] hover:bg-[#94cc5b] transition-all duration-150 shadow-md active:shadow-sm active:scale-95 active:translate-y-[2px]">
          SABER MAIS
        </button>
        <button className="bg-[#A5D872] p-2 md:w-[50px] md:h-[50px] rounded-[8px] flex justify-center items-center cursor-pointer hover:bg-[#94cc5b] hover:bg-[#94cc5b] transition-all duration-150 shadow-md active:shadow-sm active:scale-95 active:translate-y-[2px]">
          <IoMdArrowForward size={24} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
