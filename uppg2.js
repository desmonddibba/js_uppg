//En försäljare har delvis prestationslön. Han får 8000 kr per månad i grundlön och 9% av försäljningssumman. Skriv en funktion som beräknar lönesumman under en period. Försäljningssumman ska läsas in.

function toltalLon(forsaljningssumma){
        let a = forsaljningssumma*0.09;
        let b = a + 8000;
        return b;
    
}


console.log(toltalLon(100));