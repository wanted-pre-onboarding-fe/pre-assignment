const key = 'userData';

export function getUserData() {
  const userData = localStorage.getItem(key);
  const { id, pwd } = JSON.parse(userData);
  return { id, pwd };
}

export function setUserData(id, pwd) {
  const value = JSON.stringify({ id, pwd });
  localStorage.setItem(key, value);
}

export function removeUserData() {
  localStorage.removeItem(key);
}
