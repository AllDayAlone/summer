function get(object, property, defaultValue) {
  if (object === null) {
    return defaultValue;
  }

  if (!Object.prototype.hasOwnProperty.call(object, property)) {
    return defaultValue;
  }

  return object[property];
}

module.exports = get;
