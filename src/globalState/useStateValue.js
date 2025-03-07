import { useContext } from "react";
import { StateContext } from "./stateProvider";

export const useStateValue = () => useContext(StateContext);

export default useStateValue;
