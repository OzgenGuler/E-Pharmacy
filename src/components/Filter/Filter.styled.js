import styled from "styled-components";

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 335px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 704px;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 14px;
    margin-right: auto;
    margin-bottom: 40px;
  }
`;

export const SelectDesktop = styled.div`
  @media screen and (min-width: 1440px) {
    width: 214px;
  }
`;

export const InputDesktop = styled.div`
  @media screen and (min-width: 1440px) {
    width: 224px;
  }
`;

export const BtnBlock = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 1fr;
`;
