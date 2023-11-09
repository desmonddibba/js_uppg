// Skriv en funktion som testar om ett inläst tal är jämnt delbart med 3 men inte med 30. I så fall ska talet divideras med 3.


function inlast(x){

    if(x%3==0 && x%30 !== 0){
        x /=3
        console.log(x)
        return x;
    }else if(x%3==0 && x%30 === 0){

        console.log("Error 1")
    }else{

        console.log('error 2')
    }


}




inlast(9);
inlast(30);
inlast(900);
inlast(39);
inlast(-39);
inlast(100);
inlast(500);
inlast(433);