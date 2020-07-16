function myMapArray(obj, f) {
    let arr = [];
    obj.forEach((item, index, array) => arr.push(f(item)));
    return arr;
}

function myMapObject(obj, f) {
    let arr = [];
    for (let key in obj) {
        if(obj.hasOwnProperty(key))
            arr.push(f(obj[key]));
    }
    return arr;
}

function map(obj, f) {
    if (typeof obj === Array)
        return myMapArray(obj, f);
    else return myMapObject(obj, f);

}

module.exports = map;