# Search

## Linear Search
* Loop through `Array(n)` and find `x`
* Time complexity `O(n)`

![alt Linear Search](Linear-Search.png)

## Binary Search
* Only works if the `Array(n)` is sorted
* Time complexity `O(Log n)`

![alt Binary Search](Binary-Search.png)

### Example
1. Array `[2,5,7,12,20,31,45]` and lookup `x`;
1. Compare `x` with the middle element => `12`;
2. If `x === 12` matches with middle element, return value;
3. Else If `x` is greater than the mid element => `12`, then `x` can only lie in right half subarray, use right half subarray and repeat back step 2;
4. Else (`x` is smaller) use left half subarray and repeat back step 2;

```javascript
const list = [2,5,7,12,20,31,45];
const lookUp = 7;

// recursive
function binarySearch(start, end, list, lookUp) {
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



// iterative method can be found in the js file

const result = binarySearchIterate(0, list.length - 1, list, lookUp);
console.log(result); // 2
```

## Jump Search
* Improvement of linear search, instead check one by one, you can check with given size
* The time complexity of Jump Search is between Linear Search and Binary Search.


### Example

1. Given array: `(0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610)` and look for value `55`;
2. Jump from index 0 to index 4;
3. Jump from index 4 to index 8;
4. Jump from index 8 to index 12;
5. Since the element at index 12 => `144` is greater than `55` we will jump back a step to come to index 8 => `21`.
6. Perform linear search from index 8 to get the element `55`.

```javascript
const list = [2,5,7,12,20,31,45];
const lookUp = 45;

function jumpSearch(list, size, lookUp, jumpSize) {
    let currentSpot = 0;
    // if step go over the size
    while(list[Math.min(size, currentSpot)] < lookUp) {
        currentSpot = Math.min(size, currentSpot + jumpSize);
        console.log(currentSpot); // jump 2, 4, 6
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
console.log(jumpResult); //6
```