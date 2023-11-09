// En array med 50 inlästa tal finns. Leta upp det största och det minsta talet i arrayen och skriv ut dem.

function bigSmall(array){
    
    let smallest = array.sort((a,b) => a- b)[0]
    let biggest = array.sort((a,b) => b- a)[0]

    const result =  {
        'Störst tal': biggest,
        'Minsta talet': smallest
    }
return result
}
