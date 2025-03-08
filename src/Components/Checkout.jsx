import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../globalState/useStateValue";

export default function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout flex h-full bg-white pb-10">
      <div className="checkout__left w-[75%] h-full">
        <img
          className="static w-[80%] mb-[10px]"
          src="src\assets\amazonadbanner2.jpg"
          alt="amazon basics ad"
        />

        <h2 className="checkout__title ml-5 mr-5 mb-10 text-2xl font-black border-b-[2px]">
          Your shopping cart
        </h2>
        {basket.map((item) => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right mt-5 font-black">
        <Subtotal />
      </div>
    </div>
  );
}
