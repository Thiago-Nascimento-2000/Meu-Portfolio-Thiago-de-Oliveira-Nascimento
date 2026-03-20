import CardSkill from "./_components/CardSkill";

import logo_vscode from "../../public/logo_vscode.png";

const Skills = () => {
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center items-center relative">
      <div className="absolute w-[110px] h-[90px] bg-[#A5D872] opacity-100 blur-[85px] rounded-full top-[30%] left-[80%] z-110"></div>
      <div className="absolute w-[90px] h-[90px] bg-[#A5D872] opacity-100 blur-[80px] rounded-full top-[70%] left-[10%] z-110"></div>
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
          <CardSkill src={logo_vscode} alt="logo do vscode" />
          <CardSkill src={logo_vscode} alt="logo do vscode" />
          <CardSkill src={logo_vscode} alt="logo do vscode" />
          <CardSkill src={logo_vscode} alt="logo do vscode" />
          <CardSkill src={logo_vscode} alt="logo do vscode" />
          <CardSkill src={logo_vscode} alt="logo do vscode" />
          <CardSkill src={logo_vscode} alt="logo do vscode" />
          <CardSkill src={logo_vscode} alt="logo do vscode" />
          <CardSkill src={logo_vscode} alt="logo do vscode" />
          <CardSkill src={logo_vscode} alt="logo do vscode" />
          <CardSkill src={logo_vscode} alt="logo do vscode" />
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
