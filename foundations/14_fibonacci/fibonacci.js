const fibonacci = function(numero) {

    const fibo = [0, 1];

    for (let i = 2; i <= numero; i++){ 

        fibo.push(fibo[i - 2] + fibo[i - 1]);

    }

    return fibo[numero];
};


// Do not edit below this line
module.exports = fibonacci;
