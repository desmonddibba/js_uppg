// Skriv en funktion som läser in en temperatur. Om temperaturen är mellan 18 och 25 grader ska meddelandet “Lagom temp“ skrivas ut. Om det är varmare än 25 grader ska “För varmt“ skrivas ut och om det är kallare än 18 grader ska “För kallt“ skrivas ut.



function temperatur(x){

    if(x>25){
        console.log("För varmt!")
    }else if(x<18){
        console.log("För kallt!")   
    }else{
        console.log("Lagom temp")

    }

}



temperatur(25);