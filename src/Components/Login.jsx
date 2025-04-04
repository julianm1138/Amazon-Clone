import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../server/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login flex flex-col justify-center items-center">
      <Link to="/">
        <img
          className="login__logo object-contain my-10 mx-auto w-40"
          src="public/assets/amazon-logo-transparent.png"
          alt="amazon logo"
        />
      </Link>

      <div className="login__container w-[400px] flex flex-col justify-center items-center rounded-[5px] border-[1px] border-[#d1cfcf] p-10 font-extrabold bg-white">
        <h1 className="text-4xl mb-5 flex justify-center">Sign In</h1>

        <form className="flex flex-col w-full mb-6">
          <h5>E-mail</h5>
          <input
            className="border-black border-[1px] h-10 mb-7"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            className="border-black border-[1px] h-10 mb-7"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={(e) => login(e)}
            type="submit"
            className="login__signInButton bg-[#f0c14b] border border-[#a88734] px-1 py-1 mt-3 text-md rounded-sm text-black"
          >
            Sign in
          </button>
        </form>

        <p className="w-full text-xs text-center mb-5">
          By continuing, you agree to AMAZON FAKE CLONE's Conditions of Use and
          Privacy Notice.
        </p>

        <button
          onClick={(e) => register(e)}
          className="login__registerButton bg-[#f0c14b] border border-[#a88734] px-4 py-2 mt-3 text-sm rounded-sm text-black"
        >
          Create Your Account
        </button>
      </div>
    </div>
  );
}
