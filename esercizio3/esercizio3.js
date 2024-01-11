import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let Parole = [];
let ultimeLettere = "";

fs.readFile("660000_parole_italiane.txt", (error, data) => {
    if (error) {
        throw error;
    }

    console.log("parole file: " + data);
    Parole = data.toString().split("\n");

    readline.question("inserire parola: \n", parola => {
        console.log("parola: " + parola);
        
        if (parola.length >= 3) {
            ultimeLettere = parola.slice(-3);
            console.log("Ultime tre lettere: " + ultimeLettere);
        } else {
            console.log("parola troppo corta");
        }

        console.log("lunghezza array: " + Parole.length);

        const paroleRima = [];
        for (let i = 0; i < Parole.length; i++) {
            if (Parole[i].slice(-3) == ultimeLettere) {
                paroleRima.push(Parole[i]);
            }
        }
        console.log ("Rime trovate: " + paroleRima.length);
        console.log("Rime: "+ paroleRima);
        readline.close();
    });
});