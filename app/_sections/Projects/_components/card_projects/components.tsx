import Image from "next/image";

// Container Card
type ContainerProps = { children: React.ReactNode };
export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-[270px] min-h-[350px] flex flex-col gap-8 z-20">
      {children}
    </div>
  );
};

// Project Image Card
type CardImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
export const CardImage = ({ src, width, height, alt }: CardImage) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

// Container Contente
type ContainerContenteProps = { children: React.ReactNode };
export const ContainerContente = ({ children }: ContainerContenteProps) => {
  return <div className="flex flex-col items-start">{children}</div>;
};

// Title Card
type TitleProps = { title: string };
export const Title = ({ title }: TitleProps) => {
  return <h2 className="text-white uppercase">{title}</h2>;
};

// Description Card
type DescriptionProps = { description: string };
export const Description = ({ description }: DescriptionProps) => {
  return <p className="text-gray-300">{description}</p>;
};

// Tag Stack
const tagstype: Record<string, string> = {
  css: "CSS",
  html: "HTML",
  javascript: "JAVASCRIPT",
  nextjs: "NEXTJS",
  default: "DEFAULT",
};

type TagProps = { tagname: string };
export const Tag = ({ tagname }: TagProps) => {
  return (
    <span className="w-fit h-[24px] px-2 mt-2 bg-[#A5D872] flex justify-center items-center rounded-[5px]">
      <h2 className="text-black text-[13px] font-semibold uppercase">
        {tagname}
      </h2>
    </span>
  );
};
