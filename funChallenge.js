function funChallenge(input){
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    for(let i = 0; i < input.length; i++){ // O(n)
        let stranger = true; // O(n)
        a++; // O(n)
    }
    return a; // O(1)
}
// Big O (3 + 4n) --> O(n)
// Rule 1: Worst case
// Rule 2: Remove Constants 
// Rule 3: Different terms for inputs
// Rule 4: Drop Non Dominants
