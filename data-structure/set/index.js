class MySet {
    collection = [];
    size = this.collection.length;
    has = (value) => {
        return this.collection.indexOf(value) !== -1;
    }
    value = () => {
        return this.collection;
    }
    add = (value) => {
        if (!this.has(value)) {
            this.collection.push(value);
            return true;
        }
        return false;
    }
    remove = (value) => {
        const index = this.collection.indexOf(value);
        if (this.has(value)) {
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    }
    union = (set) => {
        const unionSet = new MySet();
        const firstSet = this.value();
        const secondSet = set.value();

        firstSet.forEach(element => {
            unionSet.add(element);
        });

        secondSet.forEach(element => {
            unionSet.add(element);
        });

        return unionSet;
    }
    intersection = (set) => {
        const intersectionSet = new MySet();
        const firstSet = this.value();
        firstSet.forEach(element => {
            if (set.has(element)) {
                intersectionSet.add(element);
            }
        })
        return intersectionSet;
    }
    difference = (set) => {
        const differenceSet = new MySet();
        const firstSet = this.value();
        firstSet.forEach(element => {
            if (!set.has(element)) {
                differenceSet.add(element);
            }
        })
        return differenceSet;
    }
    subSet = (set) => {
        const subSet = new MySet();
        const firstSet = this.value();
        return firstSet.every(element => {
            return set.has(element)
        })
    }
}

const mySet = new MySet();
const secondSet = new MySet();
mySet.add(1);
mySet.add(5);
mySet.add(7);
secondSet.add(5);
console.log(mySet.value())
console.log(mySet.intersection(secondSet).value());
console.log(mySet.union(secondSet).value());
console.log(mySet.difference(secondSet).value());
console.log(secondSet.subSet(mySet));