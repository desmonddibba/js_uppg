// En array med 50 inlästa tal finns. Ta reda på och skriv ut hur många tal som är större än det första talet.

function countHigher(array){
    const floor = array[0];
    let count = 0;
    for(let number of array){
        if(number > floor){
            count++;
        }
    }
return count;
}