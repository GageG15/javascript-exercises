const repeatString = function repeatString(string, num) {

    if (num < 0){
        return "ERROR"; 
    }
    else {
    let text = string.repeat(num);
    return text;
    }
};



// Do not edit below this line
module.exports = repeatString;
