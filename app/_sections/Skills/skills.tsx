import CardSkill from "./_components/CardSkill";

import logo_skills1 from "../../public/logo_vscode.png";
import logo_skills2 from "../../public/next-js-logo-png_seeklogo-321806 2.png";
import logo_skills3 from "../../public/novo1691829400logo-canva-png 1 (1).webp";
import logo_skills4 from "../../public/Tailwind_CSS_Logo.svg 1.png";
import logo_skills5 from "../../public/novo1691829400logo-canva-png 1.webp";
import logo_skills6 from "../../public/Typescript_logo_2020.svg 1.png";
import logo_skills7 from "../../public/badge-css-3-512 1.png";
import logo_skills8 from "../../public/free-html-5-1-1175208 1.png";
import logo_skills9 from "../../public/React-icon.svg 1.png";
import logo_skills10 from "../../public/1691829400logo-canva-png 1.png";

const Skills = () => {
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center items-center relative">
      <div className="absolute w-[110px] h-[90px] bg-[#A5D872] opacity-100 blur-[85px] rounded-full top-[30%] left-[80%] z-110"></div>
      <div className="absolute w-[90px] h-[90px] bg-[#A5D872] opacity-100 blur-[80px] rounded-full top-[70%] left-[10%] z-110"></div>
      <div className="absolute w-[90px] h-[90px] bg-[#A5D872] opacity-100 blur-[80px] rounded-full top-[20%] left-[30%] z-110"></div>

      <div className="flex flex-col gap-12 justify-center items-center">
        <div className="flex flex-col w-[310px] md:w-[650px]">
          <h2 className="text-[#A5D872] text-[32px] font-bold text-left">
            Skills
          </h2>
          <h2 className="text-white text-[20px] font-bold">
            Proficiência nas seguintes ferramentas e linguagens...
          </h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          <CardSkill src={logo_skills1} alt="logo do vscode" />
          <CardSkill src={logo_skills2} alt="logo do vscode" />
          <CardSkill src={logo_skills3} alt="logo do vscode" />
          <CardSkill src={logo_skills4} alt="logo do vscode" />
          <CardSkill src={logo_skills5} alt="logo do vscode" />
          <CardSkill src={logo_skills6} alt="logo do vscode" />
          <CardSkill src={logo_skills7} alt="logo do vscode" />
          <CardSkill src={logo_skills8} alt="logo do vscode" />
          <CardSkill src={logo_skills9} alt="logo do vscode" />
          <CardSkill src={logo_skills10} alt="logo do vscode" />
        </div>
        <div className="w-full justify-start">
          <div className="bg-[#222C3C] w-fit px-1 pb-2 pt-1 rounded-[12px] flex gap-2 cursor-pointer">
            <button className="bg-[#A5D872] flex items-center p-2 w-fit h-[40px] rounded-[8px] md:text-[20px] font-semibold cursor-pointer hover:bg-[#94cc5b] transition-all duration-150 shadow-md active:shadow-sm active:scale-95 active:translate-y-[2px]">
              CONTATO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
