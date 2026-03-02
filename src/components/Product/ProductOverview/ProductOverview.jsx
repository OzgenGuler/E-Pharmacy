import { useSelector } from "react-redux";
import { selectProduct } from "../../../redux/pharmacy/selectors";
import ProductItem from "../../ProductItem/ProductItem";

const ProductOverview = () => {
  const product = useSelector(selectProduct);

  return <ProductItem product={product} />;
};

export default ProductOverview;
