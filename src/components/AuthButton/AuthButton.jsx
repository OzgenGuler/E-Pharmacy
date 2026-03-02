import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Button from "../Button/Button";
import { logout } from "../../redux/auth/operations";

const AuthButton = ({ $homePage }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <>
      {isLoggedIn ? (
        <Button
          type="button"
          name="logout"
          text="Log out"
          onClick={handleLogOut}
          $homePage={$homePage}
        />
      ) : (
        <>
          <Button
            to="/register"
            name="registerLink"
            text="Register"
            $homePage={$homePage}
          />
          <Button
            to="/login"
            name="loginLink"
            text="Login"
            $homePage={$homePage}
          />
        </>
      )}
    </>
  );
};

export default AuthButton;
