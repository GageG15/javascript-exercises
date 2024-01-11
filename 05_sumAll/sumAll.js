const sumAll = function(a, b) {
    typeA = typeof a;
    typeB = typeof b;

    if (a < 0 || b < 0 || typeA === "string" || typeB === "string" || typeA === "object" || typeB === "object"){
        return "ERROR";
    }

    else if (b > a){
        let d = 1;
        let c = a;
        while (c < b){
            ++c;
            d = d + c;
        }
        return d;
    }

    else if (a > b){
        let d = 1;
        let c = b;
        while (c < a){
            ++c;
            d = d + c;
        }
        return d;
    }

    };

// Do not edit below this line
module.exports = sumAll;
