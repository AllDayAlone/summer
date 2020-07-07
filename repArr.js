const returnDuplicate = (arr) => {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) return arr[i];
        obj[arr[i]] = true;
    }
    return null;
}