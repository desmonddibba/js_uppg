// En anställd som har timlön får, när arbetstiden överstiger 40 tim en vecka, övertidsbetalning för tiden utöver 40 tim med 1½ tim. Skriv en funktion som läser in en anställds timlön och en veckas arbetstid. Den totala veckolönen ska beräknas och skrivas ut.





function lon(timlön, arbetstid)

{
    if(arbetstid>40){
        let obtid = arbetstid-40
        let oblön = (obtid*1.5)*timlön
        let baslön = 40*timlön
        
        let result= baslön + oblön;



        console.log(`Den totala lönen är ${result}, varav ${oblön} är ob-tilägg`)
    }


};


lon(100,42);