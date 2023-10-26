class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;

    // memoizing using a map to store already computed keys and values;
    this.keyValues = new Map();
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Your code here
    let index = this.hashMod(key);
    const keyValuePair = new KeyValuePair(key, value);
    if (this.keyValues.has(key)) {
      let current = this.data[index];
      while (current && !(key === current.key)) {
        current = current.next;
      }
      current.value = value;
    } else {
      keyValuePair.next = this.data[index];
      this.data[index] = keyValuePair;
      this.keyValues.set(key, value);
      this.count++;
    }
  }


  read(key) {
    // Your code here
    let index = this.hashMod(key);
    if (this.keyValues.has(key)) {
      return this.keyValues.get(key)
    }
    return undefined;
  }


  resize() {
    // Your code here
    let oldData = this.data;
    this.capacity = this.capacity * 2;
    this.count = 0;
    this.data = new Array(this.capacity).fill(null);
    this.keyValues.clear();
    // this.keyValues = new Map();
    for (let i = 0; i < oldData.length; i++) {
      let current = oldData[i];
      while (current) {
        this.insert(current.key, current.value);
        current = current.next
      }
    }
  }


  delete(key) {
    // Your code here
    let index = this.hashMod(key);
    if (this.keyValues.has(key)) {
      let current = this.data[index];
      let prev = null;
      while (current && !(key === current.key)) {
        prev = current;
        current = current.next;
      }
      if (prev) {
        prev.next = current.next
      } else {
        this.data[index] = current.next;
      }
      this.keyValues.delete(key);
      this.count--;
    } else {
      return 'Key not found';
    }
  }
}

let hashTable = new HashTable(2);
hashTable.insert("key1", "value1")
hashTable.insert("key2", "value2")
hashTable.insert("key3", "value3")
hashTable.insert("key5", "value5")
hashTable.insert("key9", "value9")
hashTable.insert("key10", "value10")
// console.log(hashTable.data);
// console.log(hashTable);
// hashTable.resize();
// hashTable.delete('key2');
// console.log(hashTable)

module.exports = HashTable;
