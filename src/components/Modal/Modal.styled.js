import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgba(29, 30, 33, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  /* background: transparent; */
  max-height: 100vh;
  /* overflow-y: auto; */

  /* &::-webkit-scrollbar {
    width: 3px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: red;
  }

  scrollbar thumb:hover {
    background-color: green;
  } */

  /* border-radius: 10px; */
`;
