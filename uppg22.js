//Skriv en funktion som testar om ett tal är 0-9 men inte 5. Skriv ut lämplig text.
function inteFem(x){
    if(x>=0 && x <=9 && x !==5){
        console.log("ok");
    }else{
        console.log("nej")
    }
};


inteFem(6);