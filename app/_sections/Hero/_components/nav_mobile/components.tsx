import { GiHamburgerMenu } from "react-icons/gi";

type ConatinerProps = { children: React.ReactNode };
export const Container = ({ children }: ConatinerProps) => {
  return (
    <div className="absolute w-full p-4 md:hidden top-0 flex justify-end z-50">
      {children}
    </div>
  );
};

type IconProps = { size: number; aria: string };
export const Icon = ({ size, aria }: IconProps) => {
  return (
    <GiHamburgerMenu
      className="text-[#A5D872] hover:cursor-pointer"
      size={size}
      aria-label={aria}
    />
  );
};
