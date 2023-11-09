// En array med 50 inlästa tal finns. Addera talet 2 till talen på indexplats 0, 2, 4,… i arrayen.

function addTwo(array){
    for(let i=0; i<array.length; i+=2){
        array[i] += 2
    }
return array;
}