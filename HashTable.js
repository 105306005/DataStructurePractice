class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    //use underscore for private property for common standard
    //build a simple hash function
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    //O(1)
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    //O(1), if collision O(n)
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    if (!this.data.length) {
      return undefined;
    }
    //iterate through all the key
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

//try out the array
const myHashTable = new HashTable(50);
myHashTable.set("grapes", 1000000);
myHashTable.set("apples", 500);
myHashTable.set("oranges", 30);
console.log(myHashTable.get("apples"));
console.log(myHashTable.keys());
