import Image from "next/image";

// Container Card
type ContainerProps = { children: React.ReactNode };
export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-[90px] h-[90px] bg-white rounded-2xl flex justify-center items-center hover:cursor-pointer">
      {children}
    </div>
  );
};

// Image
type ImageSkilProps = { src: string; alt: string };
export const ImageSkil = ({ src, alt }: ImageSkilProps) => {
  return <Image src={src} alt={alt} width={60} height={60} />;
};
