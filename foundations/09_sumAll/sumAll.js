const sumAll = function(min, max) {
    let sum = 0;
    while (min <= max) {
        sum += min;
        min++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
