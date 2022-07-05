export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {}
};

export const getItem = (key) => {
  try {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null && storedValue !== 'null') {
      return storedValue;
    }
    return null;
  } catch (e) {
    setItem(key, 'null');
    return null;
  }
};

export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {}
};
