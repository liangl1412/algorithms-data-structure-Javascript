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
        if (this.table[index] === undefined) {
            this.table[index] = [[key, value]];
        } else {
            let inserted = false;
            for (i = 0; i < this.table[index].length; i++) {
                // override the value if key exist
                if (this.table[index][i][0] === key) {
                    this.table[index][i][1] = value;
                    inserted = true;
                    break;
                }
            }
            if (!inserted) {
                this.table[index].push([key, value]);
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
console.log(hs.table);
console.log(hs.getItem('Bob'));
