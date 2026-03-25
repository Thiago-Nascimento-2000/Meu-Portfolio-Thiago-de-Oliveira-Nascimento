import Image, { StaticImageData } from "next/image";

// Container
type ContainerProps = { children: React.ReactNode };
export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="bg-[#222C3C] opacity-0 md:opacity-100 px-1 pt-1 pb-2 flex rounded-[20px] w-fit h-fit z-200 absolute top-0 mt-4">
      {children}
    </div>
  );
};

// Nav
type NavProps = { children: React.ReactNode };
export const Nav = ({ children }: ContainerProps) => {
  return (
    <div className="flex justify-between px-2 items-center bg-[#D9D9D9] rounded-[15px] w-200 h-17.5">
      {children}
    </div>
  );
};

// Container Nav
type ContainerNavProps = { children: React.ReactNode };
export const ContainerNav = ({ children }: ContainerNavProps) => {
  return <div className="flex gap-2">{children}</div>;
};

// Logo Nav
type NavLogoProps = { src: string | StaticImageData; alt: string };
export const NavLogo = ({ src, alt }: NavLogoProps) => {
  return (
    <div className="flex items-center gap-2">
      <Image src={src} alt={alt} width={100} />
      <span className="text-2xl">|</span>
    </div>
  );
};

// Cintainer Links
type ContainerLinksProps = {
  children: React.ReactNode;
};

export const ContainerLinks = ({ children }: ContainerLinksProps) => {
  return <div className="flex gap-4">{children}</div>;
};

// Links Nav
type linksType = {
  index: number;
  link: string;
};

const links: linksType[] = [
  { index: 1, link: "Home" },
  { index: 2, link: "Projetos" },
  { index: 3, link: "Sobre" },
  { index: 4, link: "Skills" },
];

export const LinksNav = () => {
  return links.map((link) => (
    <ul key={link.index} className="flex justify-center items-center">
      <li>
        <a
          className="text-[18px] border-b-2 border-transparent hover:border-b-2 hover:border-[#4FB401]"
          href={link.link}
        >
          {link.link}
        </a>
      </li>
    </ul>
  ));
};

// Container Button Nav
type ContainerButtonNavProps = {
  children: React.ReactNode;
};
export const ContainerButtonNav = ({ children }: ContainerButtonNavProps) => {
  return <div className="flex gap-2">{children}</div>;
};

// Button Nav
type buttonProps = {
  textButton: string;
};

export const Button = ({ textButton }: buttonProps) => {
  return (
    <div className="bg-[#222C3C] px-1 pb-2 pt-1 rounded-xl flex gap-2 cursor-pointer">
      <button className="bg-[#A5D872] flex items-center p-2 w-fit h-10 rounded-lg md:text-[20px] font-semibold cursor-pointer hover:bg-[#94cc5b] transition-all duration-150 shadow-md active:shadow-sm active:scale-95 active:translate-y-0.5">
        {textButton}
      </button>
    </div>
  );
};
