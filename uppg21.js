// Skriv en funktion som testar om ett tal är mindre än -10 eller större än +10. I så fall ska ett lämpligt meddelande ges.


function testaTal(x){

    if(x<-10 || x>10){

        console.log("Talet ligger utanför")
    }else{

        console.log("Talet ligger innanför")
    }

};


testaTal(-12);