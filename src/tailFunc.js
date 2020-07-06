export const tail = arr => {
  return !arr ? undefined : !arr.length ? undefined : _.tail(arr);
}
