import { useStateValue } from "../globalState/useStateValue";
import { getBasketTotal } from "../globalState/reducer";

export default function Subtotal() {
  const [{ basket }] = useStateValue();

  // Format currency using Intl.NumberFormat
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <div className="subtotal flex flex-col justify-between w-[360px] h-[150px] p-[20px] bg-[#f3f3f3] border-[1px]">
      <p className="tracking-wide">
        Subtotal ({basket?.length} items):
        <strong>{formatCurrency(getBasketTotal(basket))}</strong>
      </p>
      <small className="subtotal__gift flex items-center">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button className="bg-[#f0c14b] border-[1px] border-[#a99734] w-[100%] h-[30px] rounded-sm text-xs">
        Proceed to checkout
      </button>
    </div>
  );
}
