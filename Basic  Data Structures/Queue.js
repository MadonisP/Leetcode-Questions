/////////////////////*Yavas*////////////////////////////////////////////////////////////////////////////////////*Slow*////////////////////////////
class SlowQueue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new SlowQueue();

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(30);
queue.enqueue(20);
console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());

/////////////////////*Hizli*////////////////////////////////////////////////////////////////////////////////////*Fast*////////////////////////////
/////////////////////*Example image: https://www.tutorialride.com/images/data-structures/queue-array.jpeg *////////////////////////////

class FastQueue {
  constructor() {
    this.items = {};
    thir.rear = 0;
    thir.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

const fastQueue = new FastQueue();
console.log(fastQueue.isEmpty());

fastQueue.enqueue(10);
fastQueue.enqueue(20);
fastQueue.enqueue(30);
console.log(FastQueue.size());
fastQueue.print();

console.log(fastQueue.dequeue());
console.log(fastQueue.peek());
