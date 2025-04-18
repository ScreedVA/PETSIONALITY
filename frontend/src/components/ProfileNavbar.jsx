import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { logos, imgs } from "./Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMessage, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function ProfileNavbar() {
  const [pageState, setPageState] = useState("notifications");
  const notifRef = useRef(null);
  const msgRef = useRef(null);
  console.log(pageState);

  useEffect(() => {
    function handleClickOutside(event) {
      // Reset page state when clicked out of panel
      const clickOutsideNotif = notifRef.current && !notifRef.current.contains(event.target);
      const clickOutsideMsg = msgRef.current && !msgRef.current.contains(event.target);

      if ((pageState === "notifications" && clickOutsideNotif) || (pageState === "messages" && clickOutsideMsg)) {
        setPageState("default");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pageState, setPageState]);

  return (
    <nav className="flex justify-between px-16 py-2 w-full bg-[#90C6BE] fixed z-50 text-white">
      {/* Navbar Left - Img/Text*/}
      <div className="flex items-center gap-4">
        <Link to={"/"}>
          <img src={logos[0]} alt="Logo" className="h-16" />
        </Link>
        <div className="p-4 cursor-pointer hover:bg-dark-green">
          <h5>Dashboard</h5>
        </div>
      </div>

      {/* Navbar Right - Icons/Img */}
      <div className="flex items-center gap-3">
        {/* Notification */}
        <div
          ref={notifRef}
          className="relative p-3 cursor-pointer hover:bg-dark-green"
          onClick={() => {
            setPageState("notifications");
          }}
        >
          <FontAwesomeIcon icon={faBell} />
          {pageState === "notifications" && (
            <div className="absolute bottom-0 right-0 translate-y-[100%] w-80 h-56 bg-white shadow-xl rounded-md p-2 z-50">
              {/* Notification Panel (Expandable/Collapsable) */}
            </div>
          )}
        </div>

        {/* Messages */}
        <div
          ref={msgRef}
          className="relative p-3 cursor-pointer hover:bg-dark-green"
          onClick={() => {
            setPageState("messages");
          }}
        >
          <FontAwesomeIcon icon={faMessage} />
          {pageState === "messages" && (
            <div class="absolute bottom-0 right-0 translate-y-[100%] w-80 h-56 bg-white shadow-xl rounded-md p-2 z-50">
              {/* Message Panel (Expandable/Collapsable) */}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-3 cursor-pointer hover:bg-dark-green">
          <FontAwesomeIcon icon={faCircleInfo} />
        </div>
        <div>
          <img src={imgs[1]} alt="Profile Image" className="h-8 w-8 rounded-[100%] cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
