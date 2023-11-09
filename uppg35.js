//  Skriv en funktion som beräknar och skriver ut kvadraterna för talen 1 till 9.
function kvadrat(){
let tal = 1;
    for(let i=0; i<=8; i++){
        console.log(Math.pow(tal, 2))
        tal ++;
    }
}
kvadrat();