const without = (array, ...elementsToDelete) => {
    return array.filter(element => !elementsToDelete.includes(element));
}

module.exports = without;
