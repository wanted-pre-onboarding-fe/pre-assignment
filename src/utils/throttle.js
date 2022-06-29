const throttle = (callback, delay) => {
  let timerId;

  return (e) => {
    if (timerId) return;
    timerId = setTimeout(
      () => {
        callback(e);
        timerId = null;
      },
      delay,
      e
    );
  };
};

export default throttle;
