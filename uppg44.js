// Skriv en funktion som låter användaren bestämma hur många tal han vill summera. Läs in detta antal tal och summera dem Skriv ut summan.



function summera(x){
const talLista = [];
let result = 0;

    for(let i=0; i<x; i++){
        let tempTal = prompt(`Ange tal nr ${i+1} av ${x}`)
        tempTal = Number(tempTal)
        talLista.push(tempTal);
        result += talLista[i]
    }


console.log(result);


};


