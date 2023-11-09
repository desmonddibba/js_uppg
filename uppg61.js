function sortedNumbers(){
const talLista =[];
let userInput ="";

    while(true)
    { 
    userInput = prompt('Ange ett tal. (Ange 0 för att avsluta)')
    userInput = Number(userInput)
        if(userInput === 0){
            break;
        }
        if(!isNaN(userInput)){
            talLista.push(userInput)
        }else{
            alert('Inte ett giltigt tal!')
            continue;
        }
    }


const felTal = [];
let talet;

    for(let i =0; i<talLista.length; i++){
        if(talLista[i]<talLista[i+1]){
            //do nothing
        }else{
            felTal.push(`Tal nr ${i+1} är fel. Dess värde är ${talLista[i]}`)
        }
    }

for(tal of felTal){
    console.log(tal)
}
}



