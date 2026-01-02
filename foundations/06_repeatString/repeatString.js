const repeatString = function(str, nVeces) {

    if (nVeces < 0){return 'Error';}

    let cadena = '';
    
    for (let index = 0; index < nVeces; index++) {
        cadena += str;
    }

    return cadena;
};

// Do not edit below this line
module.exports = repeatString;
