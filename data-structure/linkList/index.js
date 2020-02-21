class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkList {
    size = 0;
    head = null;
    add = (element) => {
        const node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    remove = (element) => {
        if (this.head === null) {
            return false;
        }
        let currentNode = this.head;
        let prevNode = null;
        if (currentNode.element == element) {
            this.head = currentNode.next;
        } else {
            while(currentNode.element !== element) {
                if (currentNode.next === null) {
                    return false;
                }
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
            const nextNode = currentNode.next;
            prevNode.next = nextNode;
            this.size--;
        }
        return false;
    }

}

const linkList = new LinkList();
linkList.add(3);
console.log(linkList.head)
linkList.add(4);
linkList.add(2);
linkList.add(1);
console.log(linkList.head)
linkList.remove(3);
console.log(linkList.head)


