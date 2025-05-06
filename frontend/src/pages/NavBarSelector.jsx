import React from "react";
import { useNavbar } from "../services/ContextService";
import ProfileNavbar from "../components/ProfileNavbar";
import DefaultNavbar from "../components/DefaultNavbar";

const NavBarSelector = () => {
  const { navbarType } = useNavbar();

  switch (navbarType) {
    case "profile":
      return <ProfileNavbar />;
    default:
      return <DefaultNavbar />;
  }
};

export default NavBarSelector;
