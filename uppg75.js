// En array med 50 inlästa tal finns. Beräkna och skriv ut summan av alla positiva tal och summan av alla negativa tal i arrayen.
function addPosNeg(array){
let posTotal=0;
let negTotal=0;
    for(let number of array){
        if(number>0){
            posTotal+=number
        }else if(number<0){
            negTotal+=number
        }   
    }
    const result = {
        Positive: posTotal,
        Negative: negTotal
    }
return result;
}