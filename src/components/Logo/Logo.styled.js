import styled from "styled-components";

export const Wrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const Img = styled.img`
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.48px;
  color: ${({ $isHomePage, theme }) =>
    $isHomePage ? theme.color.white : theme.color.black};

  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: -0.6px;
  }
`;
