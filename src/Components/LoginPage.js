import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";
import axios from "axios";
import { baseUrl } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice"

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [seePassword,setSeePassword] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { LoggedIn, setUserName } = useContext(UserContext);
  const dispatch = useDispatch();

  const singupHandler = async () => {
    try {
      const res = await axios.post(baseUrl + "/signup", {
        fullName,
        email,
        password
      }, { withCredentials: true });
      dispatch(addUser(fullName))
      setUserName(fullName);
      navigate(-1);
    }
    catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      }
      else {
        setError("Something is Wrong")
      }
      console.error("ERROR : " + err);
    }
  }
  const loginHandler = async () => {
    try {
      const res = await axios.post(baseUrl + "/login", { email, password }, { withCredentials: true });

      const fullName = res.data.fullName;
      dispatch(addUser(fullName))
      setUserName(fullName)
      navigate(-1);
    }
    catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Somethig is wrong")
      }
      console.error("ERROR : " + err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#15201A] px-4">
      <div className="w-full max-w-md bg-[#123B22] border border-[#1B5230] rounded-3xl shadow-2xl p-6 md:p-8">

        <h1 className="text-2xl md:text-3xl font-extrabold text-[#EAF7EE] text-center mb-2">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>
        <p className="text-[#8FBE9F] text-sm text-center mb-6">
          {isLogin ? "Login to continue ordering" : "Sign up to get started"}
        </p>

        <form className="flex flex-col gap-4">

          {!isLogin && (
            <div>
              <label className="text-[#8FBE9F] text-sm mb-1 block">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value)
                }}
                className="w-full border border-[#1B5230] p-2.5 rounded-lg bg-[#0E2A18] text-[#EAF7EE] placeholder:text-[#8FBE9F]/60 outline-none focus:ring-2 focus:ring-[#27D673]/60 focus:border-[#27D673]"
              />
            </div>
          )}

          <div>
            <label className="text-[#8FBE9F] text-sm mb-1 block">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#1B5230] p-2.5 rounded-lg bg-[#0E2A18] text-[#EAF7EE] placeholder:text-[#8FBE9F]/60 outline-none focus:ring-2 focus:ring-[#27D673]/60 focus:border-[#27D673]"
            />
          </div>

          <div>
            <label className="text-[#8FBE9F] text-sm mb-1 block">Password</label>
            <input
              type={seePassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-[#1B5230] p-2.5 rounded-lg bg-[#0E2A18] text-[#EAF7EE] placeholder:text-[#8FBE9F]/60 outline-none focus:ring-2 focus:ring-[#27D673]/60 focus:border-[#27D673]"
            />
            <p className="text-green-200 text-xs text-right cursor-pointer hover:text-green-300" onClick={()=>setSeePassword(val => !val)}>{seePassword ? "hide password" : "see password"}</p>
            {!isLogin && <p className="text-white text-[12px] text-center">(minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1)</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#27D673] text-[#06250F] font-bold py-2.5 rounded-lg hover:bg-[#3CE585] transition-colors duration-200 mt-2 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              isLogin ? loginHandler() : singupHandler();
            }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
          <p className="text-center text-red-500 font-semibold">{error}</p>
        </form>

        <p className="text-center text-sm text-[#8FBE9F] mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#27D673] font-semibold hover:underline cursor-pointer"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

      </div>
    </div>
  );
};

export default LoginPage; 