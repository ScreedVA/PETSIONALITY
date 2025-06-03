export const localStorageService = {
  // Create or Update an item
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  // Read an item
  get(key) {
    const item = localStorage.getItem(key);
    try {
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.warn("Failed to parse localStorage item:", key);
      return null;
    }
  },

  // Delete an item
  remove(key) {
    localStorage.removeItem(key);
  },

  // Clear all items
  clear() {
    localStorage.clear();
  },

  // Check if a key exists
  exists(key) {
    return localStorage.getItem(key) !== null;
  },

  // Get all keys
  keys() {
    return Object.keys(localStorage);
  },
};

export default localStorageService;

const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

export function getAccessToken() {
  return localStorageService.get(ACCESS_TOKEN_KEY);
}

export function setAccessToken(accessToken) {
  localStorageService.set(ACCESS_TOKEN_KEY, accessToken);
}

export function removeAccessToken() {
  localStorageService.remove(ACCESS_TOKEN_KEY);
}

export function getRefreshToken() {
  return localStorageService.get(REFRESH_TOKEN_KEY);
}

export function setRefreshToken(refreshToken) {
  localStorageService.set(REFRESH_TOKEN_KEY, refreshToken);
}

export function removeRefreshToken() {
  localStorageService.remove(REFRESH_TOKEN_KEY);
}
