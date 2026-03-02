import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 13px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    gap: 40px 21px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 335px;

  @media screen and (min-width: 768px) {
    min-width: 226px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 280px;
  }
`;
