import Image from "next/image";

import perfil from "../../public/perfil.png";

const About = () => {
  return (
    <div className="w-screen py-32 bg-black flex flex-col justify-center items-center relative">
      <div className="absolute w-[150px] h-[150px] bg-[#A5D872] opacity-100 blur-[120px] rounded-full top-[30%] left-[70%] z-110"></div>
      <h2 className="text-[#A5D872] font-bold text-3xl">Sobre Mim</h2>
      <h2 className="text-white font-semibold text-[18px]">
        Paixão, Criatividade, e Código
      </h2>
      <div className="mt-16">
        <div className="flex w-screen justify-center items-center gap-32 flex-wrap">
          <Image src={perfil} width={300} height={300} />
          <div>
            <p className="w-[450px] text-white font-semibold ">
              Olá, eu sou o Thiago Desenvolvedor Frontend, Com um forte foco no
              desenvolvimento voltado para UI/UX, eu combino design e tecnologia
              para criar projetos coesos e impactantes que ajudam empresas a se
              destacarem no mundo digital. <br />
              <br /> Sou especializado no design e desenvolvimento de sites e
              aplicações bonitas, intuitivas e responsivas. Meu olhar atento aos
              detalhes e comprometimento com a inovação me permitem transformar
              ideias em experiências digitais intuitivas e envolventes. <br />
              <br />
              Combinando criatividade e expertise técnica, entrego soluções que
              não apenas cativam os usuários, mas também geram resultados. Vamos
              colaborar e criar algo excepcional juntos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
