const pipe =
  (...fns) =>
  (input) =>
    fns.reduce((acc, fn) => fn(acc), input);

export default pipe;
