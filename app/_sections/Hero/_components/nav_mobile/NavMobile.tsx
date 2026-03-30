import * as Card from "./components";

type NavMobileProps = { size: number; aria: string };
const NavMobile = ({ size, aria }: NavMobileProps) => {
  return (
    <Card.Container>
      <Card.Icon size={size} aria={aria} />
    </Card.Container>
  );
};

export default NavMobile;
