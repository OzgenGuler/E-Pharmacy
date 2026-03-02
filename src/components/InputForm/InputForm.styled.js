import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Label = styled.label`
  margin: 0 auto 8px 18px;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  color: ${({ theme }) => theme.color.black};
`;

export const Input = styled.input`
  width: 100%;
  padding: 13px 18px;
  border-radius: 60px;
  border: 1px solid
    ${(props) =>
      props.$errors
        ? props.theme.color.red
        : props.$isValid
        ? props.theme.color.green
        : props.theme.color.borderInput};
  font-feature-settings: "clig" off, "liga" off;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset;
    -webkit-text-fill-color: ${({ theme }) => theme.color.black};
  }

  &::placeholder {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.placeholder};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.grey};
  }

  &:focus {
    caret-color: ${({ theme }) => theme.color.placeholder};
    outline: ${(props) =>
      props.$errors
        ? props.theme.color.red
        : props.$isValid
        ? props.theme.color.green
        : props.theme.color.borderInput};
    border: 1px solid
      ${(props) =>
        props.$errors
          ? props.theme.color.red
          : props.$isValid
          ? props.theme.color.green
          : props.theme.color.borderInput};
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  bottom: -10px;
  left: 18px;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 8px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.12px;
  color: ${({ theme }) => theme.color.red};
`;

export const Icon = styled.svg`
  position: absolute;
  right: 18px;
  top: 23px;
  width: 16px;
  height: 16px;
  cursor: pointer;

  & use {
    stroke: ${({ theme }) => theme.color.black};
    fill: transparent;
  }
`;
