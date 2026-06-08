"use client";

import { useEffect, useState } from "react";
import * as Card from "./components";

type NavMobileProps = { size: number; aria: string };
const NavMobile = ({ size, aria }: NavMobileProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCloseNavMobile = () => {
    setIsOpen(false);
  };

  const handleOpenNavMobile = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleCloseNavMobile();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <Card.MenuButton
        size={size}
        aria={aria}
        isOpen={isOpen}
        onClick={handleOpenNavMobile}
      />
      <Card.Container isOpen={isOpen} onClose={handleCloseNavMobile}>
        <Card.NavContent
          onClose={handleCloseNavMobile}
          onNavigate={handleCloseNavMobile}
        />
      </Card.Container>
    </>
  );
};

export default NavMobile;
