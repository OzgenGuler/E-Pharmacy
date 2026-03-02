import { Container } from "../../styles/GlobalStyles";
import * as s from "./NotFound.styled";
import Button from "../Button/Button";

const NotFound = () => {
  return (
    <Container>
      <s.Wrapper>
        <s.Number>4</s.Number>
        <s.Number>4</s.Number>
      </s.Wrapper>
      <s.Description>
        <s.Text>Opsss! This page does not exist...</s.Text>
        <Button name="buttonCard" to="/" text="Home page" />
      </s.Description>
    </Container>
  );
};

export default NotFound;
