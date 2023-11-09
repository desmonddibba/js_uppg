// Skriv en funktion som läser in antal timmar, beräknar och skriver ut hur mycket det blir omvandlat till minuter resp sekunder.


function tidOmvandlare(h){
    let a = h*60;
    let b = a*60;

    console.log(h, "timmar är", a,"minuter, eller", b,"sekunder.");
};


tidOmvandlare(3);