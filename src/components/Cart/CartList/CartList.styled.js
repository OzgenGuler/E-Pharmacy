import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
`;

export const Wrapper = styled.li`
  display: flex;
  gap: 12px;
  width: 100%;
  position: relative;

  &::after {
    content: "";
    display: ${(props) => (props.$hasLine ? "block" : "none")};
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.borderInput};
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:not(:last-child) {
    padding-bottom: 20px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 460px;
  }
`;

export const Photo = styled.img`
  display: flex;
  width: 120px;
  height: 120px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 27px;
  border: 1px solid ${({ theme }) => theme.color.promoBorder};

  @media screen and (min-width: 768px) {
    width: 122px;
    height: 133px;
  }
`;

export const Description = styled.div`
  width: 100%;

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Top = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`;

export const Name = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.black};

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Suppliers = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  color: ${({ theme }) => theme.color.textModal};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Price = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
  color: ${({ theme }) => theme.color.black};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const BtnBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
`;

export const Remove = styled.button`
  display: inline-flex;
  height: 32px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border: none;
  border-radius: 40px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.7px;
  transition: all 0.3s;
  background-color: rgba(232, 80, 80, 0.1);
  color: ${({ theme }) => theme.color.red};

  &:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.red};
  }
`;
