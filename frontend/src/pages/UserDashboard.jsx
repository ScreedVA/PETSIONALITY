import React, { useEffect, useState } from "react";
import { useNavbar, useToast } from "../services/ContextService";
import TabMenu from "../components/TabMenu";
import TabMenuMobile from "./TabMenu.Mobile";
import { tabOptions4 } from "../components/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import UserInfo from "../components/UserInfo";
import MyPets from "../components/MyPets";
import Services from "../components/Services";
import TrainerInfo from "../components/TrainerInfo";
import { auth } from "../services/Storage";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../services/Common";
export default function UserDashboard() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tabOptions, setTabOptions] = useState(tabOptions4);
  const { setNavbarType } = useNavbar();
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const { showToast } = useToast();

  useEffect(() => {
    setNavbarType("profile");

    checkAuth(navigate, showToast);

    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-[100vh] pt-[105px] bg-beige-gradient">
      {/* Sidebar or Topbar */}
      {width > 786 ? (
        <div className="flex flex-col justify-between pb-5 text-[#49978B]">
          <div className="flex flex-col flex-1 gap-6 pt-5">
            {/* <h3 className="text-center ">User Profile</h3> */}
            <TabMenu selectedIndex={selectedIndex} onIndexChange={setSelectedIndex} options={tabOptions} />
          </div>
          <div className="flex items-center justify-center gap-3 cursor-pointer">
            <FontAwesomeIcon icon={faDoorOpen} />
            <p>Logout</p>
          </div>
        </div>
      ) : (
        <div className="mb-3">
          <TabMenuMobile selectedIndex={selectedIndex} onIndexChange={setSelectedIndex} options={tabOptions} />
        </div>
      )}
      {/* Main Content */}
      <div className="flex-[5] pb-24 pt-5 px-[12%] overflow-y-auto">
        {selectedIndex === 0 && <UserInfo />}
        {selectedIndex === 1 && <MyPets />}
        {selectedIndex === 2 && <Services />}
        {selectedIndex === 3 && <TrainerInfo />}
      </div>
    </div>
  );
}
