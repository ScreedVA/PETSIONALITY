import { API_BASE_DOMAIN } from "../CommonService";
import storage, {
  setAccessToken,
  setRefreshToken,
  removeAccessToken,
  getAccessToken,
  getRefreshToken,
  auth,
} from "../Storage";

const API_BASE_URL = `${API_BASE_DOMAIN}/auth`;

async function refreshAccessToken() {
  try {
    const response = await fetch(`${API_BASE_URL}/refresh`, {
      method: "GET",
      headers: {
        "refresh-token": getRefreshToken(),
      },
    });

    if (!response.ok) {
      throw new Error(
        `Refresh token expired or invalid, Report Status: ${response.status}, Message: ${response.message}`
      );
    }

    const data = await response.json();

    setAccessToken(data.access_token);

    return data.access_token;
  } catch (err) {
    if (err instanceof TypeError) {
      // This happens on network errors (e.g. connection refused)
      throw new Error("Unable to connect to server. Please try again.");
    }

    // Re-throw the error with actual status/message
    throw err;
  }
}

export async function handle401Exception(endpoint, method, body = null) {
  try {
    const refreshSuccess = await refreshAccessToken();

    if (!refreshSuccess) {
      console.warn("Token refresh failed. Redirecting to login...");
      throw new Error("Session expired. Please log in again.");
    }

    const accessToken = getAccessToken();

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "X-API-KEY": "123", // Same as in original request
    };

    if (method === "PUT" || method === "POST") {
      headers["Content-Type"] = "application/json";
    }

    const options = {
      method,
      headers,
      body: body && (method === "PUT" || method === "POST") ? JSON.stringify(body) : undefined,
    };

    const response = await fetch(endpoint, options);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const err = new Error(errorData.detail || "Retry request failed");
      err.status = response.status;
      throw err;
    }

    console.warn("User Unauhtorized: Token refresh redirect successful");
    auth.login();
    return response;
  } catch (err) {
    if (err instanceof TypeError) {
      throw new Error("Network error. Please check your connection.");
    }
    throw err;
  }
}

export async function loginUser(username, password) {
  /**
   * Logs in a user by sending their username and password to the FastAPI login endpoint.
   *
   * @param {string} username - The user's username.
   * @param {string} password - The user's password.
   * @returns {Promise<Object>} - A promise that resolves to an object containing the access and refresh tokens.
   * @throws {Error} - If the login request fails or the credentials are invalid.
   */

  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);

  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-API-KEY": "123", // your API key
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const err = new Error(errorData.detail || "Login failed");
      err.status = response.status;
      throw err;
    }

    const data = await response.json();
    setAccessToken(data.access_token);
    setRefreshToken(data.refresh_token);

    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      tokenType: data.token_type,
    };
  } catch (err) {
    if (err instanceof TypeError) {
      // This happens on network errors (e.g. connection refused)
      throw new TypeError("Unable to connect to server. Please try again.");
    }

    // Re-throw the error with actual status/message
    throw err;
  }
}

export async function registerUser(requestBody) {
  const formData = {
    email: requestBody.email,
    username: requestBody.username,
    password: requestBody.password,
  };

  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "123", // your API key
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const err = new Error(errorData.detail || "Register failed");
      err.status = response.status;
      throw err;
    }

    const data = await response.json();
    setAccessToken(data.access_token);
    setRefreshToken(data.refresh_token);

    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      tokenType: data.token_type,
    };
  } catch (err) {
    if (err instanceof TypeError) {
      // This happens on network errors (e.g. connection refused)
      throw new TypeError("Unable to connect to server. Please try again.");
    }

    // Re-throw the error with actual status/message
    throw err;
  }
}
