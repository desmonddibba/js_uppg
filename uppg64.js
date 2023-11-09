// Skriv en funktion som läser in 10 positiva tal och bestämmer vilket tal som är störst och vilket som är näst störst. 
// Utnyttja två variabler big och nextbig där de största och det näst största av de hittills lästa talen finns.


function tioTal(){
let userInput;
const numArr = []
    for(let i = 0; i<10; i++){
        userInput = Number(prompt(`Ange tal nr ${i+1} av 10`))
        numArr.push(userInput)}    

numArr.sort((a,b) => b - a)
let big = numArr[0]
let nextbig = numArr[1]
console.log(big, nextbig)
}

