// Läs in ett antal tal. 9999 ska vara stoppvärde. Beräkna och skriv ut medelvärdet av de inlästa talen. Tänk på vad som händer om det första inlästa talet är stoppvärdet.


function antalTal(){
    const talLista = [];
    let talInput;
    let count = 0;
    let result = 0;

    while(true){
        talInput = prompt(`Ange tal ${count+1} (9999 för att avsluta)`)
        talInput = Number(talInput)
        talLista.push(talInput)
        result +=result + talInput;
        count++;
        if(talInput===9999){
            break;
        }

    }

result = result/count;

alert(`Medelvärdet av dina tal är ${result}`)


}