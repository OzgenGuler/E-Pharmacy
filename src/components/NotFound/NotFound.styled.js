import styled from "styled-components";
import pill from "../../assets/images/pill@1x.png";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 95px;
    height: 93px;
    background-image: url(${pill});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;

export const Number = styled.p`
  font-size: 110px;
  font-weight: 700;
  line-height: 1.21;
  color: ${({ theme }) => theme.color.green};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.21;
  color: ${({ theme }) => theme.color.black};
`;
