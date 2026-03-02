import { useDispatch } from "react-redux";
import sprite from "../../assets/icons/sprite.svg";
import { setModalContent, setModalStatus } from "../../redux/pharmacy/reducer";
import * as s from "./AuthModal.styled";
import { signin, signup } from "../../data/form";
import InputForm from "../InputForm/InputForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registerSchema } from "../../helpers/validation";
import Button from "../Button/Button";
import { useState } from "react";
import { login, registration } from "../../redux/auth/operations";

const AuthModal = ({ modalType = "Register" }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(
      modalType === "Register" ? registerSchema : loginSchema
    ),
  });

  const handleOpenRegisterModal = () => {
    setIsOpen(!isOpen);
    dispatch(setModalContent("RegisterModal"));
  };

  const handleOpenLoginModal = () => {
    setIsOpen(!isOpen);
    dispatch(setModalContent("LoginModal"));
  };

  const handleCloseModal = () => {
    setIsOpen(isOpen);
    dispatch(setModalStatus(false));
    dispatch(setModalContent(null));
  };

  const onSubmit = ({ username, email, phone, password }) => {
    if (modalType === "Register") {
      dispatch(registration({ username, email, phone, password }));
      handleCloseModal();
      reset();
    } else {
      dispatch(login({ email, password }));
      handleCloseModal();
      reset();
    }
  };

  return (
    <s.Wrapper>
      <s.CloseBtn type="button" onClick={handleCloseModal}>
        <svg width={20} height={20}>
          <use href={`${sprite}#close`} />
        </svg>
      </s.CloseBtn>
      <s.Title>
        {modalType === "Register" ? "Sign Up" : "Log in to your account"}
      </s.Title>
      <s.Text>
        {modalType === "Register"
          ? "Before proceeding, please register on our site."
          : "Please login to your account before continuing."}
      </s.Text>
      <s.Forma onSubmit={handleSubmit(onSubmit)}>
        {(modalType === "Register" ? signup : signin).map((input, index) => (
          <InputForm
            key={index}
            name={input.name}
            placeholder={input.placeholder}
            register={register}
            errors={errors}
            touched={touchedFields[input.name]}
            isValid={!errors[input.name] && watch(input.name)}
          />
        ))}
        <Button
          type="submit"
          name="buttonMain"
          text={modalType === "Register" ? "Sign Up" : "Log in"}
        />
      </s.Forma>
      <s.BtnLink
        type="button"
        onClick={
          modalType === "Register"
            ? handleOpenLoginModal
            : handleOpenRegisterModal
        }
      >
        {modalType === "Register"
          ? "Already have an account?"
          : "Don't have an account?"}
      </s.BtnLink>
    </s.Wrapper>
  );
};

export default AuthModal;
