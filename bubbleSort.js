function bubbleSort(arr) {
    let temp;

    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[j] > arr[i]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr
}

const testArr = [1,3,22,-4,17,92,54,8]
console.log(bubbleSort(testArr))

// This has a time complexity of O(n^2)