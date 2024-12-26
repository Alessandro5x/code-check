function booo(n){
    for(let i = 0; i< n.length; i++){
        console.log('boooo!');
    }
}
booo([1,2,3,4,5]) // O(1)

function arrayOfHiNTimes(n){
    let hiArray = [];
    for(let i = 0; i < n; i++){
        hiArray[i] = 'hi';
    }
    console.log(hiArray)
    return hiArray;
}

arrayOfHiNTimes(6); // O(n)