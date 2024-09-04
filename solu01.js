const num = 55;
const fibonacci = [0, 1];


do {
    const proximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(proximo);

} while(fibonacci.length < num);

fibonacci.includes(num) ? console.log("Número informado pertence a sequencia.") : console.log("Numero informado não pertence a sequencia.");
