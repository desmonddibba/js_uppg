//Läs in ett heltal motsvarande svenska kronor och skriv ut motsvarande värde i pund respektive dollar. Antag att kursen är : 1 dollar = 6 kr, 1 pund = 10 kr.



function valutaOmvandlare(kronor){
    let dollar = kronor*6
    let pund = kronor*10
    console.log(dollar, "$", pund,"£")


};


valutaOmvandlare(600);