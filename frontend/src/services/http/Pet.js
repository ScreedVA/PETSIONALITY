import { API_BASE_DOMAIN } from "../CommonService";
import { getAccessToken, getRefreshToken } from "../Storage";
import { handle401Exception } from "./Auth";

const API_BASE_URL = `${API_BASE_DOMAIN}/pet`;

export async function getMyPets({ detailLevel = "full", limit } = {}) {
  try {
    // Build query params string
    const params = new URLSearchParams();
    if (detailLevel) params.append("detail_level", detailLevel);
    if (limit !== undefined) params.append("limit", limit);

    let url = `${API_BASE_URL}/list/owner/me`;
    if ([...params].length) {
      url += `?${params.toString()}`;
    }

    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
        "X-API-KEY": "123", // your API key
      },
    });

    if (!response.ok) {
      if (response.status === 401 && getRefreshToken()) {
        response = await handle401Exception(url, "GET");
        if (!response) throw new Error("Failed to fetch pets after retry.");
      } else {
        const errorData = await response.json();
        const err = new Error(errorData.detail || "Failed to fetch pets");
        err.status = response.status;
        throw err;
      }
    }

    const data = await response.json();

    // data is already the list of pets; return as-is or map/transform if needed
    return data;
  } catch (err) {
    if (err instanceof TypeError) {
      // Network error handling
      throw new Error("Unable to connect to server. Please try again.");
    }
    throw err;
  }
}

export async function getMyPet({ id, detailLevel = "full" } = {}) {
  try {
    // Build query params string
    const params = new URLSearchParams();
    if (detailLevel) params.append("detail_level", detailLevel);

    let url = `${API_BASE_URL}/owner/me/${id}`;
    if ([...params].length) {
      url += `?${params.toString()}`;
    }

    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
        "X-API-KEY": "123", // your API key
      },
    });

    if (!response.ok) {
      if (response.status === 401 && getRefreshToken()) {
        response = await handle401Exception(url, "GET");
        if (!response) throw new Error("Failed to fetch pets after retry.");
      } else {
        const errorData = await response.json();
        const err = new Error(errorData.detail || "Failed to fetch pets");
        err.status = response.status;
        throw err;
      }
    }

    const data = await response.json();

    // data is already the list of pets; return as-is or map/transform if needed
    return data;
  } catch (err) {
    if (err instanceof TypeError) {
      // Network error handling
      throw new Error("Unable to connect to server. Please try again.");
    }
    throw err;
  }
}
