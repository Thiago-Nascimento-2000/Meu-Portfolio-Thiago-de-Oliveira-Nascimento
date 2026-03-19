import * as Card from "./components";

type CardSkillProps = {
  src: string;
  alt: string;
};
const CardSkill = ({ src, alt }: CardSkillProps) => {
  return (
    <Card.Container>
      <Card.ImageSkil src={src} alt={alt} />
    </Card.Container>
  );
};

export default CardSkill;
