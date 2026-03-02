import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 335px;
  border-radius: 32px;
  margin: 0 auto 40px auto;
  padding: 20px;
  gap: 19px;
  background-color: ${({ theme }) => theme.color.green};

  @media screen and (min-width: 768px) {
    max-width: 704px;
    margin: 0 auto 64px auto;
    padding: 40px 48px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1248px;
    flex-direction: row;
    padding: 40px 40px 40px 80px;
  }
`;

export const Title = styled.h2`
  max-width: 288px;
  margin: 20px 0;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: -0.28px;
  color: ${({ theme }) => theme.color.promoBorder};

  @media screen and (min-width: 768px) {
    max-width: 608px;
    margin: 64px 0 24px;
    font-size: 48px;
    letter-spacing: -0.48px;
  }
`;

export const Text = styled.p`
  max-width: 291px;
  margin-bottom: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  color: ${({ theme }) => theme.color.promoBorder};

  @media screen and (min-width: 768px) {
    max-width: 488px;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const Button = styled(Link)`
  display: flex;
  margin-bottom: 20px;
  padding: 13px 32px;
  width: fit-content;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 60px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  transition: all 0.3s;
  color: ${({ theme }) => theme.color.promoBorder};
  border: 1px solid ${({ theme }) => theme.color.buttonBorder};

  &:hover {
    background-color: ${({ theme }) => theme.color.darkGreen};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    padding: 13px 50px;
  }
`;

export const Img = styled.img`
  @media screen and (min-width: 1440px) {
    width: 633px;
    height: 406px;
  }
`;
