import fetch from 'node-fetch'; 
import { createRequire } from "module";
const require = createRequire(import.meta.url);
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const fs = require('fs');
const json = JSON.parse(fs.readFileSync("conf.json"));
const token = json.token;

const readline = require('readline').createInterface({
input: process.stdin,
output: process.stdout
});

const set = (dict, token) => {
  return new Promise((resolve, reject) => {
    fetch("https://ws.progettimolinari.it/cache/set", {
      headers: {
        "content-type": "application/json",
        key: key
      },
      method: "Post",
      body: JSON.stringify({
        key: token,
        value: JSON.stringify(dict),
      })
    })
      .then((element) => element.json())
      .then((element) => {
        console.log("Salvataggio dati : ", element);
        resolve(element)
      })
      .catch((error) => console.error(error))
  })
}

readline.question('inserire key', key => {
    readline.question('inserire valore', value => { 
        set(value, key, token);
        console.log(`Hey there ${key}!`);
        readline.close();
    });
});
 