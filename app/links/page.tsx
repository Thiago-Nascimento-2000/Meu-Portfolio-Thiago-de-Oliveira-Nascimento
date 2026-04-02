import Image from "next/image";
import Link from "next/link";

import image from "../public/perfil.png";
import { FaArrowLeft, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdWebAsset } from "react-icons/md";

const Links = () => {
  return (
    <main className="flex h-screen flex-col justify-center items-center bg-gradient-to-t from-[#040504] 0% to-[#79ae6b] 100%">
      <Link href="/">
        <span className="bg-[#A5D872] p-2 rounded-full fixed top-5 left-5 hover:cursor-pointer hover:bg-[#A5D872]/80">
          <FaArrowLeft className="text-white" size={24} />
        </span>
      </Link>
      <div className="relative top-10 flex flex-col items-center">
        <span className="text-white">Links</span>
        <div className="w-fit border-[#A5D872] border-2 border-dashed flex justify-center px-4 py-2">
          <h1 className="text-white font-semibold text-5xl [text-shadow:1px_1px_5px_rgba(0, 0, 0, 0.7)]">
            Thiago
          </h1>
        </div>
      </div>
      <Image
        className="rounded-full w-50 h-50 object-cover"
        src={image}
        alt="foto de perfil de thiago o. nascimento"
      />
      <div className="text-white flex gap-4 mt-4">
        <FaLinkedin
          className="hover:cursor-pointer hover:text-[#82b053] text-[#A5D872]"
          size={24}
        />
        <FaYoutube
          className="hover:cursor-pointer hover:text-[#82b053] text-[#A5D872]"
          size={24}
        />
        <FaGithub
          className="hover:cursor-pointer hover:text-[#82b053] text-[#A5D872]"
          size={24}
        />
        <MdWebAsset
          className="hover:cursor-pointer hover:text-[#82b053] text-[#A5D872]"
          size={24}
        />
      </div>

      <section className="mt-8 flex flex-col gap-4">
        <div className="bg-[#222C3C] px-1 pb-2 pt-1 rounded-xl flex gap-2 cursor-pointer">
          <div className="bg-[#A5D872] flex flex-col p-2 w-full h-fit rounded-lg md:text-[20px] font-semibold cursor-pointer hover:bg-[#94cc5b] transition-all duration-150 shadow-md active:shadow-sm active:scale-95 active:translate-y-0.5">
            <h2 className="text-2xl">Lorem</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Links;
