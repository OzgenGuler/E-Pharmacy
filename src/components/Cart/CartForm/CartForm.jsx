import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InputForm from "../../InputForm/InputForm";
import { cartForm } from "../../../data/form";
import * as s from "./CartForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../../redux/pharmacy/selectors";
import Button from "../../Button/Button";
import { cartSchema } from "../../../helpers/validation";
import { cartCheckout, updateCart } from "../../../redux/pharmacy/operations";
import { toast } from "react-toastify";

const CartForm = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
    reset,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      address: "",
      payment: "cash",
    },
    resolver: yupResolver(cartSchema),
  });
  const total = Number(cart.total).toFixed(2);

  const onSubmit = (data) => {
    if (!cart || !cart.cartProducts || cart.cartProducts.length === 0) {
      toast.error("Please select product to make an order");
      return;
    }
    dispatch(cartCheckout(data))
      .then(() => {
        dispatch(updateCart({ products: [] }));
        reset();
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <s.Wrapper onSubmit={handleSubmit(onSubmit)}>
        <s.SubTitle>Enter shipping info </s.SubTitle>
        <s.Text>
          Enter your delivery address where you get the product. You can also
          send any other location where you send the products.
        </s.Text>
        <s.InputWrapper>
          {cartForm.map((input) => (
            <s.InputTablet key={input.label}>
              <InputForm
                id={input.name}
                key={input.label}
                label={input.label}
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                register={register}
                errors={errors}
                touched={touchedFields[input.name]}
                isValid={!errors[input.name] && watch(input.name)}
              />
            </s.InputTablet>
          ))}
        </s.InputWrapper>
        <s.SubTitle>Payment method</s.SubTitle>
        <s.Text>
          You can pay us in a multiple way in our payment gateway system.
        </s.Text>
        <s.RadioWrapper>
          <s.RadioLabel htmlFor="radio-cash">
            <s.RadioInput
              {...register("payment")}
              type="radio"
              value="cash"
              id="radio-cash"
            />
            <s.RadioCustom />
            Cash On Delivery
          </s.RadioLabel>
          <s.RadioLabel htmlFor="radio-bank">
            <s.RadioInput
              {...register("payment")}
              type="radio"
              value="bank"
              id="radio-bank"
            />
            <s.RadioCustom />
            Bank
          </s.RadioLabel>
        </s.RadioWrapper>
        <s.SubTitle>Order details</s.SubTitle>
        <s.Text>
          Shipping and additional costs are calculated based on values you have
          entered.
        </s.Text>
        <s.TotalWrapper>
          <s.Total>Total:</s.Total>
          <s.Total>৳ {total}</s.Total>
        </s.TotalWrapper>
        <Button type="submit" name="filter" text="Place order" />
      </s.Wrapper>
    </>
  );
};

export default CartForm;
