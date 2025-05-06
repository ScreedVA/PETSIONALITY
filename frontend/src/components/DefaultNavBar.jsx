import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigations } from "./Data";
import { BiChevronDown } from "react-icons/bi";
import Logo from "../assets/images/logo/1.png";

const DefaultNavBar = () => {
  const { pathname } = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="absolute top-0 left-0 z-10 w-full text-sm">
      <div className="flex items-center justify-between py-1 wrapper">
        <Link to="/">
          <img style={{ maxWidth: "250px" }} src={Logo} alt="" />
        </Link>
        <div className={`flex items-center mobile_menu ${mobileMenu ? "open" : ""}`}>
          {navigations.map((nav, i) => {
            return (
              <div
                className={`nav_link relative py-5 pr-8 group transition whitespace-nowrap ${
                  pathname === nav.link ? "yes" : ""
                }`}
                key={i}
              >
                {nav.dropdown ? (
                  <Link to={nav.link} className="font-bold">
                    {nav.text}
                    <BiChevronDown className="inline text-xl transition group-hover:rotate-180" />
                  </Link>
                ) : (
                  <Link to={nav.link} className="font-bold">
                    {nav.text}
                  </Link>
                )}

                {nav.dropdown ? (
                  <div className="absolute left-0 invisible px-4 py-4 transition -translate-y-5 opacity-0 bg-beige top-full group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible ">
                    {nav.dropdown.map((item, i) => {
                      return (
                        <Link key={i} to={item.link} className="block mb-2">
                          {item.text}
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
          <div className="flex gap-6">
            <Link to="/login" className="block py-2 font-bold underline align-middle h-fit text-orange">
              Sign In
            </Link>
            <Link to="/register" className="block px-8 py-2 font-bold align-middle bg-orange h-fit">
              Register
            </Link>
          </div>
        </div>

        {/* menu button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`menuButton lg:hidden z-50 ${mobileMenu ? "clicked fixed right-6" : ""}`}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </div>
  );
};

export default DefaultNavBar;
