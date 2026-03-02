import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  padding: 0;

  & svg {
    stroke: ${({ $isHomePage, theme }) =>
      $isHomePage ? theme.color.white : theme.color.green};
    transition: all 0.3s;

    &:hover {
      stroke: ${({ $isHomePage, theme }) =>
        $isHomePage ? theme.color.lightGrey : theme.color.darkGreen};
    }
  }
`;
