import { promoBanners } from "../../data/promoBanners";
import { Container } from "../../styles/GlobalStyles";
import * as s from "./PromoBanners.styled";

const PromoBanners = () => {
  return (
    <Container>
      <s.Wrapper>
        {promoBanners.map((item) => (
          <s.Item key={item.id}>
            <s.Top>
              <s.Banner>{item.id}</s.Banner>
              <s.Title>{item.title}</s.Title>
            </s.Top>
            <s.Bottom>
              <s.Discount>{item.discount}</s.Discount>
              <s.Button type="button">{item.button}</s.Button>
            </s.Bottom>
          </s.Item>
        ))}
      </s.Wrapper>
    </Container>
  );
};

export default PromoBanners;
