import Subtotal from "./Subtotal";
export default function Checkout() {
  return (
    <div className="checkout flex items-center h-[200px] bg-white">
      <div className="checkout__left w-[75%]">
        <img
          className=" w-[80%] mb-[10px]"
          src="src\assets\amazonadbanner2.jpg"
          alt="amazon basics ad"
        />

        <div className="checkout__title ml-5 mr-5 text-2xl font-black border-b-[2px]">
          Your shopping basket
        </div>
      </div>
      <div className="checkout__right font-black">
        <Subtotal />
      </div>
    </div>
  );
}
