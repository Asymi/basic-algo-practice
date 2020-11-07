function isEven(num){
    if (num % 2 === 0){
        return true
    } else {
        return false
    }
}

console.log(isEven(100))
console.log(isEven(101))

// Constant time complexity O(1)