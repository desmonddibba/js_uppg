// Skriv en funktion som läser in 100 tal och beräknar och skriver ut summan av de positiva talen.


function hundraPosTal(){
    const talLista = [];
    let result = 0;

    for(let i=0; i<100; i++){
        let tal = prompt(`Mata in tal ${i+1} utav 100...`)
        tal = Number(tal);
        
        if(tal>0){
        talLista.push(tal);
        result = result + tal;
    }}
    console.log(result)
    }

