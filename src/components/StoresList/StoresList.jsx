import { useLocation } from "react-router-dom";
import StoreItem from "../StoreItem/StoreItem";
import * as s from "./StoresList.styled";

const StoresList = ({ stores }) => {
  const { pathname } = useLocation();
  const home = pathname === "/";

  return (
    <s.Wrapper $isHomePage={home}>
      {stores.map((store) => (
        <s.Item key={store._id} $isHomePage={home}>
          <StoreItem store={store} />
        </s.Item>
      ))}
    </s.Wrapper>
  );
};

export default StoresList;
