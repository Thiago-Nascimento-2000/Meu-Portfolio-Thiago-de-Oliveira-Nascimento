import Image from "next/image";

import perfil from "../../public/perfil.png";
import personagem1 from "../../public/personagem1.webp";
import personagem2 from "../../public/personagem2.webp";

const About = () => {
  return (
    <div className="w-screen bg-black flex flex-col justify-center items-center relative pb-24">
      <div className="absolute w-[150px] h-[150px] bg-[#a6f655] opacity-100 blur-[120px] rounded-full top-[40%] left-[70%] z-25"></div>
      <Image
        className="relative top-[540px] right-[160px] md:top-[540px] md:right-[160px] lg:top-[570px] lg:right-[450px]"
        src={personagem1}
        alt="personagem 1 em desenho segurando lampada e notebook"
        width={90}
      />
      <Image
        className="relative top-[150px] left-[150px] md:top-[150px] md:left-[150px] lg:top-[185px] lg:left-[-135px]"
        src={personagem2}
        alt="personagem 2 acenando"
        width={90}
      />
      <h2 className="text-[#A5D872] font-bold text-3xl">Sobre Mim</h2>
      <h2 className="text-white font-semibold text-[18px]">
        Paixão, Criatividade, e Código
      </h2>
      <div className="mt-16">
        <div className="flex w-screen justify-center items-center gap-32 flex-wrap">
          <Image
            className="w-[300px]"
            src={perfil}
            alt="foto de perfil do Thiago Nascimento"
          />
          <div>
            <p className="w-[380px] md:w-[450px] text-white font-semibold ">
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
