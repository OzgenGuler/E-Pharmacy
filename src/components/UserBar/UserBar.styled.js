import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40px;
  height: 40px;
  padding: 12px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.promoBorder};
  background-color: ${({ theme }) => theme.color.white};
  filter: drop-shadow(0px -1px 7px rgba(71, 71, 71, 0.05));

  & svg {
    fill: ${({ theme }) => theme.color.white};
    stroke: ${({ theme }) => theme.color.green};
  }

  &:hover {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    padding: 14px;
  }
`;

export const Quantity = styled.p`
  position: absolute;
  top: -2px;
  right: -2px;
  border-radius: 50%;
  padding: ${({ $isHomePage }) => ($isHomePage ? "0 3px" : "0 4px")};
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  border: 1px solid ${({ theme }) => theme.color.promoBorder};
  background-color: ${({ $isHomePage, theme }) =>
    $isHomePage ? theme.color.white : theme.color.lightGreen};
  color: ${({ theme }) => theme.color.green};
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ $isHomePage, theme }) =>
    $isHomePage ? theme.color.white : theme.color.lightGreen};

  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
    color: ${({ theme }) => theme.color.green};
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;

    & p {
      font-size: 18px;
    }
  }
`;
