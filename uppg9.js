// Skriv en funktion där en cirkels radie läses in. Cirkelns diameter, omkrets och area skall beräknas och skrivas ut. (pi = 3.14).



function cirkel(r){
    const diameter = r*2
    const omkrets = diameter*3.14
    const area = 3.14 * (r*r)

    console.log("Arean är",area,"Omkresen är",omkrets,"diametern är",diameter);
}


cirkel(5);