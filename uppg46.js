
function salary(){
    const million = 1000000
    let salary = 0.01
    let i = 0;

    while(true){
        console.log(salary)
        
        salary = salary+salary;
        
        i++;
        
        if(salary>= million){
            i++; // lägg till en extra iteration, för att visa hur många dagar som krävs för att komma ÖVER en miljon
            break;
        }

    }

console.log(i)

}




salary();