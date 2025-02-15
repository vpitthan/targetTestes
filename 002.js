
function fibonacci(n) {
    let fib = [0, 1]; 

    
    while (true) {
        let nextFib = fib[fib.length - 1] + fib[fib.length - 2];
        if (nextFib > n) break; 
        fib.push(nextFib);
    }

    return fib; 
}


function pertenceAFibonacci(num) {
    const fibSequence = fibonacci(num); 
    return fibSequence.includes(num); 
}


const numero = 21; 


if (pertenceAFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}