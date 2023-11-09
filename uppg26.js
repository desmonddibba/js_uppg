// Skriv en funktion som läser in två tal och skriver ut det största talet följt av orden “är störst “. Om talen är lika ska “Talen är lika“ skrivas ut.



function tvaTal(a,b){


    if(a===b){

        console.log("Talen är lika")
    }else{

         console.log(Math.max(a,b),"är störst")
    }


};


tvaTal(20,25);