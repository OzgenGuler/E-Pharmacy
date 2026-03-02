import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  gap: 8px;
  max-width: 335px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: none;
    gap: 48px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 0;
  gap: 8px;
`;

export const Text = styled.span`
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  letter-spacing: -0.28px;
  color: ${({ theme }) => theme.color.black};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.32px;
  }
`;
