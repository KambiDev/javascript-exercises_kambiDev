const reverseString = function(str) {

    let reverseString = '';

    for (let index = str.length - 1; index >= 0; index--) {
        
        reverseString += str[index];
    }

    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
