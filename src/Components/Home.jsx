import Product from "./Product";

export default function Home() {
  return (
    <div className="home flex flex-col justify-center max-w-[1300px] ml-auto mr-auto">
      <div className="home__container">
        <img
          className="home__image w-full z-0 mb-10 gradient-mask-b-0"
          src="src\assets\aprimebanner.jpg"
          aria-label="amazon prime banner"
        />
      </div>

      <div className="home__rowOne flex ml-[5px] mr-[5px]">
        <Product
          title="SENSARTE Nonstick Skillet, Deep Frying Pan 10/11/12-inch, Saute Pan with Lid, Stay-cool Handle, Healthy Stone Cookware Cookin
SENSARTE Nonstick Skillet, Deep Frying Pan 10/11/12-inch, Saute Pan with Lid, Stay-cool"
          price={"39.99"}
          image="src\assets\panpic.jpg"
          rating={3}
        />
        <Product
          title="Apple AirPods Pro 2 Wireless Earbuds, Active Noise Cancellation, Hearing Aid Feature, Bluetooth Headphones, Transparency, Personalized Spatial Audio, High-Fidelity Sound, H2 Chip, USB-C Charging"
          price={"199" + "." + "00"}
          image="src\assets\airpods.jpg"
          rating={5}
        />
      </div>
      <div className="home__rowTwo flex">
        <Product
          title="Amazon Basics High Density Foam Roller for Exercise and Recovery"
          price={"18.99"}
          image="src\assets\foamroller.jpg"
          rating={5}
        />
        <Product
          title="Owala Kids FreeSip Insulated Stainless Steel Water Bottle with Straw for Sports, Travel, and School, BPA-Free Sports Water Bottle, 16 oz, All The Berries"
          price={"24.99"}
          image="src\assets\waterbottle.jpg"
          rating={5}
        />
        <Product
          title="Amazon Basics Neoprene Dumbbell Hand Weights"
          price={"19.99"}
          image="src\assets\dumbbells.jg.jpg"
          rating={5}
        />
      </div>
      <div className="home__rowThree">
        <Product
          title="Crocs Unisex Adult Classic Clog"
          price={"30" + "." + "00"}
          image="src\assets\crocs.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}
