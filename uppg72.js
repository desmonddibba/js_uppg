// En array med 50 inlästa tal finns. Bestäm och skriv ut index för det sista negativa talet i arrayen. (Tips: Börja bakifrån i arrayen).
function lastNeg(array){
    for(let i= array.length-1; i>=0; i--){
        if(array[i]<0){
            return i;
        }
    }
}