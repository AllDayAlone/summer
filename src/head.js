function head(arr) {
  return Array.isArray(arr) && arr.length>0 ? arr[0] : 'Value is not valid';
  }
 
  module.exports = head;