function binarySearch(arr, el, offset){
    const startIndex = 0
    const endIndex = arr.length
    const midIndex = startIndex + Math.floor((endIndex - startIndex)/2)

    if (arr[midIndex] === el){
        return midIndex + offset
    }

    if (arr[midIndex] > el){
        const newArr = arr.slice(startIndex, midIndex)
        return binarySearch(newArr, el, offset)
    } else {
        offset = offset + midIndex + 1;
        const newArr = arr.slice(midIndex + 1, endIndex + 1)
        return binarySearch(newArr, el, offset)
    }
}

const testArr = [1,2,3,4,5,6,7]
console.log(binarySearch(testArr, 6, 0))