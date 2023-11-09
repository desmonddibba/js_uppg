// Skriv en funktion som läser in 10 korrekta tal. Korrekta tal är tal som ligger i området 5000 < n < 10000. Skriv ut summan samt medelvärdet för de korrekta talen.



function korrektTal(){
const talLista = [];
let result = 0;

    for(let i=0; i<10; i++){
        let tal = prompt(`Ange tal nr ${i+1} (Tal mellan 5000 och 10000)`)
        tal = Number(tal);
        if(tal>5000 && tal<10000){
            talLista.push(tal);
            result += talLista[i];
        }else{
            alert('Fel! Ange ett tal mellan 5000 och 10000!')
            i--;
        }
    }
    console.log(result)
    const average = result / 10;
    console.log(average)
}

