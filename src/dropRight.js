const dropRight = (array, n = 1) => {
    if (n >= array.length) {
        return [];
    }

    for (let i = 0; i < n; i += 1) {
        array.pop();
    }

    return array;
}

module.exports = dropRight;
