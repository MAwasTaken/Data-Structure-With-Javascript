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

    console.log(linkedList.head);

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
