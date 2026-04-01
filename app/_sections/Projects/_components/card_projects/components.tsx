import Image, { StaticImageData } from "next/image";

// Container Card
type ContainerProps = { children: React.ReactNode };
export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-67.5 min-h-87.5 flex flex-col gap-4 z-100 mt-8">
      {children}
    </div>
  );
};

// Project Image Card
type CardImage = {
  src: string | StaticImageData;
  alt: string;
};
export const CardImage = ({ src, alt }: CardImage) => {
  return (
    <div className="rounded-[18px] hover:cursor-pointer h-50 bg-[#222C3C]/50 object-cover object-top z-180 overflow-hidden">
      <Image
        className="transaction duration-4500 hover:translate-y-[-40%]"
        src={src}
        alt={alt}
        width={300}
      />
    </div>
  );
};

// Container Contente
type ContainerContenteProps = { children: React.ReactNode };
export const ContainerContente = ({ children }: ContainerContenteProps) => {
  return <div className="flex flex-col items-start">{children}</div>;
};

// Title Card
type TitleProps = { title: string };
export const Title = ({ title }: TitleProps) => {
  return (
    <h2 className="text-white uppercase font-semibold flex items-center">
      {title}
    </h2>
  );
};

// Description Card
type DescriptionProps = { description: string };
export const Description = ({ description }: DescriptionProps) => {
  return <p className="text-gray-300 mb-4">{description}</p>;
};

// Tag Stack
type TagType =
  | "css"
  | "html"
  | "javascript"
  | "nextjs"
  | "reactjs"
  | "tailwindcss"
  | "usecontext"
  | "redux"
  | "nodejs"
  | "wordpress"
  | "typescript"
  | "styledcomponents"
  | "elementor"
  | "axios"
  | "prisma"
  | "mysql"
  | "fetchapi";

const tagLabels: Record<TagType, string> = {
  css: "CSS",
  html: "HTML",
  javascript: "JAVASCRIPT",
  nextjs: "NEXT JS",
  reactjs: "REACT JS",
  tailwindcss: "TAILWIND CSS",
  usecontext: "USE CONTEXT",
  redux: "REDUX",
  nodejs: "NODE JS",
  wordpress: "WORDPRESS",
  typescript: "TYPESCRIPT",
  styledcomponents: "STYLED COMPONENTS",
  elementor: "ELEMENTOR",
  axios: "AXIOS",
  prisma: "PRISMA",
  mysql: "MYSQL",
  fetchapi: "FETCH API",
};

type TagProps = {
  tagname: TagType;
};

export const Tag = ({ tagname }: TagProps) => {
  return (
    <div className="bg-[#222C3C] px-0.5 pt-0.5 pb-1 rounded-lg">
      <span className="w-fit h-6 px-2 bg-[#A5D872] flex justify-center items-center rounded-[5px]">
        <h2 className="text-black text-[13px] font-semibold uppercase">
          {tagLabels[tagname]}
        </h2>
      </span>
    </div>
  );
};
