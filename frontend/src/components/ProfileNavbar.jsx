import React from "react";
import { Link } from "react-router-dom";
import { logos, imgs } from "./Data";

export default function ProfileNavbar() {
  return (
    <nav className="flex justify-between px-16 py-5 w-full bg-[#90C6BE] fixed">
      {/* Logo */}
      <Link to={"/"}>
        <img src={logos[0]} alt="Logo" className="h-16" />
      </Link>

      {/* Profile Image */}
      <div className="flex items-center gap-5">
        <img src={imgs[1]} alt="Profile Image" className="h-8 rounded-[100%]" />
        <p className="text-white">Jane Doe</p>
      </div>
    </nav>
  );
}
