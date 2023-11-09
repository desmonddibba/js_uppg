// Skriv en funktion som läser in 10 heltal till en array och sedan skriver ut talen baklänges. Endast en array ska användas.

function tioHeltal(){
let tal=0;
const array=[];    
    for(let i=0; i<10; i++){
        tal = Number(prompt(`Ange tal ${i+1}`))
        array.push(tal);
        }
        return array.reverse();
    }