// Beräkna och skriv ut produkten av de ojämna heltalen från 1 till 15. (D v s 135…15)

function odd(){
    let result = 1;;
    for(let i=1; i<=15; i+=2){
        result = i * result
        console.log(result)            
    }
    }


odd();