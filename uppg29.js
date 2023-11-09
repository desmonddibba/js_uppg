function tag(departureTime, departureDuration){
// initiera variabler depart(hour,minutes) & duration(hours,minutes)           
// dag = 0, ökar med 1 för var 24h                                    
    let dag = 0;
    let departHours = Math.floor(departureTime/100) //flytta decimal 2 till v
    let departMinutes = departureTime%100 // plucka ut resten

    let durationHours = Math.floor(departureDuration/100)
    let durationMinutes = departureDuration%100

    let arrivalHour  = departHours + durationHours
    let arrivalMinute = departMinutes + durationMinutes


    //minute overflow
    while(arrivalMinute >=60||arrivalHour >=24){
    if(arrivalMinute>=60){
        arrivalMinute -=60
        arrivalHour +=1
    }
    
    //hours overflow
    if(arrivalHour>=24){
        arrivalHour -= 24
        dag ++; 
    }
    }

console.log(`Du är framme: Dag ${dag}, kl ${arrivalHour}:${arrivalMinute}`) 

}

tag(640, 550);