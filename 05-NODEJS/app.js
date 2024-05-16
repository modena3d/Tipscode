const { rejects } = require('assert');
const fs = require('fs');
//const { resolve } = require('path');

console.log(1);

const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if(err) {
            reject(err)
        } else {
            resolve(contents)
        }
    })
})

/*readFile('msg2.txt').then(contents =>{
    console.log(String(contents))

    return readFile
})*/

const init = async() => {
    const contents = await readFile('msg2.txt');
    console.log(String(contents))
}

console.log(init())

console.log(2);
console.log(3);

















/*
fs.readFile('msg1.txt', (err, contents) =>{

    fs.readFile('msg2.txt', (err2,contents2) => {
        console.log(String(contents))
        console.log(String(contents2))
    } )
});*/