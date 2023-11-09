// Skriv en funktion som beräknar vad du ska betala för en tank bensin. Indata är antal liter, pris per liter och eventuell rabatt i procent. Utdata är priset som du ska betala


function bensin(a,b,c){

    // a = antal liter
    // b = pris per liter
    // c = rabatter
    const rabatt = (a*b)*(c/100)
    const result = (a*b) - rabatt
    console.log(result)
};



bensin(20, 10, 20);