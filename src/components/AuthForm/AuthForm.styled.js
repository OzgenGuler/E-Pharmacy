import styled from "styled-components";
import { Link } from "react-router-dom";
import pill from "../../assets/images/pill@1x.png";
import elements from "../../assets/images/mobile/elements.png";

export const Container = styled.section`
  padding: 25px 20px;
  height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: -81px;
    right: -78px;
    width: 264px;
    height: 249px;
    background-image: url(${elements});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
  }

  @media screen and (min-width: 768px) {
    padding: 28px 32px;

    &::before {
      bottom: -74px;
      right: -187px;
      width: 464px;
      height: 345px;
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 28px 100px;

    &::before {
      bottom: -88px;
      right: -175px;
      width: 464px;
      height: 345px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 335px;
  margin: 0 auto;
  height: 100%;

  @media screen and (min-width: 768px) {
    max-width: 614px;
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1242px;
    flex-direction: row;
    gap: 54px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.21;
  color: ${({ theme }) => theme.color.black};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -56px;
    right: 20px;
    width: 95px;
    height: 93px;
    background-image: url(${pill});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
  }
  & span {
    color: ${({ theme }) => theme.color.green};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 54px;
    font-size: 54px;
    line-height: 1.11;

    &::before {
      top: -104px;
      right: 19px;
      width: 179px;
      height: 175px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 614px;
  }
`;

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 10px; */
  width: 100%;
  height: 310px;

  /* & > :nth-last-child(3) {
    margin-top: auto;
  } */

  @media screen and (min-width: 768px) {
    flex-direction: ${({ $loginPage }) => ($loginPage ? "column" : "row")};
    flex-wrap: ${({ $loginPage }) => ($loginPage ? "nowrap" : "wrap")};
    height: auto;
    width: 574px;
  }

  @media screen and (min-width: 1440px) {
    height: fit-content;
  }
`;

export const InputTablet = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: ${({ $loginPage }) => ($loginPage ? "323px" : "280px")};
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  /* width: ${({ $loginPage }) => ($loginPage ? "323px" : "280px")}; */
  margin-top: auto;

  @media screen and (min-width: 768px) {
    width: ${({ $loginPage }) => ($loginPage ? "323px" : "280px")};
    margin-top: 62px;
  }
`;

export const Btn = styled(Link)`
  text-align: center;
  margin-top: 4px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  transition: all 0.3s;
  color: ${({ theme }) => theme.color.linkBtn};

  &:hover {
    color: ${({ theme }) => theme.color.darkGreen};
  }
`;
