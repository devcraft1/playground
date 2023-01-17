const makeQueue = () => {
  const queue = [];
  return {
    add(item) {
      return queue.push(item);
    },
    delete() {
      return queue.pop();
    },
    checkOutQueue() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    },
  };
};

const Queue = makeQueue();

// add to queue
console.log(Queue.add("code"));
console.log(Queue.add("eat"));
console.log(Queue.add("sleep"));
console.log(Queue.add("code"));

// delete from queue
console.log(Queue.delete());

// peek queue
console.log(Queue.checkOutQueue());

// check if queue is empty
console.log(Queue.isEmpty());
