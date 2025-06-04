export const storage = {
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

export default storage;

const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

export function getAccessToken() {
  return storage.get(ACCESS_TOKEN_KEY);
}

export function setAccessToken(accessToken) {
  storage.set(ACCESS_TOKEN_KEY, accessToken);
}

export function removeAccessToken() {
  storage.remove(ACCESS_TOKEN_KEY);
}

export function getRefreshToken() {
  return storage.get(REFRESH_TOKEN_KEY);
}

export function setRefreshToken(refreshToken) {
  storage.set(REFRESH_TOKEN_KEY, refreshToken);
}

export function removeRefreshToken() {
  storage.remove(REFRESH_TOKEN_KEY);
}

export const auth = {
  KEY: "authentication",

  login() {
    storage.set(this.KEY, true);
  },

  logout() {
    storage.set(this.KEY, false);
    removeAccessToken();
    removeRefreshToken();
  },

  state() {
    return storage.get(this.KEY);
  },
};
