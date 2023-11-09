// Skriv en funktion som låter användaren bestämma hur många tal han vill läsa in. Det största och minsta värdet av talen ska beräknas och skrivas ut.


function storLiten(x){
    const talLista = [];
    let inputTal = 0;
    
        for(let i=0; i<x; i++){
            inputTal = Number(prompt(`Ange tal ${i+1}`))
            talLista.push(inputTal)
        }
    
        talLista.sort();
        console.log(talLista[talLista.length-1]);
        console.log(talLista[0])
    }
    
    