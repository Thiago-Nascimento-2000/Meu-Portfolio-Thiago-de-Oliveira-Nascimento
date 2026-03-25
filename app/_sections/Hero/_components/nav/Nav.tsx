import * as Card from "./Components";

import logo from "../../../../public/logo.webp";

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
          <Card.Button textButton="Contatos" />
          <Card.Button textButton="Download CV" />
        </Card.ContainerButtonNav>
      </Card.Nav>
    </Card.Container>
  );
};

export default Nav;
