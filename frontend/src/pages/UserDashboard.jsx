import React, { useEffect, useState } from "react";
import { useNavbar } from "../services/ContextService";
import TabMenu from "../components/TabMenu";
import { options1 } from "../components/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import UserInfo from "../components/UserInfo";

export default function UserDashboard() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { setNavbarType } = useNavbar();

  useEffect(() => {
    setNavbarType("profile");
  }, []);
  return (
    <div className="flex h-[100vh] pt-[105px]">
      {/* Sidebar */}
      <div className="flex flex-col justify-between pb-5 text-[#49978B]">
        <div className="flex flex-col flex-1 gap-6 pt-5">
          <h3 className="text-center ">User Profile</h3>
          <TabMenu selectedIndex={selectedIndex} onIndexChange={setSelectedIndex} options={options1} />
        </div>
        <div className="flex justify-center gap-3 cursor-pointer">
          <FontAwesomeIcon icon={faDoorOpen} />
          <p>Logout</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-[5] pb-20 pt-14 px-52">
        <UserInfo />
      </div>
    </div>
  );
}
