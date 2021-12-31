'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = 'aeiou';
    let result = "";
    let rest = ""
    for(let l of s) {
        if(vowels.includes(l))
            result += l + '\n';
        else 
            rest += l + '\n';
    }
    result += rest;
    console.log(result);
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}