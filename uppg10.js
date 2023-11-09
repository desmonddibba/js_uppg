// Sambandet mellan Fahrenheit och Celsius grader ges av formeln F=9C / 5 + 32. Konstruera en funktion där en temperatur i Fahrenheit läses in och motsvarande temperatur i Celsius skrivs ut.


function far(f) {
    const result = (5/9) * (f-32) 
    console.log(result)
}



far(78);