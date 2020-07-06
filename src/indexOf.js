'user strict'

function indexOf (array, element) {
    let find = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == element) {
            return i;
            find = true;
        }  
    }
    if (find === false) {
        return -1;
    }
}

