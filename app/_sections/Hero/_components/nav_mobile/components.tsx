import type { ReactNode } from "react";
import clsx from "clsx";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  IoClose,
  IoCodeSlashOutline,
  IoHomeOutline,
  IoMailOutline,
  IoPersonOutline,
  IoSparklesOutline,
} from "react-icons/io5";
import links from "../nav/linksNavType";

const linkIcons: Record<string, ReactNode> = {
  "#home": <IoHomeOutline size={20} />,
  "#projetos": <IoCodeSlashOutline size={20} />,
  "#sobre": <IoPersonOutline size={20} />,
  "#skills": <IoSparklesOutline size={20} />,
};

type ContainerProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};
export const Container = ({ children, isOpen, onClose }: ContainerProps) => {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-[999] md:hidden transition",
        isOpen ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className={clsx(
          "absolute inset-0 h-full w-full bg-black/70 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        aria-label="Fechar menu"
        tabIndex={isOpen ? 0 : -1}
        onClick={onClose}
      />

      <aside
        className={clsx(
          "absolute right-0 top-0 flex h-dvh w-[min(84vw,22rem)] flex-col border-l border-white/10 bg-[#080b10]/95 shadow-2xl transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {children}
      </aside>
    </div>
  );
};

type MenuButtonProps = {
  size: number;
  aria: string;
  isOpen: boolean;
  onClick: () => void;
};
export const MenuButton = ({ size, aria, isOpen, onClick }: MenuButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "fixed right-4 top-4 z-[900] p-1 text-[#A5D872] transition-all duration-200 md:hidden",
        "hover:cursor-pointer hover:text-white active:scale-95",
        isOpen && "pointer-events-none opacity-0",
      )}
      aria-label={aria}
      aria-expanded={isOpen}
      onClick={onClick}
    >
      <GiHamburgerMenu size={size} aria-hidden={true} />
    </button>
  );
};

type ButtonCloseProps = { onClick: () => void };
export const ButtonClose = ({ onClick }: ButtonCloseProps) => {
  return (
    <button
      type="button"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:cursor-pointer hover:bg-white/10 active:scale-95"
      aria-label="Fechar menu"
      onClick={onClick}
    >
      <IoClose size={24} aria-hidden={true} />
    </button>
  );
};

type NavContentProps = {
  onClose: () => void;
  onNavigate: () => void;
};
export const NavContent = ({ onClose, onNavigate }: NavContentProps) => {
  return (
    <div className="flex h-full flex-col p-5 text-white">
      <header className="flex items-start justify-between border-b border-white/10 pb-5">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A5D872]">
            Portfolio
          </span>
          <h2 className="mt-1 text-2xl font-bold">Thiago</h2>
        </div>
        <ButtonClose onClick={onClose} />
      </header>

      <nav className="mt-6 flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.href}
            className="group flex gap-2 rounded-xl bg-[#222C3C] px-1 pb-2 pt-1 cursor-pointer"
            href={link.href}
            onClick={onNavigate}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center text-[#A5D872] transition-all duration-500 group-hover:scale-110 group-hover:text-white">
              {linkIcons[link.href]}
            </span>
            <span className="flex min-h-12 flex-1 items-center rounded-lg bg-[#A5D872] px-3 text-[18px] font-semibold text-black shadow-md transition-all duration-500 group-hover:shadow-sm group-hover:scale-[0.98] group-hover:translate-y-0.5 group-active:bg-[#7dab50]">
              {link.link}
            </span>
          </a>
        ))}
      </nav>

      <div className="mt-auto border-t border-white/10 pt-5">
        <a
          className="group flex rounded-xl bg-[#222C3C] px-1 pb-2 pt-1 cursor-pointer"
          href="/links"
          onClick={onNavigate}
        >
          <span className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-[#A5D872] px-4 text-center font-bold text-black shadow-md transition-all duration-500 group-hover:shadow-sm group-hover:scale-[0.98] group-hover:translate-y-0.5 group-active:bg-[#7dab50]">
            <IoMailOutline size={20} aria-hidden={true} />
            Contatos
          </span>
        </a>
      </div>
    </div>
  );
};
