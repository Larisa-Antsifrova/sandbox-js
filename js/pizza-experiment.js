// Pizza Order
const SIZES = {
  BIG: { price: 25, cal: 100, time: 15 },
  SMALL: { price: 15, cal: 50, time: 7 },
  MEDIUM: { price: 15, cal: 50, time: 7 },
};

const STUFFINGS = {
  CHEESE: { price: 6.5, cal: 45, time: 2 },
  BEACON: { price: 10, cal: 70, time: 6 },
  TOMATO: { price: 12.1, cal: 4, time: 5 },
  CHICKEN: { price: 9.3, cal: 30, time: 5.1 },
};

const SAUCES = {
  MUSTARD: { price: 3, cal: 5, time: 1 },
  KETCHUP: { price: 4.2, cal: 20, time: 1.5 },
  BOLOGNESE: { price: 7.5, cal: 50, time: 3 },
};

const pizza = {
  size: null,
  stuffings: [],
  sauces: [],

  addStuffing(stuffing) {
    if (!this.stuffings.includes(stuffing) && stuffing in STUFFINGS) {
      this.stuffings.push(stuffing);
    }
    return `${stuffing} is already in your pizza!`;
  },

  removeStuffing(stuffing) {
    if (this.stuffings.includes(stuffing)) {
      this.stuffings.splice(this.stuffings.indexOf(stuffing), 1);
      return `${stuffing} is removed!`;
    }
    return `There is no ${stuffing} in your pizza!`;
  },

  addSauce(sauce) {
    if (!this.sauces.includes(sauce) && sauce in SAUCES) {
      this.sauces.push(sauce);
    }
    return `${sauce} is already in your pizza!`;
  },

  removeSauce(sauce) {
    if (this.sauces.includes(sauce)) {
      this.sauces.splice(this.sauces.indexOf(sauce), 1);
      return `${sauce} is removed!`;
    }
    return `There is no ${sauce} in your pizza!`;
  },

  getTotal(property) {
    const getTotalForSize = () => SIZES[this.size][property];

    const getTotalForStuffing = () => {
      let total = 0;
      for (const stuffing of this.stuffings) {
        total += STUFFINGS[stuffing][property];
      }
      return total;
    };

    const getTotalForSauces = () => {
      let total = 0;
      for (const sauce of this.sauces) {
        total += SAUCES[sauce][property];
      }
      return total;
    };

    return getTotalForSize() + getTotalForStuffing() + getTotalForSauces();
  },

  getPizzaConfig() {
    return {
      size: this.size,
      stuffings: this.stuffings,
      sauces: this.sauces,
      price: this.getTotal("price"),
      calories: this.getTotal("cal"),
      time: this.getTotal("time"),
    };
  },
};

// Checking stuffings
console.log(pizza.stuffings);
pizza.addStuffing("CHICKEN");
pizza.addStuffing("TOMATO");
pizza.addStuffing("BEACON");
pizza.addStuffing("CHEESE");
pizza.addStuffing("NO STUFFING");
console.log(pizza.stuffings);
console.log(pizza.addStuffing("CHICKEN"));

// Checking sauces
console.log(pizza.sauces);
pizza.addSauce("MUSTARD");
pizza.addSauce("KETCHUP");
pizza.addSauce("BOLOGNESE");
pizza.addSauce("NO SAUCE");
console.log(pizza.sauces);
console.log(pizza.addSauce("MUSTARD"));
console.log(pizza.addSauce("KETCHUP"));
console.log(pizza.addSauce("BOLOGNESE"));

// Checking stuffings removal
console.log(pizza.stuffings);
console.log(pizza.removeStuffing("CHICKEN"));
console.log(pizza.stuffings);
console.log(pizza.removeStuffing("CHICKEN"));

// Checking sauces removal
console.log(pizza.sauces);
console.log(pizza.removeSauce("MUSTARD"));
console.log(pizza.sauces);
console.log(pizza.removeSauce("MUSTARD"));

// Checking my Pizza
pizza.size = "BIG";
console.table(pizza);

// Calculating price of my Pizza
console.log("My pizza: ", pizza);
console.log(pizza.getTotal("price"));
console.log(pizza.getTotal("cal"));
console.log(pizza.getTotal("time"));

// Checking Pizza Configuration
console.log(pizza.getPizzaConfig());
