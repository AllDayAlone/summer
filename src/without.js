function without(arr, ...values) {
    function notExist(value) {
        return ![...values].includes(value);
    }
    return arr.filter(notExist);
  }

export default without;