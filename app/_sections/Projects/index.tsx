import Image from "next/image";
import CardProjects from "./_components/card_projects/CardProjects";

import titleProjetos from "../../../public/title/titleprojetos.webp";
import imagemprojeto1 from "../../../public/projects/screencapture-pokedextor-vercel-app-2026-03-20-12_57_25.webp";
import imagemprojeto2 from "../../../public/projects/ncmfinder.webp";
import imagemprojeto3 from "../../../public/projects/rydeon.webp";
import imagemprojeto4 from "../../../public/projects/agendaypro.webp";

const Projects = () => {
  return (
    <section
      id="projetos"
      className="w-screen h-fit flex flex-col justify-center items-center bg-black relative"
    >
      <div className="absolute w-37.5 h-87.5 bg-[#446523] opacity-90 blur-[100px] rounded-full top-[10%] left-[15%] z-25"></div>
      <div className="absolute w-30 h-27.5 bg-[#95f635] opacity-100 blur-[100px] rounded-full top-[75%] left-[75%] z-25"></div>

      <Image
        className="mb-16 w-87.5 md:w-150"
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
    </section>
  );
};

export default Projects;
