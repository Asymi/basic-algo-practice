function mergeSort(arr) {
    
    if(arr.length < 2){
        return arr
    }

    if(arr.length === 2){
        return arr[0] > arr[1] ? [arr[1], arr[0]] : arr
    }

    const mid = Math.floor(arr.length/2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)

    const leftSortedArray = mergeSort(leftArr)
    const rightSortedArray = mergeSort(rightArr)
    const mergedArr = []

    let leftArrIndex = 0;
    let rightArrIndex = 0;

    while (
        leftArrIndex < leftSortedArray.length ||
        rightArrIndex < rightSortedArray.length
      ) {
        if (
            // The first or statement is executed when the left array has run out of elements, it will always be shorter than the right array
          leftArrIndex >= leftSortedArray.length ||
          leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]
        ) {
          mergedArr.push(rightSortedArray[rightArrIndex]);
          rightArrIndex++;
        } else {
          mergedArr.push(leftSortedArray[leftArrIndex]);
          leftArrIndex++;
        }
      }

    return mergedArr
}

console.log(mergeSort([10,-3,4,15,18,-10,55]))