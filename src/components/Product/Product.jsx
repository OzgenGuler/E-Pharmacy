import { Container } from "../../styles/GlobalStyles";
import * as s from "./Product.styled";
import ProductOverview from "./ProductOverview/ProductOverview";
import TabsContainer from "./TabsContainer/TabsContainer";

const Product = () => {
  return (
    <Container>
      <s.Wrapper>
        <ProductOverview />
        <TabsContainer />
      </s.Wrapper>
    </Container>
  );
};

export default Product;
