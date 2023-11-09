// kriv en funktion som läser in en följd av positiva tal som ska vara sorterade i växande ordning. 
// Talföljdens slut anges med en nolla. Om det finns fel i sorterings-ordningen ska meddelandet “Fel sorteringsordning“ skrivas ut.


function checkIfSorted(){
const numArr=[];
let userInput;
let i=0;

    while(true){
        userInput = Number(prompt(`Ange tal nr ${i+1}.  Skriv 0 för att avsluta.`))
        if(!isNaN(userInput)){
            if(userInput!==0){
              numArr.push(userInput);}
              else if(userInput<0){
                alert('Fel. Endast positiva tal.')
                if(i>0){i--;}
              }else if(userInput===0){
                break;
              }
        }else{alert('Felaktig inmatning.')}
    i++;
    }

    for(let i=0; i<numArr.length; i++){

        if(numArr[i]>numArr[i+1]){
            alert('Fel sorteringsordning')
            console.log(numArr)
            break;
        }else{
            alert('Talen är sorterade i ordning!')
            console.log(numArr)
            break
        }

    }
}   