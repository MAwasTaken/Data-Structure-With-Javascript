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
// ============================================== e.8 / Map ======================================================

const responseData = new Map();

responseData.set("title", "book");
responseData.set("price", 90);
for (const item of responseData) console.log(item);

const user = { id: 1, name: "mahdi" };
const validation = true;
responseData.set(user, validation)
for (const item of responseData) console.log(item);

console.log(responseData.get('title'));