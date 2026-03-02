import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ $cart }) => ($cart ? "95px" : "108px")};
  height: ${({ $cart }) => ($cart ? "32px" : "44px")};
  padding: ${({ $cart }) => ($cart ? "7px 14px" : "12px 18px")};
  border-radius: 60px;
  border: 1px solid rgba(29, 30, 33, 0.1);
`;

export const Btn = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  padding: 0;

  & svg {
    stroke: ${({ theme }) => theme.color.green};

    &:hover {
      stroke: ${({ theme }) => theme.color.darkGreen};
    }
  }
`;

export const Amount = styled.p`
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${({ theme }) => theme.color.black};
`;
