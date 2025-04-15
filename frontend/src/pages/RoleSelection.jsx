import React from "react";
import { roles } from "../components/Data";

export default function RoleSelection() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center align-middle bg-mint-gradient h-[100vh] w-full px-[10%]">
      <div className="flex flex-col items-center w-full">
        <p>Select your role to get started with the pet care community.</p>
        <h1 className="w-2/3 text-5xl font-semibold text-center text-white">Get Started By Defining Your Role</h1>
      </div>

      <div className="grid w-2/3 h-1/2 gap-2 grid-cols-2 grid-rows-[1fr_1fr]">
        {/* Top Left */}
        <div
          className="col-start-1 row-start-1 p-4 text-white bg-black card1"
          style={{ backgroundImage: `url(${roles[0]})` }}
        >
          <p className="relative text-xs after-line1">
            Caring for pets while their owners are away. Offer walks, feeding, and companionship.
          </p>
          <h2 className="mt-2 text-3xl font-bold">PET SITTER</h2>
        </div>

        {/* Top Right */}
        <div
          className="col-start-2 row-start-1 p-4 text-white bg-black card1"
          style={{ backgroundImage: `url(${roles[1]})` }}
        >
          <p className="relative text-xs after-line1 ">
            Looking for trusted care, training, or services for your furry friend.
          </p>
          <h2 className="mt-2 text-3xl font-bold">PET OWNER</h2>
        </div>

        {/* Bottom */}
        <div
          className="col-start-1 col-end-3 row-start-2 p-4 text-white bg-black card1"
          style={{ backgroundImage: `url(${roles[2]})` }}
        >
          <p className="relative text-xs after-line1">
            Caring for pets while their owners are away. Offer walks, feeding, and companionship.
          </p>
          <h2 className="mt-2 text-3xl font-bold">TRAINER</h2>
        </div>
      </div>
    </div>
  );
}
