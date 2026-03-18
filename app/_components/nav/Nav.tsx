import * as Card from "./components";

import logo from "../../public/logo.png";

const Nav = () => {
  return (
    <Card.Container>
      <Card.Nav>
        <Card.NavLogo srcImage={logo} altImage="sss" />
        <Card.ContainerLinks>
          <Card.LinksNav />
        </Card.ContainerLinks>
        <Card.ContainerButtonNav>
          <Card.Button textButton="Contatos" />
          <Card.Button textButton="Download CV" />
        </Card.ContainerButtonNav>
      </Card.Nav>
    </Card.Container>
  );
};

export default Nav;
