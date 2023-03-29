class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(itemName) {
      this.items = this.items.filter(item => item.name !== itemName);
    }
  
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  
    getSummary() {
      const totalPrice = this.getTotalPrice();
      return {
        items: this.items,
        totalPrice: totalPrice,
        totalItems: this.items.length,
        averagePrice: totalPrice / this.items.length,
      };
    }
  }
  
  class Item {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  }
  
  const cart = new ShoppingCart();
  cart.addItem(new Item("Apple", 1, 5));
  cart.addItem(new Item("Banana", 2, 3));
  cart.addItem(new Item("Orange", 3, 8));
  
  console.log("Cart Summary:", cart.getSummary());
  cart.removeItem("Banana");
  console.log("Cart Summary after removing Banana:", cart.getSummary());
  