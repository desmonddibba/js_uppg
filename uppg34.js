// Skriv en funktion som läser in och skriver ut ett tecken i taget tills en * skrivs in.

function vissaTal(x){
        for(let i=0; i<x.length; i++){
            if(x[i] == '*'){break;}
            console.log(x[i])
        }};
vissaTal('fasf*');