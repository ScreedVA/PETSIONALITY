export function hasMinLength(str) {
  return str.length >= 8;
}

export function hasUpperAndLowerCase(str) {
  return /[a-z]/.test(str) && /[A-Z]/.test(str);
}

export function hasNumber(str) {
  return /\d/.test(str);
}

export function hasSpecialChar(str) {
  return /[!#$%^&*]/.test(str);
}
