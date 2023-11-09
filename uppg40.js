// Konstruera en funktion som beräknar och skriver ut svaret för funktionen:Funktionen ska skriva ut alla värden när x är ett heltal mellan -10 och 10. Dvs x antar värdet -10 och ökar med ett till värdet blir //10.


function raknar(){

for(i=-10; i<=10; i++){
let x=i 
    x = 3*(Math.pow(x,3)) - 5*(Math.pow(x, 2)) + 2*x -20
  
    console.log(i, x)
}}



raknar();