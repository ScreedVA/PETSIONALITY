import React from "react";
import { roles } from "../components/Data";
import { Link } from "react-router-dom";

export default function RoleSelection() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center align-middle bg-mint-gradient w-full h-full px-[10%] py-20">
      <div className="flex flex-col items-center w-full gap-2">
        <p className="text-center">Select your role to get started with the pet care community.</p>
        <h1 className="w-2/3 text-2xl font-semibold text-center text-white md:text-5xl">
          Get Started By Defining Your Role
        </h1>
      </div>

      <div className="flex flex-col  md:grid md:w-2/3 h-1/2 gap-2 grid-cols-2 grid-rows-[1fr_1fr]">
        {/* Pet Sitter (Top-Left) */}
        <Link
          to={"/user-dashboard/sitter"}
          className="col-start-1 row-start-1 p-4 text-white bg-black card1"
          style={{ backgroundImage: `url(${roles[0]})` }}
        >
          <p className="relative text-xs after-line1">
            Caring for pets while their owners are away. Offer walks, feeding, and companionship.
          </p>
          <h2 className="mt-2 text-3xl font-bold">PET SITTER</h2>
        </Link>

        {/* Pet-Owner (Top-Right) */}
        <Link
          to={"/user-dashboard/owner"}
          className="col-start-2 row-start-1 p-4 text-white bg-black card1"
          style={{ backgroundImage: `url(${roles[1]})` }}
        >
          <p className="relative text-xs after-line1 ">
            Looking for trusted care, training, or services for your furry friend.
          </p>
          <h2 className="mt-2 text-3xl font-bold">PET OWNER</h2>
        </Link>

        {/* Trainer (Bottom) */}
        <Link
          to={"/user-dashboard/trainer"}
          className="col-start-1 col-end-3 row-start-2 p-4 text-white bg-black card1"
          style={{ backgroundImage: `url(${roles[2]})` }}
        >
          <p className="relative text-xs after-line1">
            Caring for pets while their owners are away. Offer walks, feeding, and companionship.
          </p>
          <h2 className="mt-2 text-3xl font-bold">TRAINER</h2>
        </Link>
      </div>
    </div>
  );
}
