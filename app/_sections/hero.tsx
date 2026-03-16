import { IoMdArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center relative">
        <h2 className="text-white font-bold font-bebas text-[96px] leading-none">
          THIAGO DE O. NASCIMENTO
        </h2>

        <div className="bg-gradient-to-b from-black to-gray-800 border-3 border-white py-1 px-2 transform -rotate-4 absolute">
          <span className="text-[#A5D872] font-bold text-3xl">FULLSTACK</span>
        </div>

        <h2 className="text-white font-bold font-bebas text-[96px] leading-none">
          DESENVOLVEDOR
        </h2>
      </div>

      <div className="bg-[#222C3C] px-1 pb-2 pt-1 rounded-[12px] flex gap-2 cursor-pointer">
        <button className="bg-[#A5D872] w-[143px] h-[50px] rounded-[8px] text-[20px] font-semibold cursor-pointer hover:bg-[#94cc5b]">
          SABER MAIS
        </button>
        <button className="bg-[#A5D872] w-[50px] h-[50px] rounded-[8px] flex justify-center items-center cursor-pointer hover:bg-[#94cc5b]">
          <IoMdArrowForward size={24} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
