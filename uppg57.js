// Inmatningen ska avslutas med 0. funktionen ska beräkna och visa bensinförbrukning per mil för varje tankning. När data för samtliga tanktillfällen är inlästa ska genomsnittlig bensinförbrukning per mil skrivas ut.

function antalTankningar(){
let antal_mil;
let antal_liter;
let bensin_perMil = [];
let i = 0;
let total = 0;
let loop = true;
    
        while(loop){
     
        antal_liter = prompt('Ange bensin tankat: (1/2)')
        antal_mil = prompt('Ange körda mil: (2/2)')
        
        antal_liter = Number(antal_liter)
        antal_mil = Number(antal_mil)

        if(antal_liter===0){
            loop=false;
        }else if(antal_mil===0){
            loop=false;
        }

        bensin_perMil[i] = antal_liter/antal_mil
        total += bensin_perMil[i]

        i++;
    }




let result = total/i;

console.log(result)



}