import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import * as s from "./Header.styled";
import BurgerButton from "../BurgerButton/BurgerButton";
import UserBar from "../UserBar/UserBar";
import { useMediaQuery } from "react-responsive";
import AuthButton from "../AuthButton/AuthButton";
import Navigation from "./Navigation/Navigation";

const Header = () => {
  const { pathname } = useLocation();
  const desktop = useMediaQuery({ query: "(min-width: 1440px)" });

  return (
    <s.Wrapper $isHomePage={pathname === "/"}>
      <Logo />
      {desktop && <Navigation />}
      <s.UserStatus>
        <UserBar $isHomePage={pathname === "/"} />
        {desktop ? <AuthButton /> : <BurgerButton />}
      </s.UserStatus>
    </s.Wrapper>
  );
};

export default Header;
