import sprite from "../../assets/icons/sprite.svg";
import * as s from "./Counter.styled";

const Counter = ({ amount, onIncrease, onDecrease, $cart }) => {
  return (
    <s.Wrapper $cart>
      <s.Btn type="button" onClick={onIncrease}>
        <svg width={20} height={20}>
          <use href={`${sprite}#plus`} />
        </svg>
      </s.Btn>
      <s.Amount>{amount}</s.Amount>
      <s.Btn type="button" onClick={onDecrease}>
        <svg width={20} height={20}>
          <use href={`${sprite}#minus`} />
        </svg>
      </s.Btn>
    </s.Wrapper>
  );
};

export default Counter;
