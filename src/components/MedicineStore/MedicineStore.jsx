import { useSelector } from "react-redux";
import { Container } from "../../styles/GlobalStyles";
import StoresList from "../StoresList/StoresList";
import * as s from "./MedicineStore.styled";
import { selectStores } from "../../redux/pharmacy/selectors";

const MedicineStore = () => {
  const stores = useSelector(selectStores);

  return (
    <Container>
      <s.Wrapper>
        <s.Title>Medicine store</s.Title>
        <StoresList stores={stores} />
      </s.Wrapper>
    </Container>
  );
};

export default MedicineStore;
