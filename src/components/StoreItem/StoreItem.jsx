import { useLocation } from "react-router-dom";
import sprite from "../../assets/icons/sprite.svg";
import * as s from "./StoreItem.styled";
import Button from "../Button/Button";

const StoreItem = ({ store }) => {
  const { pathname } = useLocation();
  const medicineStore = pathname === "/medicine-store";
  const home = pathname === "/";

  return (
    <>
      <div>
        <s.Name text={store.name} length={medicineStore ? 100 : 15} />
        <s.Location $isHomePage={home}>
          <svg width={18} height={18}>
            <use href={`${sprite}#map-pin`} />
          </svg>
          <s.Address
            href={`https://www.google.com/maps/?q=${store.city},${store.address}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <s.Text>{store.address}</s.Text>
            <s.Text>{store.city}</s.Text>
          </s.Address>
        </s.Location>
        <s.Phone href={`tel:${store.phone}`} $isHomePage={home}>
          <svg width={18} height={18}>
            <use href={`${sprite}#phone`} />
          </svg>
          <s.Text>{store.phone}</s.Text>
        </s.Phone>
        {medicineStore ? (
          <Button to="/medicine" name="buttonCard" text="Visit Store" />
        ) : null}
      </div>
      <s.RightBlock $isHomePage={home}>
        <s.Rating>
          <svg width={16} height={16}>
            <use href={`${sprite}#star`} />
          </svg>
          <span>{store.rating}</span>
        </s.Rating>
        <s.Status $status={store.status}>{store.status}</s.Status>
      </s.RightBlock>
    </>
  );
};

export default StoreItem;
