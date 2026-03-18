import * as dd from "./components";

type CardProjectsProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

const CardProjects = ({ src, alt, title, description }: CardProjectsProps) => {
  return (
    <dd.Container>
      <dd.CardImage src={src} alt={alt} width={300} height={172} />
      <dd.ContainerContente>
        <dd.Title title={title} />
        <dd.Description description={description} />
        <div className="flex gap-2">
          <dd.Tag tagname="css" />
          <dd.Tag tagname="next js" />
        </div>
      </dd.ContainerContente>
    </dd.Container>
  );
};

export default CardProjects;
