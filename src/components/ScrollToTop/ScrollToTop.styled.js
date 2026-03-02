import styled from "styled-components";

export const ScrollToTopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  position: fixed;
  bottom: var(--scroll-to-top-bottom);
  right: calc(100% / 2 - 334px / 2);
  background-color: rgba(89, 177, 122, 0.3);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  border: 2px solid ${({ theme }) => theme.color.darkGreen};
  border-radius: 16px;
  z-index: 999;

  & svg {
    fill: ${({ theme }) => theme.color.darkGreen};
  }

  &:hover {
    box-shadow: 0px 0px 16px 0px rgba(27, 54, 65, 0.16);
  }

  @media screen and (min-width: 768px) {
    right: calc(100% / 2 - 704px / 2);
  }

  @media screen and (min-width: 1440px) {
    width: 52px;
    height: 52px;
    right: calc(100% / 2 - 1234px / 2);
  }
`;
