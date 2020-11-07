// Input of an integer n
// Check if the integer is divisible by only 1 and intself
// Equivalent to checking it is not divisable by anything except 1 and itself

// ASSUMPTION, we say that n is divisible by m if n/m is an integer
// ASSUMPTION, we do not exclude negative numbers, however since the numberline is symmetric, we only have to consider divisibility by positive numbers

// APPROACH
// Factor pairs of a number are symmetric about the {sqrt(n), sqrt(n)} e.g. the factor pairs of 36 are
// {1,36}, {2,18}, {3,12}, {4,9}, {6,6}, {9,4}, {12,3}, {18,2}, {36,1} so we need only consider factor pairs up until {sqrt(n), sqrt(n)}
// We must verify that no such factor pairs from 2 up to sqrt(n) exist fot the number to be prime.
// Every number can be decomposed in terms of prime numbers.
// If we check that there are no factor pairs of the form {m,x} where m is a prime number and x can be prime or composite, then n is prime

// STEP 1: Generate an array of prime number from 2 to sqrt(n), this is because we don't know how large n is and so need to dynamically calculate the primes
// STEP 2: Check that n is not divisible by any of the prime numbers generated above, a function to check for integers is required

function generatePrimes(num){
    const primeNumArr = []

    // Edge case
    if(num === 2){
        primeNumArr.push(2)
        return primeNumArr
    }

    // Loop over all numbers less than num (starting from 2) and check if they are prime, then add them to the array of prime numbers
    for(let i=2; i<num; i++){
        // Take advantage of JS hoisting
        if(isPrime(i)){
            primeNumArr.push(i)
        }
    }

    // Return array of prime numbers up to sqrt(n)
    return primeNumArr
}

function isPrime(num){
    //const primeNumArr = generatePrimes(num)

    // If for any prime number k in primeNumArr, num/k is an integer, num is not a prime number
    for(let i=2; i<Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }

    return true
    // Return true or false
}

console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(5))
console.log(isPrime(6))
console.log(isPrime(7))
console.log(isPrime(8))
console.log(isPrime(9))
console.log(isPrime(10))
console.log(isPrime(11))
console.log(isPrime(50))

// This is a very bad solution :)