import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginSchema, registerSchema } from "../../helpers/validation";
import { login, registration } from "../../redux/auth/operations";
import { signin, signup } from "../../data/form";
import Button from "../Button/Button";
import InputForm from "../InputForm/InputForm";
import Logo from "../Logo/Logo";
import * as s from "./AuthForm.styled.js";
import { useLocation, useNavigate } from "react-router-dom";

const AuthForm = ({ formType = "Register" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(
      formType === "Register" ? registerSchema : loginSchema,
    ),
  });

  const loginPage = pathname === "/login";

  const onSubmit = ({ username, email, phone, password }) => {
    if (formType === "Register") {
      dispatch(registration({ username, email, phone, password })).then(
        (response) => {
          if (!response.error) {
            navigate("/login");
          }
        },
      );
      reset();
    } else {
      dispatch(login({ email, password })).then((response) => {
        if (!response.error) {
          navigate("/");
        }
      });
      reset();
    }
  };

  return (
    <s.Container>
      <Logo />
      <s.Wrapper>
        <s.Title>
          Your medication, <br />
          delivered Say goodbye to all <span>your healthcare</span> worries with
          us
        </s.Title>
        <s.Forma onSubmit={handleSubmit(onSubmit)} $loginPage={loginPage}>
          {(formType === "Register" ? signup : signin).map((input, index) => (
            <s.InputTablet $loginPage={loginPage} key={index}>
              <InputForm
                key={index}
                name={input.name}
                placeholder={input.placeholder}
                register={register}
                errors={errors}
                touched={touchedFields[input.name]}
                isValid={!errors[input.name] && watch(input.name)}
              />
            </s.InputTablet>
          ))}
          <s.BtnWrapper $loginPage={loginPage}>
            <Button
              type="submit"
              name="buttonMain"
              text={formType === "Register" ? "Sign Up" : "Log in"}
            />
            <s.Btn to={formType === "Register" ? "/login" : "/register"}>
              {formType === "Register"
                ? "Already have an account?"
                : "Don't have an account?"}
            </s.Btn>
          </s.BtnWrapper>
        </s.Forma>
      </s.Wrapper>
    </s.Container>
  );
};

export default AuthForm;
