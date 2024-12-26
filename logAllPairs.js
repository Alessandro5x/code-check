function logAllPair(input){
    for(let i = 0; i < input.length; i++){
        for(let j = 1; j < input.length; j++){
            if(input[j] == parseInt(input[i]) + 1){
                console.log("pairs ", input[i], input[j])
            }
        }
    }
}

logAllPair(['1','2','4'])