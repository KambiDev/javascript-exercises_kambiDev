const removeFromArray = function(array, num) {
    
    array.forEach((element, index) => {
        if (element === num){
            array.splice(index, 1);
        }
    });

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
