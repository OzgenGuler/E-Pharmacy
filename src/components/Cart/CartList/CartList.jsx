import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../../redux/pharmacy/selectors";
import { useEffect } from "react";
import {
  addCart,
  decreaseQuantity,
  deleteCart,
  getCartItems,
} from "../../../redux/pharmacy/operations";
import Counter from "../../Counter/Counter";
import * as s from "./CartList.styled";

const CartList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const quantity = cart?.cartProducts?.length || "";

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch, quantity]);

  const handleIncreaseAmount = (id) => {
    dispatch(
      addCart({
        productId: id,
        quantity: 1,
      })
    );
  };

  const handleDecreaseAmount = (id) => {
    dispatch(
      decreaseQuantity({
        productId: id,
        quantity: 1,
      })
    );
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteCart(id));
  };

  return (
    <s.List>
      {cart?.cartProducts?.map((product, index) => (
        <s.Wrapper
          key={product.productId._id}
          $hasLine={index < cart.cartProducts.length - 1}
        >
          <s.Photo
            src={product.productId.photo}
            alt={product.productId.name}
            loading="lazy"
          />
          <s.Description>
            <s.Top>
              <s.NameBlock>
                <s.Name>{product.productId.name}</s.Name>
                <s.Suppliers>{product.productId.suppliers}</s.Suppliers>
              </s.NameBlock>
              <s.Price>৳ {product.productId.price}</s.Price>
            </s.Top>
            <s.BtnBlock>
              <Counter
                amount={product.quantity}
                onIncrease={() => handleIncreaseAmount(product.productId._id)}
                onDecrease={() => handleDecreaseAmount(product.productId._id)}
                $cart
              />
              <s.Remove
                type="button"
                onClick={() => handleDeleteProduct(product.productId._id)}
              >
                Remove
              </s.Remove>
            </s.BtnBlock>
          </s.Description>
        </s.Wrapper>
      ))}
    </s.List>
  );
};

export default CartList;
