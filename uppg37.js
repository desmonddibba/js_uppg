// Skriv en funktion som läser in hur många tal användaren vill ange. funktionen ska sedan läsa in detta antal tal och skriva ut dem.

function antalTal(a){
//a är antal
let talLista = [];
let varde;
for(let i=0; i<a; i++){
    varde = prompt(`Ange tal ${i+1}`)
    talLista.push(Number(varde))}

    console.log(talLista)
}



antalTal(prompt('Hur många tal vill du ange?:'));
