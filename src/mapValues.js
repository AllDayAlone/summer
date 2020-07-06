const mapValues = (obj, func) => {
  if (typeof obj !== 'object') return obj;

  const entries = Object.entries(obj);
  const res = entries.reduce((acc, cur) => {
    const [prop, val] = cur;
    return { ...acc, [prop]: func(val) };
  }, {});
  return res;
};

module.exports = mapValues;
