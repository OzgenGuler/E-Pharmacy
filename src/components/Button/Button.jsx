import { useLocation } from "react-router-dom";
import sprite from "../../assets/icons/sprite.svg";
import * as s from "./Button.styled";

const Button = ({ name, type, text, to, onClick }) => {
  const { pathname } = useLocation();
  const homePage = pathname === "/";

  let BtnComponent;

  switch (name) {
    case "loginLink":
      BtnComponent = (
        <s.LinkLogin
          to={to}
          onClick={onClick}
          aria-label={name}
          $homePage={homePage}
        >
          {text}
        </s.LinkLogin>
      );
      break;

    case "registerLink" || "logoutLink":
      BtnComponent = (
        <s.LinkRegister
          to={to}
          onClick={onClick}
          aria-label={name}
          $homePage={homePage}
        >
          {text}
        </s.LinkRegister>
      );
      break;

    case "logout":
      BtnComponent = (
        <s.BtnLogout
          type={type}
          onClick={onClick}
          aria-label={name}
          $homePage={homePage}
        >
          {text}
        </s.BtnLogout>
      );
      break;

    case "buttonMain":
      BtnComponent = (
        <s.ButtonMain type={type} onClick={onClick} aria-label={name}>
          {text}
        </s.ButtonMain>
      );
      break;

    case "buttonCard":
      BtnComponent = (
        <s.ButtonCard to={to} aria-label={name}>
          {text}
        </s.ButtonCard>
      );
      break;

    case "buttonAdd":
      BtnComponent = (
        <s.ButtonAdd type={type} onClick={onClick} aria-label={name}>
          {text}
        </s.ButtonAdd>
      );
      break;

    case "filter":
      BtnComponent = (
        <s.BtnFilter type={type} onClick={onClick} aria-label={name}>
          {text === "Filter" && (
            <svg width={14} height={14}>
              <use href={`${sprite}#filter`} />
            </svg>
          )}
          {text}
        </s.BtnFilter>
      );
      break;
  }

  return <>{BtnComponent}</>;
};

export default Button;
