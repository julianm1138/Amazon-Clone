import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export default function Header() {
  return (
    <div className="header flex justify-between items-center top-0 bg-black ">
      <img
        className="header__logo w-[90px] object-contain"
        src="src\assets\amazon-logo.webp"
        aria-label="amazon logo"
      />

      <div className="header__search flex flex-1 items-center px-5">
        <input className="header__searchIn w-full h-[32px]" type="text" />
        <SearchIcon
          sx={{ fontSize: 32 }}
          className="w-[100px] p-1 bg-[#cd9042]"
        />
      </div>

      <div className="header__nav text-white flex justify-evenly gap-3">
        <div className="header__option flex flex-col">
          <span className="header__optionLineOne text-[10px] font-light">
            Hello Guest
          </span>
          <span className="header__optionLineTwo text-[13px] font-black">
            Sign in
          </span>
        </div>
        <div className="header__option flex flex-col">
          <span className="header__optionLineOne text-[10px] font-light">
            Returns
          </span>
          <span className="header__optionLineTwo text-[13px] font-black">
            & Orders
          </span>
        </div>
        <div className="header__option flex flex-col">
          <span className="header__optionLineOne text-[10px] font-light">
            Your
          </span>
          <span className="header__optionLineTwo text-[13px] font-black">
            Prime
          </span>
        </div>

        <div className="header__optionBasket flex items-center px-2">
          <ShoppingBasketIcon />

          <span className="header__optionLineTwo header__basketCount font-bold mx-2">
            0
          </span>
        </div>
      </div>
    </div>
  );
}
