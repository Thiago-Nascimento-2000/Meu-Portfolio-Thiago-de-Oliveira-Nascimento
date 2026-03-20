import Image from "next/image";
import CardProjects from "./_components/card_projects/CardProjects";

import titleProjetos from "../../public/titleprojetos.png";
import imagemprojeto1 from "../../public/projeto1.png";
import imagemprojeto2 from "../../public/projeto2.png";
import imagemprojeto3 from "../../public/projeto3.png";
import imagemprojeto4 from "../../public/projeto4.png";
import imagemprojeto5 from "../../public/projeto5.png";

const Projects = () => {
  return (
    <div className="w-screen h-fit flex flex-col justify-center items-center bg-black relative">
      <div className="absolute w-[150px] h-[150px] bg-[#A5D872] opacity-100 blur-[100px] rounded-full top-[15%] left-[10%] z-10"></div>
      <div className="absolute w-[120px] h-[100px] bg-[#A5D872] opacity-100 blur-[100px] rounded-full top-[75%] left-[75%] z-10"></div>
      <Image
        className="mb-16 w-[400px] md:w-[650px]"
        src={titleProjetos}
        alt="titulo escrito projetos"
      />
      <div className="w-full h-full gap-8 justify-center flex flex-wrap">
        <CardProjects
          src={imagemprojeto1}
          alt=""
          title="MECANISMO DE BUSCA"
          description="descricao.."
        />
        <CardProjects
          src={imagemprojeto2}
          alt=""
          title="MECANISMO DE BUSCA"
          description="descricao.."
        />
        <CardProjects
          src={imagemprojeto3}
          alt=""
          title="MECANISMO DE BUSCA"
          description="descricao.."
        />
        <CardProjects
          src={imagemprojeto4}
          alt=""
          title="MECANISMO DE BUSCA"
          description="descricao.."
        />
        <CardProjects
          src={imagemprojeto1}
          alt=""
          title="MECANISMO DE BUSCA"
          description="descricao.."
        />
        <CardProjects
          src={imagemprojeto5}
          alt=""
          title="MECANISMO DE BUSCA"
          description="descricao.."
        />
      </div>
    </div>
  );
};

export default Projects;
