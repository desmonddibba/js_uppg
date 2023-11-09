// Skriv en funktion som läser in 100 tal och räknar och skriver ut hur många gånger talet 7 har lästs in.


function hundraTal(){
    const talLista = [];
    let counter = 0;

    for(let i=0; i<100; i++){
        let tal = prompt(`Mata in tal ${i+1} utav 100...`)
        tal = Number(tal);
        talLista.push(tal);
    }

    for(let i=0; i<talLista.length; i++){

        if(7 === talLista[i]){
            counter++;
        }
    }
console.log(counter)
}