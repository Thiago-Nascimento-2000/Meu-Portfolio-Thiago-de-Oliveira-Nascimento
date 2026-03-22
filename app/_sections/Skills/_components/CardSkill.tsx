import { StaticImageData } from "next/image";
import * as Card from "./components";
import Tooltip from "./ToolTip";

type CardSkillProps = {
  src: string | StaticImageData;
  alt: string;
};

const CardSkill = ({ src, alt }: CardSkillProps) => {
  return (
    <div className="relative group w-fit">
      <div
        className="
          absolute bottom-full left-1/2 -translate-x-1/2 mb-4
          opacity-0 invisible translate-y-1
          group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
          transition-all duration-500
          pointer-events-none z-50
        "
      >
        <Tooltip text={alt} />
      </div>

      <Card.Container>
        <Card.ImageSkil src={src} alt={alt} />
      </Card.Container>
    </div>
  );
};

export default CardSkill;
