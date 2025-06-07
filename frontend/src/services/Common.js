import { auth } from "./Storage";

const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

const API_BASE_URL = import.meta.env.BACKEND_URL;
export const API_BASE_DOMAIN = isLocal ? "http://localhost:8000" : API_BASE_URL;

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
