import React, { useEffect, useState } from "react";
import { useNavbar } from "../services/ContextService";
import TabMenu from "../components/TabMenu";
import { options2 } from "../components/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import UserInfo from "../components/UserInfo";
import MyPets from "../components/MyPets";
import Services from "../components/Services";
import SitterInfo from "../components/SitterInfo";

export default function UserDashboardSitter() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { setNavbarType } = useNavbar();

  useEffect(() => {
    setNavbarType("profile");
  }, []);

  return (
    <div className="flex h-[100vh] pt-[105px] bg-beige-gradient">
      {/* Sidebar */}
      <div className="flex flex-col justify-between pb-5 text-[#49978B]">
        <div className="flex flex-col flex-1 gap-6 pt-5">
          <h3 className="text-center ">User Profile</h3>
          <TabMenu selectedIndex={selectedIndex} onIndexChange={setSelectedIndex} options={options2} />
        </div>
        <div className="flex items-center justify-center gap-3 cursor-pointer">
          <FontAwesomeIcon icon={faDoorOpen} />
          <p>Logout</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-[5] pb-24 pt-5 px-[15%] overflow-y-auto">
        {selectedIndex === 0 && <UserInfo />}
        {selectedIndex === 1 && <SitterInfo />}
        {selectedIndex === 2 && <Services />}
      </div>
    </div>
  );
}
