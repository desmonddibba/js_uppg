// Skriv en funktion som läser in siffrorna i ett bråk till en array med två platser. Det är inte vanligt att man låter nämnaren vara negativ. Om så är fallet ska bråket ändras så att nämnaren blir positiv.
function division(){
    
    let t = Number(prompt('Ange täljare'))
    let n = Number(prompt('Ange nämnare'))
    if(n < 0){n = Math.abs(n)};
     
    if(n!== 0){
        const array = [t,n]
        return array;
    }
        
    

    }
