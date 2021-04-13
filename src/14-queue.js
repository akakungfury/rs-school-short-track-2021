// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  get size() {
    return this.size;
  }

  enqueue(element) {
    // eslint-disable-next-line no-undef
    const node = new Node(element);
    if (!this.head) {
      this.head.next = node;
      this.tail.next = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.head) return null;
    const temp = this.head;

    if (this.head === this.tail) {
      this.tail = null;
    }

    this.head = this.head.next;
    this.size--;

    return temp.val;
  }
}

module.exports = Queue;
