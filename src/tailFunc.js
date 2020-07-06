const tail = arr => {
  return arr.length === 0 ? 'Empty array!' : arr[arr.length-1]
}

module.exports = tail
