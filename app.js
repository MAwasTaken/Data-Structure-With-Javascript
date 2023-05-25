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
/*
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
*/
// ============================================== e.25 / queue ==============================================================================
// ============================================== e.26 / queue with aray ==============================================================================
/*
class Queue {
	constructor() {
		this.item = [];
	}

	enqueue(value) {
		this.item.unshift(value);
	}

	dequeue() {
		return this.item.pop();
	}

	toArray() {
		return this.item;
	}
}

const queue = new Queue();

queue.enqueue(2);
queue.enqueue(5);
queue.enqueue(9);

console.log(queue.toArray());

console.log(queue.dequeue());

console.log(queue.toArray());
*/
// ============================================== e.27 / queue with linked list ==============================================================================
/*
import { LinkedList } from "./linked-list.js";

class Queue {
	constructor() {
		this.list = new LinkedList();
	}

	enqueue(value) {
		this.list.append(value);
	}

	dequeue() {
		return this.list.deleteHead();
	}

	toArray() {
		return this.list.toArray();
	}
}

const queue = new Queue();

queue.enqueue(2);
queue.enqueue(5);
queue.enqueue(9);

console.log(queue.toArray());

console.log(queue.dequeue());

console.log(queue.toArray());
*/
// ============================================== e.28 / hash table ==============================================================================
// ============================================== e.29 / hash table use case ==============================================================================
/*
const message = "hello world";

// function findFirstChild(str) {
// 	for (let i = 0; i < str.length; i++) {
// 		for (let j = i + 1; j < str.length; j++) {
// 			if (str[i] === str[j]) return str[i];
// 		}
// 	}
// }

function findFirstChild(str) {
	const table = {};

	for (let char of str) {
		if (table[char]) return char;

		table[char] = 1;
	}
}

console.log(findFirstChild(message));
*/
// ============================================== e.30 / hash table Implementation ==============================================================================
/*
class HashTable {
	constructor() {
		this.size = 1_000;
		this.products = Array(1_000).fill(null);
	}

	hash(key) {
		let hash = 0;

		for (const char of key) hash += char.charCodeAt(0);

		return hash % this.size;
	}

	set(key, value) {}
}

const message = "hello world";

function findFirstChild(str) {
	const table = new HashTable();

	for (let char of str) {
		if (table[char]) return char;

		table[char] = 1;
	}
}

console.log(findFirstChild(message));
*/
// ============================================== e.31 / hash table Set & get ==============================================================================
/*
class HashTable {
	constructor() {
		this.size = 1_000;
		this.products = Array(1_000).fill(null);
	}

	hash(key) {
		let hash = 0;

		for (const char of key) hash += char.charCodeAt(0);

		return hash % this.size;
	}

	set(key, value) {
		const keyHash = this.hash(key);

		this.products[keyHash] = value;
	}

	get(key) {
		const keyHash = this.hash(key);

		return this.products[keyHash];
	}
}

const message = "hello world";

function findFirstChild(str) {
	const table = new HashTable();

	for (let char of str) {
		if (table.get(char)) return char;

		table.set(char, 1);
	}
}

console.log(findFirstChild(message));
*/
// ============================================== e.32 / Tree ===================================================================================================
// ============================================== e.33 / Tree conceptes ===================================================================================================
// ============================================== e.34 / Tree example ===================================================================================================
// ============================================== e.35 / Tree Implementation ===================================================================================================
/*
class Node {
	constructor(value, parentNode = null) {
		this.childeren = [];
		this.value = value;
		this.parent = parentNode;
	}

	addNode(value) {
		// this.childeren.push(new Node(value, this));
		const node = new Node(value, this);

		this.childeren.push(node);

		return { node: node, index: this.childeren.length - 1 };
	}

	removeNode(index) {
		this.childeren.splice(index, 1);
	}
}

class Tree {
	constructor(rootValue) {
		this.root = new Node(rootValue);
	}
}

const user = new Tree("root");

const userInfoNodeData = user.root.addNode("userInfo");
const cartNodeData = user.root.addNode("cart");

userInfoNodeData.node.addNode("MAwasTaken");
cartNodeData.node.addNode("Book 1");

console.log(user);
*/
// ============================================== e.36 / Tree Implementation Optimization ===================================================================================================
/*
class Node {
	constructor(value, parentNode = null) {
		this.childeren = [];
		this.value = value;
		this.parent = parentNode;
	}

	addNode(value) {
		const segments = value.split("/");

		if (segments.length === 0) return;
		if (segments.length === 1) {
			const node = new Node(segments[0], this);

			this.childeren.push(node);

			return { node: node, index: this.childeren.length - 1 };
		}

		const existingChildNode = this.childeren.find((item) => item.value === segments[0]);

		if (existingChildNode) existingChildNode.addNode(segments.slice(1).join("/"));
		else {
			const node = new Node(segments[0], this);

			node.addNode(segments.slice(1).join("/"));

			this.childeren.push(node);

			return { node: node, index: this.childeren.length - 1 };
		}
	}

	removeNode(index) {
		this.childeren.splice(index, 1);
	}
}

class Tree {
	constructor(rootValue) {
		this.root = new Node(rootValue);
	}

	add(path) {
		this.root.addNode(path);
	}
}

const user = new Tree("root");

user.add("/userInfo/username/MAwasTaken");
user.add("/cart/Book 1");
user.add("/cart/Book 2");

console.log(user);
*/
// ============================================== e.37 / Tree Implementation remove node ===================================================================================================
/*
class Node {
	constructor(value, parentNode = null) {
		this.childeren = [];
		this.value = value;
		this.parent = parentNode;
	}

	addNode(value) {
		const segments = value.split("/");

		if (segments.length === 0) return;
		if (segments.length === 1) {
			const node = new Node(segments[0], this);

			this.childeren.push(node);

			return { node: node, index: this.childeren.length - 1 };
		}

		const existingChildNode = this.childeren.find((item) => item.value === segments[0]);

		if (existingChildNode) existingChildNode.addNode(segments.slice(1).join("/"));
		else {
			const node = new Node(segments[0], this);

			node.addNode(segments.slice(1).join("/"));

			this.childeren.push(node);

			return { node: node, index: this.childeren.length - 1 };
		}
	}

	removeNode(value) {
		const segments = value.split("/");

		if (segments.length === 0) return;
		if (segments.length === 1) {
			const existingNodeIndex = this.childeren.findIndex((item) => item.value === segments[0]);

			if (existingNodeIndex < 0) throw new Error("Could not find!");

			this.childeren.splice(existingNodeIndex, 1);
		}
		if (segments.length > 1) {
			const existingChildNode = this.childeren.findIndex((item) => item.value === segments[0]);

			if (!existingChildNode) throw new Error("Could not find!");

			existingChildNode.removeNode(segments.slice(1).join("/"));
		}
	}
}

class Tree {
	constructor(rootValue) {
		this.root = new Node(rootValue);
	}

	add(path) {
		this.root.addNode(path);
	}

	remove(path) {
		this.root.removeNode(path);
	}
}

const user = new Tree("root");

user.add("/userInfo/username/MAwasTaken");
user.add("/cart/Book 1");
user.add("/cart/Book 2");

user.remove("/cart/Book 2");

console.log(user);
*/
// ============================================== e.38 / Search in Tree ===================================================================================================
// ============================================== e.39 / Depth First Tree ===================================================================================================
/*
class Node {
	constructor(value, parentNode = null) {
		this.childeren = [];
		this.value = value;
		this.parent = parentNode;
	}

	addNode(value) {
		const segments = value.split("/");

		if (segments.length === 0) return;
		if (segments.length === 1) {
			const node = new Node(segments[0], this);

			this.childeren.push(node);

			return { node: node, index: this.childeren.length - 1 };
		}

		const existingChildNode = this.childeren.find((item) => item.value === segments[0]);

		if (existingChildNode) existingChildNode.addNode(segments.slice(1).join("/"));
		else {
			const node = new Node(segments[0], this);

			node.addNode(segments.slice(1).join("/"));

			this.childeren.push(node);

			return { node: node, index: this.childeren.length - 1 };
		}
	}

	removeNode(value) {
		const segments = value.split("/");

		if (segments.length === 0) return;
		if (segments.length === 1) {
			const existingNodeIndex = this.childeren.findIndex((item) => item.value === segments[0]);

			if (existingNodeIndex < 0) throw new Error("Could not find!");

			this.childeren.splice(existingNodeIndex, 1);
		}
		if (segments.length > 1) {
			const existingChildNode = this.childeren.findIndex((item) => item.value === segments[0]);

			if (!existingChildNode) throw new Error("Could not find!");

			existingChildNode.removeNode(segments.slice(1).join("/"));
		}
	}

	find(value) {
		for (const item of this.childeren) {
			if (item.value === value) return item;

			const nestedChildNode = item.find(value);

			if (nestedChildNode) return nestedChildNode;
		}
	}
}

class Tree {
	constructor(rootValue) {
		this.root = new Node(rootValue);
	}

	add(path) {
		this.root.addNode(path);
	}

	remove(path) {
		this.root.removeNode(path);
	}

	find(value) {
		if (this.root.value === value) return this.root;

		return this.root.find(value);
	}
}

const user = new Tree("root");

user.add("/userInfo/username/MAwasTaken");
user.add("/cart/Book 1");
user.add("/cart/Book 2");

user.remove("/cart/Book 2");

console.log(user.find("username"));

console.log(user);
*/
// ============================================== e.40 / Breath First Tree ===================================================================================================
/*
class Node {
	constructor(value, parentNode = null) {
		this.childeren = [];
		this.value = value;
		this.parent = parentNode;
	}

	addNode(value) {
		const segments = value.split("/");

		if (segments.length === 0) return;
		if (segments.length === 1) {
			const node = new Node(segments[0], this);

			this.childeren.push(node);

			return { node: node, index: this.childeren.length - 1 };
		}

		const existingChildNode = this.childeren.find((item) => item.value === segments[0]);

		if (existingChildNode) existingChildNode.addNode(segments.slice(1).join("/"));
		else {
			const node = new Node(segments[0], this);

			node.addNode(segments.slice(1).join("/"));

			this.childeren.push(node);

			return { node: node, index: this.childeren.length - 1 };
		}
	}

	removeNode(value) {
		const segments = value.split("/");

		if (segments.length === 0) return;
		if (segments.length === 1) {
			const existingNodeIndex = this.childeren.findIndex((item) => item.value === segments[0]);

			if (existingNodeIndex < 0) throw new Error("Could not find!");

			this.childeren.splice(existingNodeIndex, 1);
		}
		if (segments.length > 1) {
			const existingChildNode = this.childeren.findIndex((item) => item.value === segments[0]);

			if (!existingChildNode) throw new Error("Could not find!");

			existingChildNode.removeNode(segments.slice(1).join("/"));
		}
	}

	find(value) {
		for (const item of this.childeren) if (item.value === value) return item;

		for (const item of this.childeren) {
			const nestedChildNode = item.find(value);

			if (nestedChildNode) return nestedChildNode;
		}
	}
}

class Tree {
	constructor(rootValue) {
		this.root = new Node(rootValue);
	}

	add(path) {
		this.root.addNode(path);
	}

	remove(path) {
		this.root.removeNode(path);
	}

	find(value) {
		if (this.root.value === value) return this.root;

		return this.root.find(value);
	}
}

const user = new Tree("root");

user.add("/userInfo/username/MAwasTaken");
user.add("/cart/Book 1");
user.add("/cart/Book 2");

user.remove("/cart/Book 2");

console.log(user.find("username"));

console.log(user);
*/
// ============================================== e.41 / Binary Tree Search ===================================================================================================
// ============================================== e.42 / Binary Tree  ==========================================================================================================
/*
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	add(value) {
		if (this.value === null) {
			this.value = value;

			return;
		}

		if (this.value < value) {
			if (this.right) {
				this.right.add(value);

				return;
			}

			const newNode = new Node(value);

			this.right = newNode;

			return;
		}

		if (this.value > value) {
			if (this.left) {
				this.left.add(value);

				return;
			}
			const newNode = new Node(value);

			this.left = newNode;

			return;
		}
	}
}

class Tree {
	constructor() {
		this.root = new Node(null);
	}

	add(value) {
		this.root.add(value);
	}
}
*/
// ============================================== e.43 / Binary Tree Find ==========================================================================================================
/*
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	add(value) {
		if (this.value === null) {
			this.value = value;

			return;
		}

		if (this.value < value) {
			if (this.right) {
				this.right.add(value);

				return;
			}

			const newNode = new Node(value);

			this.right = newNode;

			return;
		}

		if (this.value > value) {
			if (this.left) {
				this.left.add(value);

				return;
			}
			const newNode = new Node(value);

			this.left = newNode;

			return;
		}
	}

	find(value) {
		if (this.value === value) return this;
		if (this.value < value && this.right) return this.right.find(value);
		if (this.value > value && this.left) return this.left.find(value);
	}
}

class Tree {
	constructor() {
		this.root = new Node(null);
	}

	add(value) {
		this.root.add(value);
	}

	find(value) {
		return this.root.find(value);
	}
}

const tree = new Tree();

tree.add(10);
tree.add(5);
tree.add(2);
tree.add(6);
tree.add(20);
tree.add(25);
tree.add(39);

console.log(tree);

console.log(tree.find(6));
console.log(tree.find(39));
*/
// ============================================== e.44 / AVL Tree ==========================================================================================================
