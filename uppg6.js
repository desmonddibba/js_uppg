// Skriv en funktion som beräknar funktionen ax3 + 7 och skriver ut resultatet. Variablerna a och x ska läsas in.


function raknare(x,a){
    const resultat = (a * Math.pow(x,3)) + 7
    console.log(resultat);
}


raknare(2, 4);