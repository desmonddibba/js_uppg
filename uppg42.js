// Skriv en funktion som läser in och adderar tjugo heltal. Summan ska skrivas ut.
// kör i webbläsare


function tjugoHeltal(){
    const nummer = [];
    let result = 0;

for(let i=0; i<20; i++){
    let num  = prompt(`Skriv tal nr ${i+1}:`)
    num = Number(num);
    nummer.push(num);
    result = result + nummer[i];
}

console.log(result)
alert(result)}

tjugoHeltal();