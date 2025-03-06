export default function Product({ title, image, price, rating }) {
  return (
    <div className="product flex flex-col justify-end items-center m-2 pb-5 pt-14 h-[300px] max-h-[400px] relative bottom-[80px] w-full min-w-[200px]  bg-white z-50">
      <div className="product__info flex flex-col items-center max-w-full px-6 ">
        <p className="max-w-[100%] truncate text-ellipsis">{title}</p>
        <div className="product__price mt-1 flex justify-center">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating mb-5">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>⭐</span>
            ))}
        </div>
      </div>
      <img
        className="max-h-[120px] w-[100%] object-contain mb-3"
        src={image}
        aria-label="picture of a pan"
      />
      <button className="bg-[#f0c14b] border border-[#a88734] px-2 mt-3 text-xs text-black">
        Add to Basket
      </button>
    </div>
  );
}
