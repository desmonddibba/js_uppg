// En array med 50 inlästa tal finns. Ta reda på och skriv ut hur många tal som är positiva.

function countPos(array){
let count=0;
    for(let tal of array){
        if(tal>0){
            count++;}}
return count;
}