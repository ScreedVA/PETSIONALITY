import { API_BASE_DOMAIN } from "../Common";
import { handle401Exception } from "./Auth";
import { getAccessToken, getRefreshToken } from "../Storage";

const API_BASE_URL = `${API_BASE_DOMAIN}/sitter`;

export async function getMyHomeService(serviceType = "dog_boarding") {
  try {
    // Validate service type
    const allowedTypes = ["dog_boarding", "doggy_day_care"];
    if (!allowedTypes.includes(serviceType)) {
      throw new Error(`Invalid service type: ${serviceType}`);
    }

    // Build request URL with query param
    const url = `${API_BASE_URL}/home_service/me?service_type=${encodeURIComponent(serviceType)}`;

    // Make fetch call with auth headers
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    // Retry logic for 401 Unauthorized
    if (!response.ok) {
      if (response.status === 401 && getRefreshToken()) {
        response = await handle401Exception(url, "GET");
        if (!response) throw new Error("Unauthorized after retry.");
      } else {
        const errorData = await response.json();
        const err = new Error(errorData.detail || "Failed to fetch service");
        err.status = response.status;
        throw err;
      }
    }

    // Return parsed service data
    const data = await response.json();
    return data;
  } catch (err) {
    if (err instanceof TypeError) {
      throw new Error("Network error. Please check your connection.");
    }
    throw err;
  }
}

export async function upsertMyHomeService(serviceType = "dog_boarding", payload) {
  try {
    const allowedTypes = ["dog_boarding", "doggy_day_care"];
    if (!allowedTypes.includes(serviceType)) {
      throw new Error(`Invalid service type: ${serviceType}`);
    }

    const url = `${API_BASE_URL}/home_service/me?service_type=${encodeURIComponent(serviceType)}`;

    let response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify(payload),
    });

    // Retry logic for 401 Unauthorized
    if (!response.ok) {
      if (response.status === 401 && getRefreshToken()) {
        response = await handle401Exception(url, "PUT", payload);
        if (!response) throw new Error("Unauthorized after retry.");
      } else {
        const errorData = await response.json();
        const err = new Error(errorData.detail || "Failed to save service");
        err.status = response.status;
        throw err;
      }
    }

    const data = await response.json();
    return data;
  } catch (err) {
    if (err instanceof TypeError) {
      throw new Error("Network error. Please check your connection.");
    }
    throw err;
  }
}

export async function getMyVisitService(serviceType = "drop_in_visits") {
  try {
    const allowedTypes = ["drop_in_visits", "dog_walking"];
    if (!allowedTypes.includes(serviceType)) {
      throw new Error(`Invalid service type: ${serviceType}`);
    }

    const url = `${API_BASE_URL}/visit_service/me?service_type=${encodeURIComponent(serviceType)}`;

    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401 && getRefreshToken()) {
        response = await handle401Exception(url, "GET");
        if (!response) throw new Error("Unauthorized after retry.");
      } else {
        const errorData = await response.json();
        const err = new Error(errorData.detail || "Failed to fetch visit service");
        err.status = response.status;
        throw err;
      }
    }

    const data = await response.json();
    return data;
  } catch (err) {
    if (err instanceof TypeError) {
      throw new Error("Network error. Please check your connection.");
    }
    throw err;
  }
}

export async function upsertMyVisitService(serviceType = "drop_in_visits", payload) {
  try {
    const allowedTypes = ["drop_in_visits", "dog_walking"];
    if (!allowedTypes.includes(serviceType)) {
      throw new Error(`Invalid service type: ${serviceType}`);
    }

    const url = `${API_BASE_URL}/visit_service/me?service_type=${encodeURIComponent(serviceType)}`;

    let response = await fetch(url, {
      method: "PUT", // Could be "POST" depending on your use
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      if (response.status === 401 && getRefreshToken()) {
        response = await handle401Exception(url, "PUT", payload);
        if (!response) throw new Error("Unauthorized after retry.");
      } else {
        const errorData = await response.json();
        const err = new Error(errorData.detail || "Failed to save visit service");
        err.status = response.status;
        throw err;
      }
    }

    const data = await response.json();
    return data;
  } catch (err) {
    if (err instanceof TypeError) {
      throw new Error("Network error. Please check your connection.");
    }
    throw err;
  }
}
