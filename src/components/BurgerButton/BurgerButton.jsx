import { useLocation } from "react-router-dom";
import sprite from "../../assets/icons/sprite.svg";
import * as s from "./BurgerButton.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectOpenModal } from "../../redux/pharmacy/selectors";
import { setModalContent, setModalStatus } from "../../redux/pharmacy/reducer";

const BurgerButton = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const modalStatus = useSelector(selectOpenModal);

  const handleOpenBurgerMenu = () => {
    dispatch(setModalStatus(!modalStatus));
    dispatch(setModalContent("BurgerMenu"));
  };

  return (
    <s.Button
      type="button"
      $isHomePage={pathname === "/"}
      onClick={handleOpenBurgerMenu}
      aria-label="BurgerMenu"
    >
      <svg width={32} height={26}>
        <use href={`${sprite}#burger`} />
      </svg>
    </s.Button>
  );
};

export default BurgerButton;
