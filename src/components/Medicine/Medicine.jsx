import { useSelector } from "react-redux";
import {
  selectProducts,
  selectTotalPages,
} from "../../redux/pharmacy/selectors";
import { Container } from "../../styles/GlobalStyles";
import * as s from "./Medicine.styled";
import ProductsList from "../ProductsList/ProductsList";
import Filter from "../Filter/Filter";
import PaginationButtons from "../PaginationButtons/PaginationButtons";

const Medicine = () => {
  const products = useSelector(selectProducts);
  const totalPages = useSelector(selectTotalPages);

  return (
    <Container>
      <s.Wrapper>
        <s.Title>Medicine</s.Title>
        <Filter totalPages={totalPages} />
        <ProductsList products={products} />
        {totalPages <= 1 ? null : <PaginationButtons />}
      </s.Wrapper>
    </Container>
  );
};

export default Medicine;
