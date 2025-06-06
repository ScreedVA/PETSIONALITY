import { API_BASE_DOMAIN } from "../Common";
import { getAccessToken, getRefreshToken } from "../Storage";
import { handle401Exception } from "./Auth";

const API_BASE_URL = `${API_BASE_DOMAIN}/user`;

export async function getMe() {
  try {
    let response = await fetch(`${API_BASE_URL}/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
        "X-API-KEY": "123", // your API key
      },
    });

    if (!response.ok) {
      if (response.status == 401 && getRefreshToken()) {
        response = await handle401Exception(`${API_BASE_URL}/me`, "GET");
        if (!response) throw new Error("Failed to fetch user info after retry.");
      } else {
        const errorData = await response.json();
        const err = new Error(errorData.detail || "Login failed");
        err.status = response.status;
        throw err;
      }
    }

    const data = await response.json();

    return {
      username: data.username,
      email: data.email,
      dateOfBirth: data.date_of_birth,
      phoneNo: data.phone_no,
      country: data.country,
      city: data.city,
      postalCode: data.postal_code,
      status: data.status,
      isTrainer: data.is_trainer,
      isSitter: data.is_sitter,
    };
  } catch (err) {
    if (err instanceof TypeError) {
      // This happens on network errors (e.g. connection refused)
      throw new Error("Unable to connect to server. Please try again.");
    }

    // Re-throw the error with actual status/message
    throw err;
  }
}

export async function updateMe(formData) {
  try {
    let response = await fetch(`${API_BASE_URL}/me`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
        "X-API-KEY": "123", // your API key
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      if (response.status == 401 && getRefreshToken()) {
        response = await handle401Exception(`${API_BASE_URL}/me`, "PUT", formData);
        if (!response) throw new Error("Failed to fetch user info after retry.");
      } else {
        const errorData = await response.json();
        const err = new Error(errorData.detail || "Login failed");
        err.status = response.status;
        throw err;
      }
    }

    const data = await response.json();

    return {
      username: data.username,
      email: data.email,
      dateOfBirth: data.date_of_birth,
      phoneNo: data.phone_no,
      country: data.country,
      city: data.city,
      postalCode: data.postal_code,
      status: data.status,
      isTrainer: data.is_trainer,
      isSitter: data.is_sitter,
    };
  } catch (err) {
    if (err instanceof TypeError) {
      // This happens on network errors (e.g. connection refused)
      throw new Error("Unable to connect to server. Please try again.");
    }

    // Re-throw the error with actual status/message
    throw err;
  }
}
