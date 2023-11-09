/* En kommun har gjort följande prognos för befolkningsutvecklingen de närmaste åren:
Vid början av 2016 hade kommunen 26000 invånare.
Antalet födda och avlidna under ett år uppskattas var 0.7% resp 0.6% av befolkningen vid årets början.
Antalet inflyttade och antalet utflyttade uppskattas till 300 resp 325 varje år.
Skriv en funktion som beräknar kommunens uppskattade invånarantal i början av ett visst år. Vilket år det gäller ska läsas in som indata till funktionen.
*/



function befolkningsMangd(antal_ar){
    let startar = 2016
    let befolkning = 26000;
    let artal = startar;
    for(let i=0; i< antal_ar; i++){

        let antal_fodda = befolkning * 0.007; // 0.7% born
        let antal_doda = befolkning * 0.006; // 0.6% died
        let antal_inflyttade = 300; // 300 moved in
        let antal_utflyttade = 325; // 325 moved out

        // Update the population
        befolkning = befolkning + antal_fodda - antal_doda + antal_inflyttade - antal_utflyttade;

             // Update the year

             console.log(`Year ${artal}: ${Math.round(befolkning)} people`);
             artal++;

    
    }


    console.log(befolkning)



}

befolkningsMangd(10);