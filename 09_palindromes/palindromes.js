const palindromes = function (string) {
    let punctuation = /[.,?! ]/g;
    let array = string.split("");

    let newString = array.join('').toLowerCase();

    let forwardString = newString.replace(punctuation, '');

    let newReversedString = array.reverse().join('').toLowerCase();
    let reversedString = newReversedString.replace(punctuation, '');

    return reversedString === forwardString;
};

// Do not edit below this line
module.exports = palindromes;
