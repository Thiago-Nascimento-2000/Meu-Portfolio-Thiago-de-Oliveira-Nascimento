import Image, { StaticImageData } from "next/image";

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
  src: string | StaticImageData;
  alt: string;
};
export const CardImage = ({ src, alt }: CardImage) => {
  return (
    <Image
      className="rounded-[18px] w-[300px] h-[200px] object-cover object-top z-180"
      src={src}
      alt={alt}
      width={300}
    />
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
  return <h2 className="text-white uppercase">{title}</h2>;
};

// Description Card
type DescriptionProps = { description: string };
export const Description = ({ description }: DescriptionProps) => {
  return <p className="text-gray-300">{description}</p>;
};

// Tag Stack
type TagType = "css" | "html" | "javascript" | "nextjs";

const tagLabels: Record<TagType, string> = {
  css: "CSS",
  html: "HTML",
  javascript: "JAVASCRIPT",
  nextjs: "NEXT JS",
};

type TagProps = {
  tagname: TagType;
};

export const Tag = ({ tagname }: TagProps) => {
  return (
    <div className="bg-[#222C3C] px-0.5 pt-0.5 pb-1 rounded-[8px] mt-4">
      <span className="w-fit h-[24px] px-2 bg-[#A5D872] flex justify-center items-center rounded-[5px]">
        <h2 className="text-black text-[13px] font-semibold uppercase">
          {tagLabels[tagname]}
        </h2>
      </span>
    </div>
  );
};
