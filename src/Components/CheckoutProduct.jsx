import { useStateValue } from "../globalState/useStateValue";

export default function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct flex">
      <img
        className="checkoutProduct__image w-[150px] m-5 object-contain"
        src={image}
      />

      <div className="checkoutProduct__info pl-5">
        <p className="checkoutProduct__title font-extrabold max-w-[50%]">
          {title}
        </p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button
          onClick={removeFromBasket}
          className="bg-[#f0c14b] border border-[#a88734] px-2 mt-3 mb-14 text-xs text-black rounded-sm"
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}
