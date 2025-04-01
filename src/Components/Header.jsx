import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../globalState/useStateValue";
import { useEffect } from "react";
import { auth } from "../server/firebase";

export default function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const logout = async () => {
    try {
      if (user) await auth.signOut();
      console.log("User logged out");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is:", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  console.log(dispatch);
  return (
    <div className="header flex justify-between items-center top-0 bg-black ">
      <Link to="/">
        <img
          className="header__logo w-[90px] object-contain hover:border border-solid border-white"
          src="src\assets\amazon-logo.webp"
          alt="amazon logo"
        />
      </Link>

      <div className="header__search flex flex-1 items-center px-5">
        <input
          className="header__searchIn w-full h-[39px] pl-2 rounded-l-sm"
          type="text"
          placeholder="Search Amazon"
        />
        <SearchIcon
          sx={{ fontSize: 30, width: 45, height: 39 }}
          className=" bg-[#febc67] rounded-r-sm p-1.5 hover:bg-[#febd67d3] cursor-pointer"
        />
      </div>

      <div className="header__nav text-white text-sm/[15px] flex justify-evenly items-center gap-3 ">
        <Link to="/login">
          <div className="header__option flex flex-col">
            <Link to="/">
              <span className="header__optionLineOne text-[10px] font-light">
                {user ? `Hello, ${user.email}` : "Hello Guest"}
              </span>
            </Link>
            <Link to="login">
              <span className="header__optionLineTwo text-[13px] font-black">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </Link>
          </div>
        </Link>
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
        <Link to="/checkout">
          <div className="header__optionBasket flex items-center px-2 hover:border border-solid border-white p-3">
            <ShoppingBasketIcon />

            <span className="header__optionLineTwo header__basketCount font-bold mx-2">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
