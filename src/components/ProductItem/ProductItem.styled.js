import styled from "styled-components";
import EllipsisText from "react-ellipsis-text";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    max-width: ${({ $isProductPage }) => ($isProductPage ? "100%" : "226px")};
    flex-direction: ${({ $isProductPage }) =>
      $isProductPage ? "row" : "column"};
    gap: ${({ $isProductPage }) => ($isProductPage ? "16px" : "8px")};
  }

  @media screen and (min-width: 1440px) {
    max-width: ${({ $isProductPage }) => ($isProductPage ? "100%" : "280px")};
    flex-direction: column;
    gap: ${({ $isProductPage }) => ($isProductPage ? "20px" : "8px")};
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.color.borderProductCard};

  @media screen and (min-width: 768px) {
    width: ${({ $isProductPage }) => ($isProductPage ? "364px" : "100%")};
    height: ${({ $isProductPage }) => ($isProductPage ? "284px" : "260px")};
  }

  @media screen and (min-width: 1440px) {
    width: ${({ $isProductPage }) => ($isProductPage ? "364px" : "280px")};
    height: ${({ $isProductPage }) => ($isProductPage ? "337px" : "280px")};
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  min-width: 335px;
  padding: 20px;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.white};

  @media screen and (min-width: 768px) {
    min-width: ${({ $isProductPage }) => ($isProductPage ? "324px" : "226px")};
    gap: 14px;
    padding: ${({ $isProductPage }) => ($isProductPage ? "32px" : "20px")};
    justify-content: ${({ $isProductPage }) =>
      $isProductPage ? "space-between" : ""};
  }

  @media screen and (min-width: 1440px) {
    padding: 20px;
    gap: 40px;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: ${({ $isProductPage }) => ($isProductPage ? "column" : "")};
    gap: ${({ $isProductPage }) => ($isProductPage ? "32px" : "")};
  }

  @media screen and (min-width: 1440px) {
    flex-direction: ${({ $isProductPage }) => ($isProductPage ? "row" : "")};
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled(EllipsisText)`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.black};

  @media screen and (min-width: 768px) {
    font-size: ${({ $isProductPage }) => ($isProductPage ? "20px" : "18px")};
  }
`;

export const Supplier = styled.p`
  font-feature-settings: "clig" off, "liga" off;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.placeholder};
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.black};

  @media screen and (min-width: 768px) {
    font-size: ${({ $isProductPage }) => ($isProductPage ? "20px" : "18px")};
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ $isProductPage }) =>
    $isProductPage ? "row-reverse" : "row"};
`;

export const Details = styled.button`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  text-decoration-line: underline;
  transition: all 0.3s;
  border: none;
  background-color: transparent;
  font-feature-settings: "clig" off, "liga" off;
  color: ${({ theme }) => theme.color.black};

  &:hover {
    color: ${({ theme }) => theme.color.darkGreen};
  }
`;
