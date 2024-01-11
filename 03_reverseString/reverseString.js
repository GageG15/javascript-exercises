const reverseString = function(string) {
    const characters = string.split('').reverse();
    const sentence = characters.join('');

    return sentence;

};

// Do not edit below this line
module.exports = reverseString;
