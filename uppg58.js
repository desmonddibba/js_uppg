//Skriv en funktion som läser in 10 tal, bestämmer och skriver ut det största av talen.

function storaTian(){
const talLista = [];
let inputTal = 0;

    for(let i=0; i<10; i++){
        inputTal = Number(prompt(`Ange tal ${i+1}`))
        talLista.push(inputTal)
    }

    talLista.sort();
    console.log(talLista[talLista.length-1]);

    talLista.sort((a,b )=>b-a)
    console.log(talLista[0])


}

