const palindromes = function (string) {
    const limpiarString = string.split(' ').join('').toLowerCase();
    
    const stringInvertido = limpiarString.split('').reverse().join('');

    const palindromo = limpiarString === stringInvertido;

    return palindromo;
};


// Do not edit below this line
module.exports = palindromes;
