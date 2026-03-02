import ProductItem from "../ProductItem/ProductItem";
import * as s from "./ProductsList.styled";

const ProductsList = ({ products }) => {
  return (
    <s.Wrapper>
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <s.Item key={product._id}>
            <ProductItem product={product} />
          </s.Item>
        ))}
    </s.Wrapper>
  );
};

export default ProductsList;
