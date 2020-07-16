function snakeCase(value) {
    let ret = value.replace(/(^-*|-*$)/g, '');
    
    if (value.includes(' ')) {
        ret = ret.toLowerCase().split(' ').join('_');
    } else if (value.includes('-')) {
        ret = ret.toLowerCase().split('-').join('_');
    } else {           
        for(let i = 0; i< value.length; i++) {
            if(value[i] === value[i].toUpperCase()) {
                let start = value.slice(0, i);
                let end = (value.slice(i)).toLowerCase();
                
                ret = (start + '_' + end);
            }
        }
    }
    
    return ret;
}

module.export = snakeCase;


