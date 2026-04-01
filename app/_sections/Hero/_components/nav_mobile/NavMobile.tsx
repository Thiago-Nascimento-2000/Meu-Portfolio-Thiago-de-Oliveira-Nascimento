"use client";

import { useState } from "react";
import * as Card from "./components";

type NavMobileProps = { size: number; aria: string };
const NavMobile = ({ size, aria }: NavMobileProps) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const HandleCloseNavMobile = () => {
    setIsHidden(true);
  };

  const HandleOpenNavMobile = () => {
    setIsHidden(false);
  };

  return (
    <>
      <Card.Icon
        size={size}
        aria={aria}
        onClick={() => HandleOpenNavMobile()}
      />
      <Card.Container isHidden={isHidden}>
        <Card.ButtonClose onClick={() => HandleCloseNavMobile()} />
        <Card.NavContent onClick={() => HandleCloseNavMobile()} />
      </Card.Container>
    </>
  );
};

export default NavMobile;
