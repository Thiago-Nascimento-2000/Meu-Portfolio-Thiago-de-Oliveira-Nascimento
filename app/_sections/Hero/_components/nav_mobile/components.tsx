import clsx from "clsx";
import { GiHamburgerMenu } from "react-icons/gi";
import links from "../nav/linksNavType";

type ContainerProps = { children: React.ReactNode; isHidden: boolean };
export const Container = ({ children, isHidden }: ContainerProps) => {
  return (
    <div
      className={clsx(
        "absolute w-full h-full md:hidden top-0 flex justify-end z-401",
        isHidden && "hidden",
        !isHidden && "",
      )}
    >
      {children}
    </div>
  );
};

type IconProps = { size: number; aria: string; onClick: () => void };
export const Icon = ({ size, aria, onClick }: IconProps) => {
  return (
    <button
      className="z-50 absolute top-0 right-0 m-4 md:hidden"
      onClick={onClick}
    >
      <GiHamburgerMenu
        className="text-[#A5D872] hover:cursor-pointer"
        size={size}
        aria-label={aria}
      />
    </button>
  );
};

type ButtonCloseProps = { onClick: () => void };
export const ButtonClose = ({ onClick }: ButtonCloseProps) => {
  return (
    <button
      className={clsx(
        "text-3xl text-red-500/80 hover:cursor-pointer z-402 fixed mt-6 mr-8",
      )}
      onClick={onClick}
    >
      X
    </button>
  );
};

type NavContentProps = { onClick: () => void };
export const NavContent = ({ onClick }: NavContentProps) => {
  return (
    <div className="w-60 h-full fixed bg-black/80 text-white p-4 z-400 flex flex-col gap-4">
      <h2 className="text-2xl font-semibold mt-12 text-[#A5D872]">Menu</h2>
      <br />
      {links.map((link) => (
        <ul key={link.index} onClick={onClick}>
          <li>
            <a
              className="text-[18px] border-b-2 border-transparent hover:border-b-2 hover:border-[#4FB401]"
              href={link.href}
            >
              {link.link}
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
};
