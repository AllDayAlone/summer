const arr = [1, 2, 3, 4, 5];
let mass;
tail=(arr)=>{
arr.shift()
return arr
}
const result = tail(arr);
console.log(result)
