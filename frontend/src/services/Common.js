import { auth } from "./Storage";

let isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
// isLocal = false;

const envBackendUrl = import.meta.env.VITE_BACKEND_URL;
export const API_BASE_DOMAIN = isLocal ? "http://localhost:8000" : envBackendUrl;

// console.log("envBackendUrl:", envBackendUrl);

// console.log("API_BASE_DOMAIN", API_BASE_DOMAIN);

export function isFriendlyWithField(field) {
  const isFriendlyWithField = ["dogs", "cats", "kids", "adults"].includes(field);
  return isFriendlyWithField;
}

export function checkAuth(navigate, showToast) {
  if (!auth.state()) {
    showToast("You are not auhtenticated, please login", "error");
    navigate("/login");
  }
}
