import styled from "styled-components";

export const Wrapper = styled.div`
  width: 335px;
  position: relative;
  padding: 32px 40px;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.white};

  @media screen and (min-width: 768px) {
    width: auto;
    padding: 50px 70px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background-color: transparent;

  & svg {
    stroke: ${({ theme }) => theme.color.black};
    transition: all 0.3s;

    &:hover {
      transform: rotate(90deg);
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 14px;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  color: ${({ theme }) => theme.color.black};
`;

export const Text = styled.p`
  margin-bottom: 25px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  color: ${({ theme }) => theme.color.textModal};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > :last-child {
    margin-top: 15px;
  }

  @media screen and (min-width: 768px) {
    gap: 14px;

    & > :last-child {
      margin-top: 11px;
    }
  }
`;

export const BtnLink = styled.button`
  display: flex;
  margin: 14px auto 0;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.linkBtn};

  &:hover {
    color: ${({ theme }) => theme.color.darkGreen};
  }
`;
