// Two possible approaches
// Find a mathematical expression to express fibonacci numbers, this will bring time complexity to O(1)
// Sum all numbers up to the nth and return the sum

// Takes an input of n, the nth term in the sequence
// Assume starting two number of [1,1] are provided
// Calculates all fibonacci numbers up until the nth
// Store fibonacci numbers in array
// Returns the nth fibonnaci number

function fibonacci(n){
    const fibArr = [1,1];

    // Loop n-2 times since the first two number of the sequence are provided
    // Start from the 3rd term

    for(let i=2; i<n; i++){
        let nthTerm = fibArr[i-1] + fibArr[i-2];
        fibArr.push(nthTerm);
    }

    return fibArr[n-1]
}

// This function scales linearly with n and so has a time complexity of O(n)

console.log(fibonacci(10))