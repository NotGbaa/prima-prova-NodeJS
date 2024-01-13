const stampaFibonacci = (n, n1 = 1, n2 = 0) => {
    if (n > 0) {
        setImmediate(stampaFibonacci, n - 1, n2, n1 + n2)
        console.log(n1 + n2);
    }
}



const readline = require("readline").createInterface({
input: process.stdin,
output: process.stdout
});
readline.question("numero di iterazioni: ", n => {
    stampaFibonacci(n);
    readline.close();
});