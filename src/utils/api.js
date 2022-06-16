const request = async (url) => {
  try {
    const res = await fetch(url);
    if (res.ok) {
      return await res.json();
    }
    throw new Error('API REQUEST ERROR');
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getData = async (url) => {
  return await request(url);
};
