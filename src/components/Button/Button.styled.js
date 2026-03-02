import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkLogin = styled(Link)`
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-decoration-line: underline;
  color: ${({ theme, $homePage }) =>
    $homePage ? theme.color.promoBorder : theme.color.green};
  transition: all 0.3s;

  &:hover {
    color: ${({ theme, $homePage }) =>
      $homePage ? theme.color.buttonBorder : theme.color.darkGreen};
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
  border: 1px solid
    ${({ theme, $homePage }) =>
      $homePage ? theme.color.buttonBorder : theme.color.green};
  color: ${({ theme, $homePage }) =>
    $homePage ? theme.color.promoBorder : theme.color.green};

  &:hover {
    background-color: ${({ theme, $homePage }) =>
      $homePage ? theme.color.promoBorder : theme.color.green};
    color: ${({ theme, $homePage }) =>
      $homePage ? theme.color.green : theme.color.white};
  }
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
  border: 1px solid
    ${({ theme, $homePage }) =>
      $homePage ? theme.color.buttonBorder : theme.color.green};
  color: ${({ theme, $homePage }) =>
    $homePage ? theme.color.promoBorder : theme.color.green};

  &:hover {
    background-color: ${({ theme, $homePage }) =>
      $homePage ? theme.color.promoBorder : theme.color.green};
    color: ${({ theme, $homePage }) =>
      $homePage ? theme.color.green : theme.color.white};
  }
`;

export const ButtonMain = styled.button`
  display: flex;
  padding: 13px 13px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 60px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  transition: all 0.3s;
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    background-color: ${({ theme }) => theme.color.darkGreen};
  }
`;

export const ButtonCard = styled(Link)`
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border: none;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  transition: all 0.3s;
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    background-color: ${({ theme }) => theme.color.darkGreen};
  }
`;

export const ButtonAdd = styled.button`
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border: none;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  transition: all 0.3s;
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    background-color: ${({ theme }) => theme.color.darkGreen};
  }
`;

export const BtnFilter = styled.button`
  display: flex;
  padding: ${(props) => (props.$reset ? "13px 60px" : "13px 30px")};
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 60px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  transition: all 0.3s;
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    background-color: ${({ theme }) => theme.color.darkGreen};
  }
`;
