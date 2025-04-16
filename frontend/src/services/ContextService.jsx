// NavbarContext.js
import React, { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [navbarType, setNavbarType] = useState("default"); // 'default', 'home', 'profile', etc.

  return <NavbarContext.Provider value={{ navbarType, setNavbarType }}>{children}</NavbarContext.Provider>;
};

export const useNavbar = () => useContext(NavbarContext);
