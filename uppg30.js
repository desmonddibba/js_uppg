//Läs in ett tal. Skriv ut om talet är mindre än 10, mindre än 100 eller större än 100.


function hundraTalet(x){

    if(x<10 && x<100){

        console.log('Talet är mindre än både 100 och 100')

    }else if(x<100 && x>10){

        console.log('Talet är större än 10 och mindre än 100')
    }else if(x>100){

        console.log('Talet är större än 100')
    }


}


hundraTalet(99);