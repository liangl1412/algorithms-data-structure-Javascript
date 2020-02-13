const list = [2,5,7,12,20,31,45];
const lookUp = 45;

// recursive
function binarySearchRec(start, end, list, lookUp) {
    if (end >= start) {
        const mid = Math.floor((start + end) / 2);
        const midVal = list[mid];
        if (midVal === lookUp) {
            return mid;
        }
        // look to the right
        if (lookUp > midVal ) {
            return binarySearch(mid + 1, end, list, lookUp)
            
        }
        // look to the left
        return binarySearch(start, mid - 1, list, lookUp)
    }
    else {
        return -1;
    }
}

// iterative
function binarySearchIterate(start, end, list, lookUp) {
    while(end >= start) {
        const mid = Math.floor((start + end) / 2);
        const midVal = list[mid];
        if (midVal === lookUp) {
            return mid;
        }
        if (lookUp > midVal) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

const result = binarySearchIterate(0, list.length - 1, list, lookUp);
console.log(result);


function jumpSearch(list, size, lookUp, jumpSize) {
    let currentSpot = 0;
    // if step go over the size
    while(list[Math.min(size, currentSpot)] < lookUp) {
        currentSpot = Math.min(size, currentSpot + jumpSize);
        console.log(currentSpot);
    }

    // linear traverse back search 
    for (let i = currentSpot; i > currentSpot - jumpSize; i-- ) {
        if(list[i] === lookUp) {
            return i;
        }
    }
    return -1;
}

const jumpResult = jumpSearch(list, list.length - 1, lookUp, 2);
console.log(jumpResult);


