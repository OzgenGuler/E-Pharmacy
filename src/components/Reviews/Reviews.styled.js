import styled from "styled-components";

export const Title = styled.h2`
  margin-bottom: 14px;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  color: ${({ theme }) => theme.color.black};

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2;
  }
`;

export const Text = styled.p`
  margin-bottom: 64px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  color: ${({ theme }) => theme.color.grey};

  @media screen and (min-width: 768px) {
    margin-bottom: 88px;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 335px;
  position: relative;
  padding: 0px 16px 40px 16px;
  border-radius: 27px;
  border: 1px solid ${({ theme }) => theme.color.promoBorder};
  background: ${({ theme }) => theme.color.bgPromo};

  @media screen and (min-width: 768px) {
    max-width: 344px;
    height: 232px;
  }

  @media screen and (min-width: 768px) {
    max-width: 382px;
    height: 232px;
    padding: 0px 28px 40px 28px;
  }
`;

export const Avatar = styled.img`
  position: absolute;
  top: -30px;
  width: 64px;
  height: 64px;
  border-radius: 64px;
  box-shadow: 0px 1px 4px 0px rgba(16, 24, 40, 0.06);

  @media screen and (min-width: 768px) {
    top: -24px;
  }
`;

export const Name = styled.p`
  margin-top: 54px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.black};
`;

export const Review = styled.p`
  margin-top: 16px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${({ theme }) => theme.color.grey};
`;
