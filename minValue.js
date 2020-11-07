function minValue(arr){
    let minValue = arr[0]

    for(let i=1; i<arr.length; i++){
        if(arr[i] < minValue){
            minValue = arr[i]
        }
    }

    return minValue
}

console.log(minValue([54,17,24,23,16,15,44,12,5,10,10]))
// Time complexity of O(arr.length) since the function loops through all elements in the array and evaluates a for loop for each