import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 2px;

  & > :nth-child(2) {
    width: 134px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const NavBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 46px;
  border-radius: 60px;
  font-size: 14px;
  text-align: center;
  font-weight: 400;
  line-height: 100%;
  padding: 8px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1.5px solid ${({ theme }) => theme.color.promoBorder};
  color: ${({ theme }) => theme.color.grey};

  &:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.green};
  }

  &.active {
    border: 8px solid ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.green};
  }

  &::before {
    content: "";
    position: absolute;
    width: 8px;
    height: 0.35em;
    border-left: 1.5px solid ${({ theme }) => theme.color.promoBorder};
    border-right: 1.5px solid ${({ theme }) => theme.color.promoBorder};
    background-color: ${({ theme }) => theme.color.white};
    top: 3.18em;
    right: 47.5%;

    @media screen and (min-width: 768px) {
      right: 48.5%;
    }

    @media screen and (min-width: 1440px) {
      top: 1.5em;
      right: 28.5%;
      transform: rotate(90deg);
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 0.35em;
    border-left: 1.5px solid ${({ theme }) => theme.color.promoBorder};
    border-right: 1.5px solid ${({ theme }) => theme.color.promoBorder};
    background-color: ${({ theme }) => theme.color.white};
    bottom: 3.18em;
    right: 47.5%;

    @media screen and (min-width: 768px) {
      right: 48.5%;
    }

    @media screen and (min-width: 1440px) {
      right: 69.5%;
      bottom: 1.5em;
      transform: rotate(90deg);
    }
  }
`;
