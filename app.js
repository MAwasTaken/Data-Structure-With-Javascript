// ============================================== e.1 / intro ======================================================
// ============================================== e.2 / intro2 ======================================================
// ============================================== e.3 / intro3 ======================================================
// ============================================== e.4 / Arrays ======================================================
/*

const products = ["Book1", "Book2", "Book3"];

console.log(products[1]);

for (const item of products) console.log(item);

console.log(products.length);
products.push("Book7");
console.log(products.length);

const productIndex = products.findIndex((item) => item === "Book3");
console.log(productIndex);

*/
// ============================================== e.5 / Sets ======================================================
/*
const prices = new Set();

prices.add(1);
prices.add(2);
prices.add(1);

for (const item of prices) console.log(item);

console.log(prices.has(2));
*/
// ============================================== e.6 / Array vs Sets ======================================================
// ============================================== e.7 / Objects ======================================================
/*
const product = {
	title: "book",
	price: 89,
	info() {
		console.log(this.title, this.price);
	},
};

console.log(product[1]);
console.log(product["price"]);
console.log(product.price);

product.color = "blue";
console.log(product);

product.info()
*/
// ============================================== e.8 / Maps ======================================================
/*
const responseData = new Map();

responseData.set("title", "book");
responseData.set("price", 90);
for (const item of responseData) console.log(item);

const user = { id: 1, name: "mahdi" };
const validation = true;
responseData.set(user, validation)
for (const item of responseData) console.log(item);

console.log(responseData.get('title'));
*/
// ============================================== e.9 / Maps vs objects =====================================================
// ============================================== e.10 / Linked List =====================================================
// ============================================== e.11 / Linked List - append  =====================================================
/*
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(value) {
		const newElement = { value: value, next: null };

		if (this.tail) this.tail.next = newElement;

		this.tail = newElement;

		if (!this.head) this.head = newElement;
	}
}

const linkedList = new LinkedList();
*/
// ============================================== e.12 / Linked List - toArray =====================================================
/*
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(value) {
		const newElement = { value: value, next: null };

		if (this.tail) this.tail.next = newElement;

		this.tail = newElement;

		if (!this.head) this.head = newElement;
	}

	toArray() {
		const element = [];

		let currentElement = this.head;

		while (currentElement) {
			element.push(currentElement);

			currentElement = currentElement.next;
		}

		return element;
	}
}

const linkedList = new LinkedList();

linkedList.append(2);
linkedList.append("s");
linkedList.append(true);

console.log(linkedList.toArray());
*/
// ============================================== e.13 / Linked List - prepend =====================================================
/*
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(value) {
		const newElement = { value: value, next: null };

		if (this.tail) this.tail.next = newElement;

		this.tail = newElement;

		if (!this.head) this.head = newElement;
	}

	prepend(value) {
		const newElement = { value: value, next: this.head };

		this.head = newElement;

		if (!this.tail) this.tail = newElement;
	}

	toArray() {
		const element = [];

		let currentElement = this.head;

		while (currentElement) {
			element.push(currentElement);

			currentElement = currentElement.next;
		}

		return element;
	}
}

const linkedList = new LinkedList();

linkedList.append(2);
linkedList.append("s");
linkedList.append(true);

linkedList.prepend("first value");
console.log(linkedList.toArray());
*/
// ============================================== e.14 / Linked List - delete =====================================================
/*
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(value) {
		const newElement = { value: value, next: null };

		if (this.tail) this.tail.next = newElement;

		this.tail = newElement;

		if (!this.head) this.head = newElement;
	}

	prepend(value) {
		const newElement = { value: value, next: this.head };

		this.head = newElement;

		if (!this.tail) this.tail = newElement;
	}

	delete(value) {
		if (!this.head) return;

		while (this.head && this.head.value === value) this.head = this.head.next;

		let currentElement = this.head;

		while (currentElement.next) {
			if (currentElement.next.value === value) currentElement.next = currentElement.next.next;
			else currentElement = currentElement.next;
		}

		if (this.tail.value === value) this.tail = currentElement;
	}

	toArray() {
		const element = [];

		let currentElement = this.head;

		while (currentElement) {
			element.push(currentElement);

			currentElement = currentElement.next;
		}

		return element;
	}
}

const linkedList = new LinkedList();

linkedList.append(2);
linkedList.append("s");
linkedList.append("s");
linkedList.append(true);

linkedList.prepend("first value");
linkedList.prepend("first value");

linkedList.delete("s");
linkedList.delete("s");
linkedList.delete("first value");
linkedList.delete("first value");
linkedList.delete(true);

console.log(linkedList.toArray());
*/
// ============================================== e.15 / Linked List - find & insertAfter =====================================================
/*
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(value) {
		const newElement = { value: value, next: null };

		if (this.tail) this.tail.next = newElement;

		this.tail = newElement;

		if (!this.head) this.head = newElement;
	}

	prepend(value) {
		const newElement = { value: value, next: this.head };

		this.head = newElement;

		if (!this.tail) this.tail = newElement;
	}

	insertAfter(value, afterValue) {
		const existingElement = this.find(afterValue);

		if (existingElement) {
			const newElement = { value: value, next: existingElement.value };

			existingElement.next = newElement;
		}
	}

	find(value) {
		if (!this.head) return;

		let currentElement = this.head;

		while (currentElement) {
			if (currentElement.value === value) return currentElement;

			currentElement = currentElement.next;
		}

		return;
	}

	delete(value) {
		if (!this.head) return;

		while (this.head && this.head.value === value) this.head = this.head.next;

		let currentElement = this.head;

		while (currentElement.next) {
			if (currentElement.next.value === value) currentElement.next = currentElement.next.next;
			else currentElement = currentElement.next;
		}

		if (this.tail.value === value) this.tail = currentElement;
	}

	toArray() {
		const element = [];

		let currentElement = this.head;

		while (currentElement) {
			element.push(currentElement);

			currentElement = currentElement.next;
		}

		return element;
	}
}

const linkedList = new LinkedList();

linkedList.append(2);
linkedList.append("s");
linkedList.append("s");
linkedList.append(true);

linkedList.prepend("first value");
linkedList.prepend("first value");

linkedList.delete("s");
linkedList.delete("s");
linkedList.delete("first value");
linkedList.delete("first value");
linkedList.delete(true);

console.log(linkedList.toArray());

console.log(linkedList.find("s"));
console.log(linkedList.find(2));

linkedList.insertAfter("new value", 2);

console.log(linkedList.toArray());
*/
// ============================================== e.16 / Linked List - why linked list =====================================================
// ============================================== e.17 / Linked List - time complexity =====================================================
// ============================================== e.18 / linkedlist vs arrays ==============================================================
// ============================================== e.19 / table vs list =====================================================================
// ============================================== e.20 / table & list ======================================================================
/*
// list
const cartItems = ["Book1", "Book2"];
const thirdItem = cartItems[2];
for (const item of cartItems) {
	// ...
}

// table
const products = {
	id1: {
		title: "Book1",
		price: 89,
		exist: true,
	},

	id2: {
		// ...
	},
};

const productData = products["id1"];
*/
// ============================================== e.21 / Stack ==============================================================================
/*
function printResult(result) {
	console.log(result);
}

function add(num1, num2) {
	printResult(num1 + num2);
}

add(2, 8);
*/
// ============================================== e.22 / Stack Implementation ==============================================================================
/*
class Stack {
	constructor() {
		this.items = [];
	}

	push(value) {
		this.items.push(value);
	}

	pop() {
		return this.items.pop();
	}

	toArray() {
		return this.items;
	}
}

const stack = new Stack();

stack.push("product 1");
stack.push("product 2");
stack.push("product 3");

console.log(stack.toArray());

stack.pop();

console.log(stack.toArray());
*/
// ============================================== e.23 / Stack with Linkedlist ==============================================================================
/*
import { LinkedList } from "./linked-list.js";

class Stack {
	constructor() {
		this.list = new LinkedList();
	}

	push(value) {}

	pop() {}

	toArray() {}
}
*/
// ============================================== e.24 / Stack with Linkedlist Implementation ==============================================================================

import { LinkedList } from "./linked-list.js";

class Stack {
	constructor() {
		this.list = new LinkedList();
	}

	push(value) {
		this.list.prepend(value);
	}

	pop() {
		return this.list.deleteHead();
	}

	toArray() {
		return this.list.toArray();
	}
}

const stack = new Stack();

stack.push("product 1");
stack.push("product 2");
stack.push("product 3");

console.log(stack.toArray());

console.log(stack.pop());

console.log(stack.toArray());