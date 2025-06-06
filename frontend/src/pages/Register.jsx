import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import PasswordValidator from "../components/PasswordValidator";
import { imgs } from "../components/Data";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/http/Auth";
import { useToast } from "../services/ContextService";
import { auth } from "../services/Storage";

export default function Register2() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    username: "JohnDoe",
    email: "johndoe@gmail.com",
    password: "BYX.S8CSPqVXER5!",
    isValid: false,
    validationsArray: [],
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState({});
  const { showToast } = useToast();

  async function handleRegisterClick(e) {
    e.preventDefault();

    try {
      if (agreeTerms) {
        await registerUser(registerData);
        auth.login();
        setError({});
        navigate("/user-dashboard");
        showToast(`Welcome back ${loginData.username}`, "success", 6000);
        console.log("log in sucess");
      } else {
        setError((prevFields) => ({ ...prevFields, agreeTerms: "Must agree to terms of service" }));
      }
    } catch (err) {
      console.error(`Login Failed: Error Message: ${err.message}`);
      if (err.status === 409) {
        showToast(`Conflict: ${err.message}`, "error", 6000);
      } else if (err instanceof TypeError) {
        showToast(err.message, "error", 6000);
      } else {
        throw err;
      }
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target || {};

    setRegisterData((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  }

  return (
    <div className="bg-mint-gradient min-h-[100vh] flex justify-center items-center pb-20 pt-36">
      <div className="flex gap-28">
        {/* Left */}
        <form className="max-w-[500px] bg-white rounded-xl flex flex-col gap-10 p-14">
          {/* 1/3 */}
          <span className="flex gap-4">
            <FontAwesomeIcon icon={faLongArrowLeft} className="text-2xl text-gray-700" />
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
              <input
                type="email"
                placeholder="john@example.com"
                name="email"
                value={registerData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Username</label>
              <input
                type="text"
                placeholder="John Doe"
                name="username"
                value={registerData.username}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <PasswordValidator onChange={setRegisterData} value={registerData.password} />
            </div>

            <div>
              <button type="submit" className="w-full py-3 button1" onClick={handleRegisterClick}>
                Register
              </button>
            </div>
            <div className="flex gap-2">
              <p>
                Already have an account? <u className="font-semibold text-blue-400">Login here</u>
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="flex-shrink-0 checkbox1"
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <p className="text-xs ">
                By registering you agree to accept the <u>Terms of Service</u> and the <u>Privacy & Cookie Policy</u>
              </p>
            </div>
            {error.agreeTerms && <small className="text-red-400">{error.agreeTerms}</small>}
          </div>
        </form>

        {/* Right */}
        <img src={imgs[0]} className="md:inline hidden w-[500px] bg-white rounded-2xl" />
      </div>
    </div>
  );
}
