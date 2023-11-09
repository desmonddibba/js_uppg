// Skriv en funktion som läser in 10 heltal. Kontrollera att talen ligger i området 5000 till 10000. Om alla talen är inom intervallet ska “RÄTT“ skrivas ut.
// OBS! 10 tal ska läsas in, även om något tal är utanför det tillåtna intervallet.

function tioHeltal(){
    const talLista =[];
    let score = 0;
    
        for(let i=0; i<10; i++){
        const inputNumber = Number(prompt(`Ange tal nr ${i+1}`))
            
            if(!isNaN(inputNumber)){
                if(inputNumber>=5000 && inputNumber<=10000){
                score++;}
            else{
                alert('Inte ett giltigt tal!')
                    i--;
                }
            }   
        }
    if(score===10){
        alert('RÄTT!')
    }else{
        alert('FEL!')
    }

}