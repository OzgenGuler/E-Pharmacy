import { useLocation } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import logoGreen from "../../assets/icons/logo-green.png";
import * as s from "./Logo.styled";

const Logo = () => {
  const { pathname } = useLocation();

  return (
    <s.Wrapper href="/">
      {pathname === "/" ? (
        <s.Img src={logo} alt="logo" loading="lazy" />
      ) : (
        <s.Img src={logoGreen} alt="logo" loading="lazy" />
      )}
      <s.Text $isHomePage={pathname === "/"}>E-Pharmacy</s.Text>
    </s.Wrapper>
  );
};

export default Logo;
