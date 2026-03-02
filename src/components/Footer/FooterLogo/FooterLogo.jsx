import logo from "../../../assets/icons/logo.png";
import * as s from "./FooterLogo.styled";

const FooterLogo = () => {
  return (
    <s.Wrapper href="/">
      <s.Img src={logo} alt="logo" loading="lazy" />
      <s.Text>E-Pharmacy</s.Text>
    </s.Wrapper>
  );
};

export default FooterLogo;
