/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  add(product) {
    for (const item of this.items) {
      if (product.name === item.name) {
        item.quantity += 1;
        return;
      }
    }
    product.quantity = 1;
    this.items.push(product);
  },

  remove(productName) {
    console.log(productName);
    // Variant with counter
    // for (let i = 0; i < this.items.length; i++) {
    //   let item = this.items[i];
    //   if (productName === item.name) {
    //     this.items.splice(i, 1);
    //   }
    // }
    // Variant without counter
    for (const item of this.items) {
      if (item.name === productName) {
        console.log("Found it! Let' delete!");
        let i = this.items.indexOf(item);
        this.items.splice(i, 1);
      }
    }
  },

  clear() {
    this.items = [];
  },

  countTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }

    return total;
  },

  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
        return;
      }
    }
  },

  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        if (item.quantity - 1 === 0) {
          this.remove(productName);
          return;
        }
        item.quantity -= 1;
        return;
      }
    }
  },
};

// console.table(cart.getItems()); // empty array
// cart.add({ name: "🍎", price: 50 });
// cart.add({ name: "🍇", price: 70 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🍓", price: 110 });
// console.table(cart.getItems()); // aray with 5 objects
// cart.remove("🍎");
// console.table(cart.getItems()); // array without "🍎"
// cart.remove("🍋");
// console.table(cart.getItems()); // array without "🍋"
// cart.clear();
// console.table(cart.getItems()); // empty array
// cart.add({ name: "🍎", price: 50 });
// cart.add({ name: "🍇", price: 70 });
// cart.add({ name: "🍋", price: 60 });
// console.table(cart.getItems()); // array with 3 objects
// console.log(cart.countTotalPrice()); // 180
// cart.add({ name: "🍎", price: 50 });
// cart.add({ name: "🍇", price: 70 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🍓", price: 110 });
// console.table(cart.getItems()); // objects with increased quantity
// console.log(cart.countTotalPrice()); // 470
// cart.increaseQuantity("🍇");
// cart.increaseQuantity("🍇");
// console.table(cart.getItems()); // "🍇" with increased quantity
// console.log(cart.countTotalPrice()); // 610
// cart.decreaseQuantity("🍇");
// cart.decreaseQuantity("🍇");
// cart.decreaseQuantity("🍇");
// cart.decreaseQuantity("🍇");
// cart.decreaseQuantity("🍇");
// cart.decreaseQuantity("🍇");
// console.table(cart.getItems()); // array without "🍇"

document.querySelector(".js-show-cart").addEventListener("click", () => {
  console.table(cart.getItems());
});

document
  .querySelector("button[data-product = '🍎'")
  .addEventListener("click", cart.add.bind(cart, { name: "🍎", price: 50 }));
document
  .querySelector("button[data-product = '🍇'")
  .addEventListener("click", cart.add.bind(cart, { name: "🍇", price: 70 }));
document
  .querySelector("button[data-product = '🍋'")
  .addEventListener("click", cart.add.bind(cart, { name: "🍋", price: 60 }));
document
  .querySelector("button[data-product = '🍓'")
  .addEventListener("click", cart.add.bind(cart, { name: "🍓", price: 110 }));

document.querySelector(".js-count-total").addEventListener("click", () => {
  console.log(cart.countTotalPrice());
});
