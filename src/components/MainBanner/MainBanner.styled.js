import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";
import heroMob from "../../assets/images/mobile/heroMob@1x.png";
import heroMob2x from "../../assets/images/mobile/heroMob@2x.png";
import heroTablet from "../../assets/images/tablet/heroTablet@1x.png";
import heroTablet2x from "../../assets/images/tablet/heroTablet@2x.png";
import heroDesktop from "../../assets/images/desktop/heroDesktop@1x.png";
import heroDesktop2x from "../../assets/images/desktop/heroDesktop@2x.png";

export const Section = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 730px;
  background-color: ${({ theme }) => theme.color.green};

  @media screen and (min-width: 768px) {
    height: 962px;
  }

  @media screen and (min-width: 1440px) {
    height: 688px;
  }
`;

export const Wrapper = styled.div`
  max-width: 331px;
  height: 312px;
  margin: auto 0;
  background-image: url(${heroMob});
  background-size: 100% 100%;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${heroMob2x});
  }

  @media screen and (min-width: 768px) {
    max-width: 704px;
    height: 508px;
    background-image: url(${heroTablet});
    background-size: 704px 508px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${heroTablet2x});
    }
  }

  @media screen and (min-width: 1440px) {
    max-width: 749px;
    background-image: url(${heroDesktop});
    background-size: 749px 508px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${heroDesktop2x});
    }
  }
`;

export const Title = styled.h1`
  padding-top: 19px;
  text-shadow: 0px 4px 85px rgba(29, 30, 33, 0.3);
  font-size: 50px;
  font-weight: 600;
  line-height: 1;
  color: ${({ theme }) => theme.color.white};

  @media screen and (min-width: 768px) {
    padding-left: 31px;
    padding-top: 140px;
    font-size: 74px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 54px;
  }
`;

export const Text = styled.p`
  width: 156px;
  margin-left: auto;
  margin-top: 20px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  color: ${({ theme }) => theme.color.white};

  @media screen and (min-width: 768px) {
    width: 207px;
    margin-top: 24px;
    margin-right: 83px;
    font-size: 16px;
    line-height: 1.25;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 105px;
  }
`;
