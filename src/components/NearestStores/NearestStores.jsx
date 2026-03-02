import { useSelector } from "react-redux";
import { selectNearestStores } from "../../redux/pharmacy/selectors";
import { Container } from "../../styles/GlobalStyles";
import StoresList from "../StoresList/StoresList";
import * as s from "./NearestStores.styled";

const MedicineStores = () => {
  const nearestStores = useSelector(selectNearestStores);

  return (
    <Container>
      <s.Wrapper>
        <s.Title>Your Nearest Medicine Store</s.Title>
        <s.Text>Search for Medicine, Filter by your location</s.Text>
        <StoresList stores={nearestStores} />
      </s.Wrapper>
    </Container>
  );
};

export default MedicineStores;
