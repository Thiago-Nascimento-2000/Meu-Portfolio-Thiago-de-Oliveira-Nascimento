import * as Card from "./components";

import logo from "../../../../public/logo.png";

const Nav = () => {
  return (
    <Card.Container>
      <Card.Nav>
        <Card.ContainerNav>
          <Card.NavLogo src={logo} alt="sss" />
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
