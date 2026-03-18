import Image from "next/image";

// Container
type ContainerProps = { children: React.ReactNode };
export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="bg-[#222C3C] px-1 pt-1 pb-2 flex rounded-[20px] w-[747px] h-fit z-200 absolute top-0 mt-4">
      {children}
    </div>
  );
};

// Nav
type NavProps = { children: React.ReactNode };
export const Nav = ({ children }: ContainerProps) => {
  return (
    <div className="flex justify-between px-2 items-center bg-[#D9D9D9] rounded-[15px] w-[735px] h-[70px]">
      {children}
    </div>
  );
};

// Logo Nav
type NavLogoProps = { srcImage: string; altImage: string };
export const NavLogo = ({ srcImage, altImage }: NavLogoProps) => {
  return (
    <div className="flex items-center gap-4">
      <Image src={srcImage} alt={altImage} width={70} height={70} />
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
    <li className="flex justify-center items-center" key={link.index}>
      <a className="text-[18px]" href={link.link}>
        {link.link}
      </a>
    </li>
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
    <div className="bg-[#222C3C] px-1 pb-2 pt-1 mt-1 rounded-[12px] flex gap-2 cursor-pointer">
      <button className="bg-[#A5D872] p-2 w-fit h-[45px] rounded-[8px] md:text-[20px] font-semibold cursor-pointer hover:bg-[#94cc5b]">
        {textButton}
      </button>
    </div>
  );
};
