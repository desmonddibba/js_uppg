// Skriv en funktion som läser in siffrorna i ett bråk (täljare och nämnare) till en array med två platser. Eftersom det är otillåtet att ha 0 i nämnaren ska ett felmeddelande skrivas ut om så är fallet.
function division(){
let t = Number(prompt('Ange täljare'))
let n = Number(prompt('Ange nämnare'))
if(n !== 0){
const array = [t,n]
return array;
}
}