import Image, { StaticImageData } from "next/image";

// Container Card
type ContainerProps = { children: React.ReactNode };
export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-22.5 h-22.5 bg-white rounded-2xl flex justify-center items-center hover:cursor-pointer transition-all duration-500 hover:scale-110">
      {children}
    </div>
  );
};

// Image
type ImageSkilProps = { src: string | StaticImageData; alt: string };
export const ImageSkil = ({ src, alt }: ImageSkilProps) => {
  return <Image src={src} alt={alt} width={60} height={60} />;
};
