import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../globalState/useStateValue";
import { getBasketTotal } from "../globalState/reducer";

export default function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(dispatch);
  return (
    <div className="subtotal flex flex-col justify-between w-[360px] h-[150px] p-[20px] bg-[#f3f3f3] border-[1px]">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="tracking-wide">
              Subtotal ({basket?.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift flex items-center">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="bg-[#f0c14b] border-[1px] border-[#a99734] w-[100%] h-[30px] rounded-sm text-xs">
        Proceed to checkout
      </button>
    </div>
  );
}
