import { useDispatch, useSelector } from "react-redux";
import { setModalContent, setModalStatus } from "../../redux/pharmacy/reducer";
import sprite from "../../assets/icons/sprite.svg";
import * as s from "./BurgerMenu.styled";
import Navigation from "../Header/Navigation/Navigation";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const desktop = useMediaQuery({ query: "(min-width: 1440px)" });
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleCloseBurgerMenu = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };

  const handleLogOut = () => {
    dispatch(logout());
    handleCloseBurgerMenu();
  };

  useEffect(() => {
    if (desktop) {
      handleCloseBurgerMenu();
    }
  }, [desktop]);

  return (
    <>
      <s.Wrapper>
        <s.CloseBtn type="button" onClick={handleCloseBurgerMenu}>
          <svg width={32} height={32}>
            <use href={`${sprite}#close`} />
          </svg>
        </s.CloseBtn>
        <div>
          <Navigation />
        </div>
        <s.WrapperBtn>
          {isLoggedIn ? (
            <s.BtnLogout
              type="button"
              onClick={() => handleLogOut()}
              aria-label="Log out"
            >
              Log out
            </s.BtnLogout>
          ) : (
            <>
              <s.LinkRegister
                to="/register"
                onClick={handleCloseBurgerMenu}
                aria-label="Register"
              >
                Register
              </s.LinkRegister>
              <s.LinkLogin
                to="/login"
                onClick={handleCloseBurgerMenu}
                aria-label="Login"
              >
                Login
              </s.LinkLogin>
            </>
          )}
        </s.WrapperBtn>
      </s.Wrapper>
    </>
  );
};

export default BurgerMenu;
