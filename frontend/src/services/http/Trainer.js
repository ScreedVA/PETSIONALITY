import { API_BASE_DOMAIN } from "../Common";
import { getAccessToken, getRefreshToken } from "../Storage";
import { handle401Exception } from "./Auth";

const API_BASE_URL = `${API_BASE_DOMAIN}/trainer`;

export async function getMyTrainerInfo() {
  try {
    const url = `${API_BASE_URL}/me`;

    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
        "X-API-KEY": "123",
      },
    });

    if (!response.ok) {
      if (response.status === 401 && getRefreshToken()) {
        response = await handle401Exception(url, "GET");
        if (!response) throw new Error("Failed to fetch trainer info after retry.");
      } else {
        const errorData = await response.json();
        const err = new Error(errorData.detail || "Failed to fetch trainer info.");
        err.status = response.status;
        throw err;
      }
    }

    const data = await response.json();

    return data;
  } catch (err) {
    if (err instanceof TypeError) {
      throw new Error("Unable to connect to server. Please try again.");
    }
    throw err;
  }
}

export async function upsertMyTrainerInfo(trainerInfo) {
  /**
   * Upserts trainer info
   * @param trainerInfo - Object containing trainingSpecialities and serviceOptions
   * @returns Updated trainer info from the server
   */
  const url = `${API_BASE_URL}/me`;

  try {
    let response = await fetch(url, {
      method: "PUT", // or "POST" depending on your use case
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
        "X-API-KEY": "123",
      },
      body: JSON.stringify(trainerInfo),
    });

    if (!response.ok) {
      if (response.status === 401 && getRefreshToken()) {
        response = await handle401Exception(url, "PUT", trainerInfo);
        if (!response) throw new Error("Failed to upsert trainer info after retry.");
      } else {
        const errorData = await response.json();
        const err = new Error(errorData.detail || "Failed to upsert trainer info.");
        err.status = response.status;
        throw err;
      }
    }

    const data = await response.json();

    return data;
  } catch (err) {
    if (err instanceof TypeError) {
      throw new Error("Unable to connect to server. Please try again.");
    }
    throw err;
  }
}
