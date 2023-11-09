// Skriv en funktion som läser in två tal och dividerar det första talet med det andra talet. Om det andra talet (nämnaren) är 0 ska ett felmeddelande ges, annars ska kvoten skrivas ut.


function errorTvaTal(a,b){
    if(b !== 0){
        const result = a/b;
        console.log(result)
        return result;
    }else{
        console.log("Error")
    }
};



errorTvaTal(1,0);