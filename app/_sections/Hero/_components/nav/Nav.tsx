import * as Card from "./components";
import Link from "next/link";

import logo from "../../../../public/logothiago.webp";

const Nav = () => {
  return (
    <Card.Container>
      <Card.Nav>
        <Card.ContainerNav>
          <Card.NavLogo
            src={logo}
            alt="Logo do portfolio do Thiago de Oliveira Nascimento"
          />
          <Card.ContainerLinks>
            <Card.LinksNav />
          </Card.ContainerLinks>
        </Card.ContainerNav>
        <Card.ContainerButtonNav>
          <Link href="/links">
            <Card.Button textButton="Contatos" />
          </Link>
          <Card.Button textButton="Download CV" />
        </Card.ContainerButtonNav>
      </Card.Nav>
    </Card.Container>
  );
};

export default Nav;
