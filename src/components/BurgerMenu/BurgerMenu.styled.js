import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 210px;
  height: 100vh;
  padding-top: calc((100vh / 2) - 142px);
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.green};

  @media screen and (min-width: 768px) {
    width: 334px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 31px;
  right: 20px;
  border: none;
  padding: 0;
  background-color: transparent;

  & svg {
    stroke: ${({ theme }) => theme.color.white};
    transition: all 0.3s;

    &:hover {
      transform: rotate(90deg);
    }
  }

  @media screen and (min-width: 768px) {
    top: 39px;
    right: 32px;
  }
`;

export const WrapperBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-top: auto;
  margin-bottom: 60px;
`;

export const BtnLogout = styled.button`
  display: flex;
  padding: 13px 32px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 60px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  background-color: transparent;
  transition: all 0.3s;
  border: 1px solid ${({ theme }) => theme.color.buttonBorder};
  color: ${({ theme }) => theme.color.promoBorder};

  &:hover {
    background-color: ${({ theme }) => theme.color.promoBorder};
    color: ${({ theme }) => theme.color.green};
  }
`;

export const LinkRegister = styled(Link)`
  display: flex;
  padding: 13px 32px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 60px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  background-color: transparent;
  transition: all 0.3s;
  border: 1px solid ${({ theme }) => theme.color.buttonBorder};
  color: ${({ theme }) => theme.color.promoBorder};

  &:hover {
    background-color: ${({ theme }) => theme.color.promoBorder};
    color: ${({ theme }) => theme.color.green};
  }
`;

export const LinkLogin = styled(Link)`
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.color.promoBorder};
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.buttonBorder};
  }
`;
