import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 704px;
    gap: 32px 16px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1248px;
    gap: 38px 36px
      ${({ $isHomePage }) => ($isHomePage ? "38px 36px" : "40px 20px")};
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;
  min-width: 335px;
  padding: ${({ $isHomePage }) =>
    $isHomePage ? "32px 32px 40px" : "32px 32px"};
  border-radius: 27px;
  overflow: hidden;
  border: 1.155px solid ${({ theme }) => theme.color.promoBorder};
  background-color: ${({ theme }) => theme.color.bgCardStore};

  &::before {
    content: "";
    width: 166.806px;
    height: 35.383px;
    transform: rotate(22deg);
    position: absolute;
    right: ${({ $isHomePage }) => ($isHomePage ? "-104.256px" : "-109.582px")};
    bottom: ${({ $isHomePage }) => ($isHomePage ? "51.707px" : "216px")};
    border-radius: 20px 0px 0px 20px;
    background: rgba(89, 177, 122, 0.08);
  }

  &::after {
    content: "";
    width: 166.806px;
    height: 35.383px;
    transform: rotate(22deg);
    position: absolute;
    right: ${({ $isHomePage }) => ($isHomePage ? "-41.914px" : "-38.582px")};
    bottom: ${({ $isHomePage }) => ($isHomePage ? "29.039px" : "196px")};
    border-radius: 20px 0px 0px 20px;
    background: rgba(89, 177, 122, 0.08);
  }

  @media screen and (min-width: 768px) {
    min-width: 344px;
    padding: 40px;

    &::before {
      width: 198px;
      height: 42px;
      right: ${({ $isHomePage }) => ($isHomePage ? "-152px" : "-137px")};
      bottom: ${({ $isHomePage }) => ($isHomePage ? "56px" : "232px")};
    }

    &::after {
      width: 198px;
      height: 42px;
      right: ${({ $isHomePage }) => ($isHomePage ? "-84px" : "-63px")};
      bottom: ${({ $isHomePage }) => ($isHomePage ? "29px" : "210px")};
    }
  }

  @media screen and (min-width: 1440px) {
    width: ${({ $isHomePage }) => ($isHomePage ? "392px" : "381px")};
    height: ${({ $isHomePage }) => ($isHomePage ? "232px" : "276px")};

    &::before {
      right: ${({ $isHomePage }) => ($isHomePage ? "-126px" : "-137px")};
      bottom: ${({ $isHomePage }) => ($isHomePage ? "56px" : "232px")};
    }

    &::after {
      right: ${({ $isHomePage }) => ($isHomePage ? "-58px" : "-63px")};
      bottom: ${({ $isHomePage }) => ($isHomePage ? "29px" : "210px")};
    }
  }
`;
