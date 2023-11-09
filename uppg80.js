// Skriv en funktion som läser in siffrorna i ett bråk till en array med två platser. funktionen ska se till att bråket förkortas så långt som möjligt.
// Ex: Om siffrorna i bråket är 6 och 12 ska det lagras i arrayen som 1 och 2.
// Tips: Ta reda på SGD (största gemensamma divisor). I exemplet är SGD 6.



// Example:
// Let's find the GCD of 56 and 48.

// gcd(56, 48) -> b is not zero, so it calls gcd(48, 56 % 48) which is gcd(48, 8).
// gcd(48, 8) -> b is not zero, so it calls gcd(8, 48 % 8) which is gcd(8, 0).
// gcd(8, 0) -> b is zero, so it returns 8.

function SGN(a,b){
    if(b===0){return a;}
    else{
        return SGN(b, a%b); 
    }
}




function division(){
    let t = Number(prompt('Ange täljare'))
    let n = Number(prompt('Ange nämnare'))
    if(n < 0){n = Math.abs(n)};
 
    if(n!== 0){
        let divisor = SGN(t,n)
        t = t/divisor; 
        n = n/divisor;
        const array = [t,n]
        return array;
    }
}
