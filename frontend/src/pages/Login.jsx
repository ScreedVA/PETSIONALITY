import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imgs, logos } from "../components/Data";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/role-selection");
  }

  return (
    <div className="bg-mint-gradient min-h-[100vh] flex justify-center items-center pb-14 pt-36">
      <div className="flex gap-28">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 bg-white p-14 rounded-xl ">
          {/* 1/5 */}
          <span className="flex gap-4">
            <FontAwesomeIcon icon={faLongArrowLeft} className="text-2xl text-gray-700" />
            <p>Go back</p>
          </span>

          {/* 2/5 */}
          <div>
            <h3>Login</h3>
          </div>

          {/* 3/5 */}
          <div className="flex flex-col gap-5">
            {/* Google */}
            <div className="flex items-center justify-center gap-2 py-2 border border-black border-solid">
              <div className="flex items-center justify-center w-8 h-8">
                <img src={logos[1]} alt="Google Logo" />
              </div>
              <p>Continue with Google</p>
            </div>

            {/* Yahoo */}
            <div className="flex items-center justify-center gap-2 py-2 border border-black border-solid">
              <div className="flex items-center justify-center w-8 h-8">
                <img src={logos[2]} alt="Facebook Logo" />
              </div>
              <p>Continue with Facebook</p>
            </div>

            {/* Apple */}
            <div className="flex items-center justify-center gap-2 py-2 border border-black border-solid">
              <div className="flex items-center justify-center w-8 h-8">
                <img src={logos[3]} alt="Apple Logo" />
              </div>
              <p>Continue with Apple</p>
            </div>
          </div>

          {/* 4/5 */}
          <div>
            <div>
              <p className="text-center">or</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="flex flex-col gap-2">
                <label>Password</label>
                <input type="password" placeholder="Password" />
              </div>
              <div>
                <button type="submit" className="w-full py-3 button1">
                  Sign in
                </button>
              </div>
              <div className="flex gap-2">
                <p>
                  Don't have an account yet? <u className="font-semibold text-blue-400">Sign up here</u>
                </p>
              </div>
            </div>
          </div>
        </form>
        <img src={imgs[0]} className="w-[500px] bg-white rounded-2xl " />
      </div>
    </div>
  );
}
