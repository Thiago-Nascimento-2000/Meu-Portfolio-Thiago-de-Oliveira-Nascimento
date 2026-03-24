import { StaticImageData } from "next/image";
import * as Card from "./components";

type TagType =
  | "css"
  | "html"
  | "javascript"
  | "nextjs"
  | "reactjs"
  | "tailwindcss"
  | "usecontext"
  | "redux"
  | "nodejs"
  | "wordpress"
  | "typescript"
  | "styledcomponents"
  | "elementor"
  | "axios"
  | "prisma"
  | "mysql"
  | "fetchapi";

type CardProjectsProps = {
  src: string | StaticImageData;
  alt: string;
  title: string;
  description: string;
  tags: TagType[];
};
const CardProjects = ({
  src,
  alt,
  title,
  description,
  tags,
}: CardProjectsProps) => {
  return (
    <Card.Container>
      <Card.CardImage src={src} alt={alt} />
      <Card.ContainerContente>
        <Card.Title title={title} />
        <Card.Description description={description} />
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <Card.Tag key={tag} tagname={tag} />
          ))}
        </div>
      </Card.ContainerContente>
    </Card.Container>
  );
};

export default CardProjects;
