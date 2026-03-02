import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import * as s from "./ProductItem.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectOpenModal } from "../../redux/pharmacy/selectors";
import { setModalContent, setModalStatus } from "../../redux/pharmacy/reducer";
import {
  addCart,
  getCartItems,
  getProductById,
} from "../../redux/pharmacy/operations";
import Counter from "../Counter/Counter";
import { useState } from "react";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { toast } from "react-toastify";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const modalStatus = useSelector(selectOpenModal);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [amount, setAmount] = useState(1);

  const productPage = pathname === "/product";

  const handleOpenLoginModal = () => {
    dispatch(setModalStatus(!modalStatus));
    dispatch(setModalContent("LoginModal"));
  };

  const handleAddToCart = (id) => {
    if (!isLoggedIn) {
      handleOpenLoginModal();
    } else {
      if (amount === 0) {
        toast.warn("Please select the product quantity");
        return;
      }
      dispatch(
        addCart({
          productId: id,
          quantity: amount,
        })
      );
      dispatch(getCartItems());
    }
  };

  const handleDetails = (id) => {
    dispatch(getProductById(id)).then(() => {
      navigate("/product");
    });
  };

  const handleIncreaseAmount = () => {
    setAmount((prev) => prev + 1);
  };

  const handleDecreaseAmount = () => {
    if (amount === 0) {
      return;
    }
    setAmount((prev) => prev - 1);
  };

  return (
    <s.Wrapper $isProductPage={productPage}>
      <s.Photo
        src={product.photo}
        alt={`photo ${product.name} `}
        $isProductPage={productPage}
        loading="lazy"
      />
      <s.Description $isProductPage={productPage}>
        <s.Top $isProductPage={productPage}>
          <s.Title>
            <s.Name
              text={product.name}
              length={12}
              $isProductPage={productPage}
            />
            <s.Supplier>{product.suppliers}</s.Supplier>
          </s.Title>
          <s.Price $isProductPage={productPage}>৳{product.price}</s.Price>
        </s.Top>
        <s.Bottom $isProductPage={productPage}>
          <Button
            type="button"
            name="buttonAdd"
            text="Add to cart"
            onClick={() => handleAddToCart(product._id)}
          />
          {productPage ? (
            <Counter
              amount={amount}
              onIncrease={handleIncreaseAmount}
              onDecrease={handleDecreaseAmount}
            />
          ) : (
            <s.Details type="button" onClick={() => handleDetails(product._id)}>
              Details
            </s.Details>
          )}
        </s.Bottom>
      </s.Description>
    </s.Wrapper>
  );
};

export default ProductItem;
