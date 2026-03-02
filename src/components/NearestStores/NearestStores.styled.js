import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  width: 291px;
  margin-bottom: 14px;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  color: ${({ theme }) => theme.color.black};

  @media screen and (min-width: 768px) {
    width: auto;
    font-size: 40px;
    line-height: 1.2;
  }
`;

export const Text = styled.p`
  margin-bottom: 40px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  color: ${({ theme }) => theme.color.grey};

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    font-size: 16px;
    line-height: 1.25;
  }
`;
