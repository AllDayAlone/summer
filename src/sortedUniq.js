
function sortedUniq(...arr){
    if (Array.isArray(...arr)){
        return [...new Set(...arr)]
    }
    return [...new Set(arr)]
}

module.exports = sortedUniq;