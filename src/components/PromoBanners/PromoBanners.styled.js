import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
    width: 670px;
    margin: 0 auto;
    gap: 28px;
  }

  @media screen and (min-width: 1440px) {
    width: auto;
    justify-content: center;
    margin-top: 4px;
  }
`;

export const Item = styled.li`
  display: flex;
  min-width: 335px;
  padding: 14px 18px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  flex-shrink: 0;
  border-radius: 27px;
  border: 1px solid ${({ theme }) => theme.color.promoBorder};
  background: ${({ theme }) => theme.color.bgPromo};
  box-shadow: 0px -1px 13.858px 0px rgba(29, 30, 33, 0.02);

  @media screen and (min-width: 768px) {
    min-width: 321px;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Banner = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  background-color: ${({ theme }) => theme.color.bgPromoBanner};
  color: ${({ theme }) => theme.color.green};

  @media screen and (min-width: 768px) {
    width: 74px;
    height: 74px;
    font-size: 28px;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.promoTitle};

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`;

export const Discount = styled.p`
  width: 63px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.promoTitle};

  @media screen and (min-width: 768px) {
    width: 94px;
    font-size: 36px;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.grey};
`;
