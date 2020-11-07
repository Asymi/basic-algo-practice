function quickSort(arr){
    // The argument bool will be used o keep track of whether the sub array is greater or smaller than the midpoint
    if(arr.length <= 1){
        return arr
    }

    const pivot = arr[0]
    const smallArr = []
    const midArr = []
    const largeArr = []
    
    for (let i=0; i<arr.length; i++){
        if (arr[i] === pivot){
            midArr.push(pivot)
         } else if (arr[i] > pivot){
            largeArr.push(arr[i])
        } else if (arr[i] < pivot){
            smallArr.push(arr[i])
        }
    }

    // This is the step I was missing, need to access data from deeper recursions at the highest level
    const sortedLarger = quickSort(largeArr)
    const sortedSmaller = quickSort(smallArr)

    return [...sortedSmaller, ...midArr, ...sortedLarger]
}

const testArr = [3,22,1,8,7,44,90]
console.log(quickSort(testArr))