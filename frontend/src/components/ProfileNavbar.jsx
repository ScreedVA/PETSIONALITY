import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { logos, imgs, notifications, messages } from "./Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMessage, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function ProfileNavbar() {
  const [pageState, setPageState] = useState("notifications");
  const notifRef = useRef(null);
  const msgRef = useRef(null);
  const infoRef = useRef(null);
  console.log(pageState);

  useEffect(() => {
    function handleClickOutside(event) {
      // Reset page state when clicked out of panel
      const clickOutsideNotif = notifRef.current && !notifRef.current.contains(event.target);
      const clickOutsideMsg = msgRef.current && !msgRef.current.contains(event.target);
      const clickOutsideInfo = msgRef.current && !infoRef.current.contains(event.target);

      if (
        (pageState === "notifications" && clickOutsideNotif) ||
        (pageState === "messages" && clickOutsideMsg) ||
        (pageState === "info" && clickOutsideInfo)
      ) {
        setPageState("default");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pageState, setPageState]);

  return (
    <nav className="flex justify-between px-16 py-2 w-full bg-[#90C6BE] fixed z-40 text-white">
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
        <div
          ref={notifRef}
          className="relative p-3 cursor-pointer hover:bg-dark-green"
          onClick={() => {
            setPageState("notifications");
          }}
        >
          {/* Notification (icon) */}
          <FontAwesomeIcon icon={faBell} />

          {/* Notification (panel) - Expand on Icon Click*/}
          {pageState === "notifications" && (
            <div className="absolute bottom-0 right-0 translate-y-[100%] w-96 h-[500px] shadow-xl rounded-md py-5 z-50 bg-white text-[#288677] flex flex-col">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 px-5">
                  <FontAwesomeIcon icon={faBell} />
                  <h5>Notifications</h5>
                </div>
                <hr />
              </div>
              <div className="flex flex-col overflow-x-hidden overflow-y-auto">
                {notifications.map((notification) => (
                  <>
                    <div className="flex items-center gap-3 px-4 py-4 w-96 hover:bg-gray-200">
                      {/* Notification (Icon) */}
                      <div className=" flex-shrink-0 flex items-center justify-center w-10 h-10 border border-[#288677] rounded-full">
                        <FontAwesomeIcon icon={faBell} />
                      </div>

                      {/* Notification (Content) */}
                      <div className="flex flex-col justify-center flex-grow-0">
                        <p className="pr-20 text-xs font-semibold">{notification.header}</p>
                        <p className="text-[0.6rem]">{notification.body}</p>
                        <p className="text-[0.4rem] text-gray-400">{notification.date}</p>
                      </div>
                    </div>
                    <hr />
                  </>
                ))}
              </div>
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
          {/* Messages (Icon) */}
          <FontAwesomeIcon icon={faMessage} />

          {/* Messages (panel) - Expand on Icon Click*/}
          {pageState === "messages" && (
            <div className="absolute bottom-0 right-0 translate-y-[100%] w-96 h-[500px] shadow-xl rounded-md py-5 z-50 bg-white text-[#288677] flex flex-col">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 px-5">
                  <FontAwesomeIcon icon={faMessage} />
                  <h5>Inbox</h5>
                </div>
                <hr />
              </div>
              <div className="flex flex-col overflow-x-hidden overflow-y-auto">
                {messages.map((message) => (
                  <>
                    <div className="flex items-center gap-3 px-4 py-4 w-96 hover:bg-gray-200">
                      {/* Message (Profile Image - Flex-Left) */}
                      <img
                        src={message.profileImg}
                        className=" flex-shrink-0 flex items-center justify-center w-10 h-10 border border-[#288677] rounded-full"
                      />

                      {/* Message (Content - Flex-Right) */}
                      <div className="flex flex-col justify-center flex-grow-0">
                        <p className="pr-20 text-xs font-semibold">{message.header}</p>
                        <p className="text-[0.6rem]">{message.body}</p>
                        <p className="text-[0.4rem] text-gray-400">{message.date}</p>
                      </div>
                    </div>
                    <hr />
                  </>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Info */}
        <div
          ref={infoRef}
          className="relative p-3 cursor-pointer hover:bg-dark-green"
          onClick={() => {
            setPageState("info");
          }}
        >
          {/* Info (icon) */}
          <FontAwesomeIcon icon={faCircleInfo} />

          {/* Info (panel) - Expand on Icon Click*/}
          {pageState === "info" && (
            <div className="absolute bottom-0 right-0 translate-y-[100%] w-60  shadow-xl rounded-md z-50 bg-white text-[#288677] flex flex-col">
              <p className="px-3 py-2 hover:bg-gray-200">Help Center</p>
              <p className="px-3 py-2 hover:bg-gray-200">PETSIONALITY Forum</p>
              <p className="px-3 py-2 hover:bg-gray-200">Contact Support</p>
            </div>
          )}
        </div>
        <div>
          <img src={imgs[1]} alt="Profile Image" className="h-8 w-8 rounded-[100%] cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
