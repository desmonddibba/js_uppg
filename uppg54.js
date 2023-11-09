// Skriv en funktion som läser in 100 heltal. Skriv ut hur många tal som är positiva och hur många som är negativa av de inlästa talen.


function hundraHeltal(){
    let posCount = 0;
    let negCount = 0;

    for(let i=0; i<100; i++){
        let tal = prompt(`Mata in tal ${i+1} utav 100...`)
        tal = Number(tal);

        if(tal>0){
            posCount ++;
        }else if(tal<0){
            negCount ++;}
        }

console.log(`${posCount} Positiva tal, ${negCount} Negativa tal`)
    }



