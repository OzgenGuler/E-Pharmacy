import { useDispatch } from "react-redux";
import { navMenu } from "../../../data/navMenu";
import * as s from "./Navigation.styled";
import {
  setModalContent,
  setModalStatus,
} from "../../../redux/pharmacy/reducer";

const Navigation = () => {
  const dispatch = useDispatch();

  const handleCloseBurgerMenu = () => {
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };
  return (
    <s.Navigation>
      {navMenu.map((item) => (
        <s.NavBtn
          key={item.text}
          to={`${item.to}`}
          onClick={handleCloseBurgerMenu}
        >
          {item.text}
        </s.NavBtn>
      ))}
    </s.Navigation>
  );
};

export default Navigation;
