// Skriv en funktion som läser in ett tal. Om talet är mellan 0 och 9 ska kvadraten på talet skrivas ut. Annars ska lämpligt felmeddelande ges.


function kvadrat(x){

    if(x>=0 && x<=9){

        const result = Math.pow(x,2)
        console.log(result)
        return result;
    }else if(x>9){

        console.log("Talet är för stort!")
    }else if (x<0){

        console.log("Talet är för lågt!")
    }


};



kvadrat(10);