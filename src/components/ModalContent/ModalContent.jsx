import { useSelector } from "react-redux";
import { selectModalContent } from "../../redux/pharmacy/selectors";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import AuthModal from "../AuthModal/AuthModal";

const ModalContent = () => {
  const modalContent = useSelector(selectModalContent);

  switch (modalContent) {
    case "BurgerMenu":
      return <BurgerMenu />;
    case "RegisterModal":
      return <AuthModal modalType="Register" />;
    case "LoginModal":
      return <AuthModal modalType="Login" />;
    default:
      return null;
  }
};

export default ModalContent;
