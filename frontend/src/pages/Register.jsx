import React from "react";
import { bgs } from "../components/Data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Register() {
  return (
    <div
      style={{ backgroundImage: `url(${bgs})` }}
      className="min-h-[100vh] bg-cover flex flex-col justify-center items-center py-[7%]">
      <div className="w-[500px] bg-white rounded-xl flex flex-col gap-10 p-14">
        <span className="flex gap-4">
          <FontAwesomeIcon
            icon={faLongArrowLeft}
            className="text-2xl text-gray-700"
          />
          <p>Go back</p>
        </span>
        <div>
          <h3>Register to Pawshake</h3>
        </div>

        <div className="flex flex-col gap-10">
          {/* 3/4 */}
          <div className="flex flex-col gap-3">
            {/* Google */}
            <div className="flex justify-center py-2 border border-gray-300 border-solid rounded-lg">
              <p>Continue with Google</p>
            </div>
            {/* Facebook */}
            <div className="flex justify-center py-2 border border-gray-300 border-solid rounded-lg">
              <p>Continue with Facebook</p>
            </div>
            {/* Apple */}
            <div className="flex justify-center py-2 border border-gray-300 border-solid rounded-lg">
              <p>Continue with Apple</p>
            </div>
          </div>

          {/* 4/4 */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-center">
              <hr />
              <p>or</p>
              <hr />
            </div>

            {/* Email */}
            <div className="flex justify-center py-2 border border-gray-300 border-solid rounded-lg">
              <p>Continue with Email</p>
            </div>

            <span className="flex gap-2 text-sm">
              <p>Already have an account</p>
              <Link href="#" className="text-blue-500">
                Log in here
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
