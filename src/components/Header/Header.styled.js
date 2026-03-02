import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 25px 20px;
  background-color: ${({ $isHomePage, theme }) =>
    $isHomePage ? theme.color.green : "transparent"};

  @media screen and (min-width: 768px) {
    padding: 28px 32px 20px;
  }

  @media screen and (min-width: 1440px) {
    padding: 28px 128px 38px;
  }
`;

export const UserStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;
