export class LinkedList {
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

	deleteHead() {
		if (!this.head) return;

		const deletedItem = this.head;

		if (this.head.next) this.head = this.head.next;
		else {
			this.head = null;
			this.tail = null;
		}

		return this.head;
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
