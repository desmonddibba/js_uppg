// En firma erbjuder sina kunder 10 procents rabatt om man vid ett inköpstillfälle handlar för minst 1000 kr. Antag för enkelhetens skull att man bara handlar varor av ett visst slag. Skriv en funktion som beräknar vad en kund ska betala. Indata till funktionen ska vara antalet köpta enheter och priset per enhet.



function rabatt(antal, pris){

    x = antal * pris;

    if(x>=1000){
        x*= 0.9 //10% rabatt
    }else if(x<1000){
        // do nothing
    }
console.log(x)
return x;
};


rabatt(500);