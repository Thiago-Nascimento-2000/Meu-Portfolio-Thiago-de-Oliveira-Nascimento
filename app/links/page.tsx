import Image from "next/image";
import Link from "next/link";

import image from "../../public/about/perfil.webp";
import { FaArrowLeft, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdWebAsset } from "react-icons/md";

import background from "../../public/backgrounds/background-hero.webp";
import { JSX } from "react";

type SocialLink = {
  name: string;
  link: string;
  icon: JSX.Element;
};

const links: SocialLink[] = [
  {
    name: "GitHub",
    link: "https://github.com/Thiago-Nascimento-2000",
    icon: <FaGithub size={24} />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/thiagoonascimento/",
    icon: <FaLinkedin size={24} />,
  },
  {
    name: "Portfolio",
    link: "https://portfolio-thiago-de-oliveira-nascimento.vercel.app/",
    icon: <MdWebAsset size={24} />,
  },
];

const Links = () => {
  return (
    <main className="relative flex h-screen flex-col justify-center items-center overflow-hidden bg-gradient-to-t from-[#040504] 0% to-[#79ae6b] 100%">
      <Image
        src={background}
        alt="wallpaper da sessao hero"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-9"
      />
      <Link href="/">
        <span className="fixed top-5 left-5 z-20 rounded-full bg-[#A5D872] p-2 hover:cursor-pointer hover:bg-[#A5D872]/80">
          <FaArrowLeft className="text-white" size={24} />
        </span>
      </Link>
      <div className="relative top-5 z-25 flex flex-col items-center">
        <span className="text-white">Links</span>
        <div className="w-fit border-[#A5D872] border-2 border-dashed flex justify-center px-4 py-2">
          <h1 className="text-white font-semibold text-5xl [text-shadow:1px_1px_5px_rgba(0, 0, 0, 0.7)]">
            Thiago
          </h1>
        </div>
      </div>
      <Image
        className="relative z-10 rounded-full w-50 h-50 object-cover"
        src={image}
        alt="foto de perfil de thiago o. nascimento"
      />

      <section className="relative z-10 mt-4 mx-4 flex flex-col gap-4">
        {links.map((link) => (
          <a
            key={link.link}
            href={link.link}
            target="_blank"
            rel="noreferrer"
            className="bg-[#222C3C] pb-1 pt-1 px-1 rounded-xl flex gap-2 cursor-pointer"
          >
            <span className="flex items-center ml-1 text-[#A5D872]">
              {link.icon}
            </span>
            <span className="bg-[#A5D872] flex flex-col p-2 w-full h-fit rounded-lg md:text-[20px] font-semibold cursor-pointer hover:bg-[#94cc5b] transition-all duration-150 shadow-md active:shadow-sm active:scale-95 active:translate-y-0.5">
              <h2 className="text-2xl">{link.name}</h2>
              <p className="text-sm">{link.link}</p>
            </span>
          </a>
        ))}
      </section>
    </main>
  );
};

export default Links;
