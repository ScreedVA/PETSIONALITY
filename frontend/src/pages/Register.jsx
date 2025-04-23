import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import PasswordValidator from "../components/PasswordValidator";
import { imgs } from "../components/Data";
import { useNavigate } from "react-router-dom";

export default function Register2() {
  const [passwordState, setPasswordState] = useState({
    password: "",
    isValid: false,
    validationsArray: [],
  });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/role-selection");
  }

  return (
    <div className="bg-mint-gradient min-h-[100vh] flex justify-center items-center pb-20 pt-36">
      <div className="flex gap-28">
        <form
          onSubmit={handleSubmit}
          className="w-[500px] bg-white rounded-xl flex flex-col gap-10 p-14">
          {/* 1/3 */}
          <span className="flex gap-4">
            <FontAwesomeIcon
              icon={faLongArrowLeft}
              className="text-2xl text-gray-700"
            />
            <p>Go back</p>
          </span>

          {/* 2/3 */}
          <div>
            <h3>Create an account</h3>
          </div>

          {/* 3/3 */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="flex flex-col gap-1">
              <label>First name</label>
              <input type="text" placeholder="First name" />
            </div>
            <div className="flex flex-col gap-1">
              <label>Last name</label>
              <input type="text" placeholder="Last name" />
            </div>
            <div>
              <PasswordValidator onChange={setPasswordState} />
            </div>
            <div>
              <button type="submit" className="w-full py-3 button1">
                Register
              </button>
            </div>
            <div className="flex gap-2">
              <p>
                Already have an account?{" "}
                <u className="font-semibold text-blue-400">Login here</u>
              </p>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="flex-shrink-0 checkbox1" />
              <p className="text-xs ">
                By registering you agree to accept the <u>Terms of Service</u>{" "}
                and the <u>Privacy & Cookie Policy</u>
              </p>
            </div>
          </div>
        </form>
        <img src={imgs[0]} className="w-[500px] bg-white rounded-2xl" />
      </div>
    </div>
  );
}
