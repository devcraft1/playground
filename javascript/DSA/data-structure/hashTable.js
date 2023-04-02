// A hash table is data structure that uses a an array and a hashing function to store and lookup data stored in key value pairs.
// It also implements a collision strategy to handle multiple hashes that may produce the same index. 
// In my example I will use seperate chaining to handle hash collisions, which means we can store multiple key value pairs in the same index using a map or an array, or a linked list. I will be using maps. 

class HashTable {
    constructor(size = 0) {
        this.size = size;
        this.hashMap = new Array(size)

        for (let i = 0; i < this.size; i++) {
            this.hashMap[i] = new Map();
        }
    }

    // Hash our key and return the outputed idx % our hashtable size
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    // Insert key value pair at hashed idx
    insert(key, value) {
        const idx = this.hash(key);
        this.hashMap[idx].set(key, value);
        return;
    }

    // Remove an item at hashed idx
    remove(key) {
        let idx = this.hash(key);
        let removedItem = this.hashMap[idx].get(key);

        if (removedItem) {
            // Remove the item and return it
            this.hashMap[idx].delete(key);
            return console.log('REMOVED: ' + removedItem);
        }
        return null;
    }

    // Retrieve a value at hashed idx
    retrieve(key) {
        let idx = this.hash(key);

        let value = this.hashMap[idx].get(key);
        if (value) {
            return console.log('RETRIEVED: ' + value);
        }
        return null;
    }
}

// Instantiate a new hash table with a size of 10;
const myHashTable = new HashTable(10);

// Let pretends in a game when we reach a certain level, we get a reward. And this hashtable stores the rewards and levels needed.

// Inserting
myHashTable.insert("level-1", 'shortsword');
myHashTable.insert("level-5", 'longsword');
myHashTable.insert("level-9", 'poisen arrows');
// Print out the table
console.log(myHashTable);
// Removing
myHashTable.remove("level-1");
// Print out the table
console.log(myHashTable);
// Retrieving
myHashTable.retrieve("level-5");
myHashTable.retrieve("level-1");
// Print out the table
console.log(myHashTable);