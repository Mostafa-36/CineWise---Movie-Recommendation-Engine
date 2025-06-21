const compose =
  (...fns) =>
  (input) =>
    fns.reduceRight((acc, fn) => fn(acc), input);

export default compose;
