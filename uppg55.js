// Skriv en funktion där indata består av 101 tal. Bestäm och skriv ut summan av de tal som är större än första talet samt summan av de tal som är mindre än första talet.

function hundraHeltal(){
    let talLista = [];  
    let uppCountResult = 0;  
    let downCountResult = 0;  


    for(let i = 0; i < 101; i++){
        let tal = prompt(`Mata in tal ${i + 1} utav 101...`);
        tal = Number(tal);
        talLista.push(tal);
    }

    const talNrEtt = talLista[0];


    for(let i = 1; i < 101; i++){  
        if(talLista[i] > talNrEtt){
            uppCountResult += talLista[i];
        } else if(talLista[i] < talNrEtt){
            downCountResult += talLista[i];
        }
    }


    console.log(`${uppCountResult} över, ${downCountResult} under`);
}


hundraHeltal();

