import Image from "next/image";
import CardProjects from "./_components/card_projects/CardProjects";

import titleProjetos from "../../public/titleprojetos.png";
import imagemprojeto1 from "../../public/screencapture-pokedextor-vercel-app-2026-03-20-12_57_25.png";
import imagemprojeto2 from "../../public/ncmfinder.png";
import imagemprojeto3 from "../../public/rydeon.png";
import imagemprojeto4 from "../../public/agendaypro.png";

const Projects = () => {
  return (
    <div className="w-screen h-fit flex flex-col justify-center items-center bg-black relative">
      <div className="absolute w-[150px] h-[150px] bg-[#A5D872] opacity-100 blur-[100px] rounded-full top-[15%] left-[10%] z-10"></div>
      <div className="absolute w-[120px] h-[100px] bg-[#A5D872] opacity-100 blur-[100px] rounded-full top-[75%] left-[75%] z-10"></div>

      <Image
        className="mb-16 w-[350px] md:w-[600px]"
        src={titleProjetos}
        alt="titulo escrito projetos"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CardProjects
          src={imagemprojeto1}
          alt=""
          title="Pokedextor"
          description="Site para consulta de pokemons usando api PokeApi..."
          tags={["reactjs", "tailwindcss", "usecontext", "fetchapi"]}
        />
        <CardProjects
          src={imagemprojeto2}
          alt=""
          title="NCM Finder"
          description="Realiza consultas de ncm no portal da siscomex.."
          tags={["reactjs", "styledcomponents", "fetchapi"]}
        />
        <CardProjects
          src={imagemprojeto3}
          alt=""
          title="Rydeon"
          description="Agencia para desenvolvimento de sites em WordPress"
          tags={["wordpress", "elementor"]}
        />
        <CardProjects
          src={imagemprojeto4}
          alt=""
          title="AgendayPro"
          description="Saas para agendamento de servicos online.."
          tags={["nextjs", "tailwindcss", "redux", "axios", "prisma", "mysql"]}
        />
      </div>
    </div>
  );
};

export default Projects;
