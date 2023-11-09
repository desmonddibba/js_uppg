// Skriv en funktion där indata består av en följd av positiva heltal. Avbryt inläsningen med 0. Beräkna antalet gånger två intilliggande tal är lika.

function likaTal(){
const talLista = [];
let inputTal;
let i=0;
while(true){  // läs in tal
    inputTal = Number(prompt(`Ange tal ${i+1}`))
    if(!isNaN(inputTal) && inputTal>0)
    {
        talLista.push(inputTal)
        i++;
    }else if(inputTal===0)
    {  
        break;
    }
    else if(isNaN(inputTal)){
        alert('Inte ett giltigt tal, prova igen.')
        if(i>i){i--;}
        continue;
    }
    
}


let antal=0;
for(let i=0; i<talLista.length-1; i++){

    if(talLista[i] === talLista[i+1]){
        antal++;
    }

}

console.log(antal)
}


