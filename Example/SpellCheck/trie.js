class Node {
    constructor(value = '') {
      this.value = value;
      this.children = [];
    }
}

class Trie {
    constructor() {
      this.root = new Node();
    }
  
    add(value, parent = this.root) {
      for (let i = 0, len = value.length; i < len; i++) {
        let node = parent.children.find(child => child.value[i] === value[i]);
  
        if (!node) {
          node = new Node(value.slice(0, i + 1));
          parent.children.push(node);
        }
  
        parent = node;
      }
  
      return parent;
    }
  
    find(value, parent = this.root) {
      for (let i = 0, len = value.length; i < len; i++) {
        parent = parent.children.find(child => child.value[i] === value[i]);
  
        if (!parent) return null;
      }
      return parent;
    }
}


const trie = new Trie();
trie.add('food');
trie.add('google');
