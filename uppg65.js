// Indata består av 100 positiva tal. Skriv en funktion för beräkning av skillnaden mellan det största talet och det näst största talet.

function hundraTal(){
    let userInput;
    const numArr = []
        for(let i = 0; i<100; i++){
            userInput = Number(prompt(`Ange tal nr ${i+1} av 100`))
            numArr.push(userInput)}    
    
    numArr.sort((a,b) => b - a)
    let big = numArr[0]
    let nextbig = numArr[1]
    console.log(big-nextbig)
    }
    
    