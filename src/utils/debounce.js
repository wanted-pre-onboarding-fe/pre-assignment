const debounce = (callback, delay) => {
  let timerId;

  return (e) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(callback, delay, e);
  };
};

export default debounce;
