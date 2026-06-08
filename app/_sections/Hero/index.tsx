import Image from "next/image";
import Nav from "./_components/nav/Nav";
import { IoMdArrowForward } from "react-icons/io";

import wallpaperHero from "../../../public/backgrounds/background-hero.webp";
import NavMobile from "./_components/nav_mobile/NavMobile";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-screen h-150 md:h-screen bg-black flex flex-col justify-center items-center z-50 overflow-hidden"
    >
      <div className="absolute w-37.5 h-37.5 bg-[#9fff3f] opacity-100 blur-[120px] rounded-full top-[20%] left-[10%] z-25"></div>
      <div className="absolute w-25 h-25 bg-[#82f510] opacity-100 blur-[80px] rounded-full top-[30%] left-[80%] z-25"></div>
      <div className="absolute w-35 h-27.5 bg-[#8ae62e] opacity-100 blur-[90px] rounded-full top-[50%] left-[40%] z-25"></div>
      <div className="absolute w-35 h-27.5 bg-[#8ae62e] opacity-75 blur-[90px] rounded-full top-[35%] left-[60%] z-25"></div>
      <div className="absolute w-25 h-25 bg-[#82f510] opacity-100 blur-[80px] rounded-full top-[0%] left-[30%] z-25"></div>
      <div className="absolute w-35 h-27.5 bg-[#8ae62e] opacity-60 blur-[90px] rounded-full top-[75%] left-[30%] z-25"></div>

      <Nav />
      <NavMobile size={34} aria="Botão para abrir o menu mobile" />
      <Image
        src={wallpaperHero}
        alt="wallpaper da sessao hero"
        className="pointer-events-none w-full h-full absolute object-cover inset-0 z-0 opacity-9"
      />
      <div className="flex flex-col justify-center items-center gap-2 md:gap-0 relative">
        <h1 className="text-white font-bold font-bebas text-5xl text-center md:text-[96px] leading-non z-100">
          THIAGO DE O. NASCIMENTO
        </h1>

        <div className="bg-linear-to-b from-black to-gray-800 border-3 border-white py-1 px-2 transform -rotate-4 absolute z-110">
          <span className="text-[#A5D872] font-bold md:text-3xl">
            FULLSTACK
          </span>
        </div>

        <h2 className="text-white font-bold font-bebas text-5xl md:text-[96px] leading-none z-100">
          DESENVOLVEDOR
        </h2>
      </div>
      <div className="bg-[#222C3C] px-1 pb-2 pt-1 mt-2 rounded-xl z-100">
        <a href="#sobre" className="flex gap-2 cursor-pointer">
          <button className="bg-[#A5D872] p-2 md:w-35.75 md:h-12.5 rounded-lg md:text-[20px] font-semibold cursor-pointer active:bg-[#7dab50] transition-all duration-500 shadow-md hover:shadow-sm hover:scale-95 hover:translate-y-0.5">
            SABER MAIS
          </button>
          <button
            className="bg-[#A5D872] p-2 md:w-12.5 md:h-12.5 rounded-lg flex justify-center items-center cursor-pointer active:bg-[#7dab50] transition-all duration-500 shadow-md hover:shadow-sm hover:scale-95 hover:translate-y-0.5"
            aria-label="Botão para ir a sessão Sobre Mim"
          >
            <IoMdArrowForward size={24} aria-hidden={true} />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
