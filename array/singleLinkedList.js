class Node {
	constructor(value) {
		this.value = value;
		this.next = 0;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}
	getSize() {
		return this.size === 0;
	}
	getNodeSize() {
		let count = 0;
		let cur = this.head;
		while (cur) {
			count++;
			cur = cur.next;
		}
		return count;
	}
	prepend(value) {
		let node = new Node(value);
		if (this.getSize()) {
			this.head = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		this.size++;
	}
	append(value) {
		let node = new Node(value);
		if (this.getSize()) {
			this.head = node;
		} else {
			let cur = this.head;
			while (cur.next) {
				cur = cur.next;
			}
			cur.next = node;
		}
		this.size++;
	}
	insertAt(index, value) {
		if (index <= 0) {
			throw new Error("index is less then list size");
		} else if (index === 1) {
			this.prepend(value);
		} else if (index === this.getSize()) {
			this.append(value);
		} else {
			let node = new Node(value);
			let cur = this.head;
			for (let i = 1; i < index - 1; i++) {
				cur = cur.next;
			}
			node.next = cur.next;
			cur.next = node;
			this.size++;
		}
	}
	print() {
		let cur = this.head;
		let values = [];
		while (cur) {
			values.push(cur.value);
			cur = cur.next;
		}
		return values;
	}
	delete(index) {
		if (index <= 0) {
			throw new Error("index is less then list size");
		} else if (index > this.getNodeSize()) {
			throw new Error("index is greater then list size");
		} else if (index === 1) {
			this.head = this.head.next;

			this.size--;
		} else if (index === this.getNodeSize) {
			let cur = this.head;
			while (cur.next) {
				cur = cur.next;
			}
			cur.next = null;
			this.size--;
		} else {
			let cur = this.head;
			for (let i = 1; i < index - 1; i++) {
				cur = cur.next;
			}
			let temp = cur.next;
			cur.next = temp.next;
			temp.next = null;
			this.size--;
		}
	}
}

let list = new LinkedList();
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.append(4);
list.append(5);
list.insertAt(3, 6);
list.insertAt(1, 7);
list.delete(6);

console.log(list.getNodeSize());
console.log(list.print());
