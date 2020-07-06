var _ = require('lodash');

export const traverse = (obj, func) => {
    _.forIn(obj, (val, key) => {
        obj[key] = func(val);
        if (Array.isArray(val)) {
            val.forEach(function(el) {
                if (_.isObject(el)) {
                    traverse(el, func);
                }
            });
        }
        if (_.isObject(key)) {
            traverse(obj[key], func);
        }
    });
    return obj;
}
