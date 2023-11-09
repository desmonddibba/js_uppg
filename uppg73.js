// En array med 50 inlästa tal finns. Beräkna och skriv ut summan och medelvärdet av de 50 talen.


function sumMedel(array){
    let result =0;
    let avg = 0;
    for(let number of array){
        result +=number 
    }
    avg = result/50
     const total = {
        average: avg,
        result: result
     }
    return total
}