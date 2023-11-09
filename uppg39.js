// Skriv en funktion som läser in ett pris exkl moms och skriver ut priset inkl 25 % moms. Inläsningen ska pågå tills 0 anges.
function moms(){
let moms = 1.25;
let x;

    while(true){
        x = prompt('Ange ett pris utan moms')
        x = Number(x) 

        if(x===0){
        alert('Hejdå.')
        break;
        }
        

            let momsPris = x*moms
            alert(`Priset blir ${momsPris} kr`)
            console.log(momsPris)
    }
}


moms()
