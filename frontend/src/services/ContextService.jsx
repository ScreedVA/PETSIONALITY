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

// Toaster Context
const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "info", duration = 3000) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), duration);
  };

  return <ToastContext.Provider value={{ toast, showToast }}>{children}</ToastContext.Provider>;
};

export const useToast = () => useContext(ToastContext);

// AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  const login = () => setAuth(true);
  const logout = () => setAuth(false);

  return <AuthContext.Provider value={{ auth, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(ToastContext);
