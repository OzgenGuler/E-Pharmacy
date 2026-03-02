import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 335px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 704px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1184px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  color: ${({ theme }) => theme.color.black};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Block = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 96px;
  }
`;
