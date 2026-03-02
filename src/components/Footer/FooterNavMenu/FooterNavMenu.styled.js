import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  gap: 32px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;

export const Button = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  transition: all 0.3s;
  color: ${({ theme }) => theme.color.lightGrey};

  &:hover {
    color: ${({ theme }) => theme.color.lightGrey30};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
