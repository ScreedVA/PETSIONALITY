// NavbarContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [navbarType, setNavbarType] = useState("default"); // 'default', 'home', 'profile', etc.

  return <NavbarContext.Provider value={{ navbarType, setNavbarType }}>{children}</NavbarContext.Provider>;
};

export const useNavbar = () => useContext(NavbarContext);

export function useScreenWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
