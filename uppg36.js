// Skriv en funktion som räknar ut hur mycket man har på banken under vart och ett av de följande 10 åren om man sätter in 1000 kr. Räntan ska läsas in och är densamma för alla åren.


function ranta(y){
let rent = 1.10   // räntesats 10%
let startSumma = 1000  // start balance
let bankSumma = startSumma; //current balance
let bankHistory =[];  // initera en lista där jag ska spara resultat

for(let i=0; i<10; i++){
        bankSumma *=rent
        bankHistory.push(bankSumma); // lägg till "detta årets värde" längst bak i listan.
    }
    // Logiken här att man ska kunna ´skriva år "1" för första värdet "[0]". 
console.log(`År ${y}: ${Math.round(bankHistory[y-1])} kr`)
};

ranta(7);



