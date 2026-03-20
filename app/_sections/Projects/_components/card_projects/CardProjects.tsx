import { StaticImageData } from "next/image";
import * as Card from "./components";

type CardProjectsProps = {
  src: string | StaticImageData;
  alt: string;
  title: string;
  description: string;
};

const CardProjects = ({ src, alt, title, description }: CardProjectsProps) => {
  return (
    <Card.Container>
      <Card.CardImage src={src} alt={alt} width={300} height={172} />
      <Card.ContainerContente>
        <Card.Title title={title} />
        <Card.Description description={description} />
        <div className="flex gap-2">
          <Card.Tag tagname="css" />
          <Card.Tag tagname="next js" />
        </div>
      </Card.ContainerContente>
    </Card.Container>
  );
};

export default CardProjects;
