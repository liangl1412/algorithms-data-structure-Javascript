## Insert
Key -> hash function -> hash map index -> value
### Collision
* when different keys generate same hash map index, use link list to store them in same index, then iterate the list
* to avoid collision, bigger hash map can reduce it, for example, if the data set that we have contain 10 element, we can create a 15 length array
* better hash function to avoid collision


## Reading
Same as insert, key -> hash function -> return hash map index -> get the value

## Example
```javascript
function hashToString(key, tableSize) {
    let index = 17
    for (i = 0; i < key.length; i++) {
      index = index * key.charCodeAt(i);
    }
    index = index % tableSize;
    return index;
}

class HashTable {
    table = new Array(11);
    setItem = (key, value) => {
        const index = hashToString(key, this.table.length);
        let firstLvl = this.table[index];
        if (firstLvl === undefined) {
            firstLvl = [[key, value]];
        } else {
            let inserted = false;
            for (i = 0; i < firstLvl.length; i++) {
                // override the value if key exist
                if (firstLvl[i][0] === key) {
                    firstLvl[i][1] = value;
                    inserted = true;
                    break;
                }
            }
            if (!inserted) {
                firstLvl.push([key, value]);
            }
        }
    }
    getItem = (key) => {
        const index = hashToString(key, this.table.length);
        const firstLvl = this.table[index];
        if (firstLvl === undefined) return;
        for (i = 0; i < firstLvl.length; i++) {
            if (firstLvl[i][0] === key) {
                return firstLvl[i][1]
            }
        }
    }
}

const hs = new HashTable();
hs.setItem('David', 'dog');
hs.setItem('Bob', 'cat');
hs.setItem('Billy', 'sheep');
hs.setItem('billy', 'snake');
hs.setItem('Amy', 'cow');
console.log(hs.table); // [ [ [ 'Bob', 'cat' ], [ 'Billy', 'sheep' ], [ 'billy', 'snake' ], [ 'Amy', 'cow' ] ], <2 empty items>, [ [ 'David', 'dog' ] ], <7 empty items> ]
console.log(hs.getItem('Bob')); // cat
