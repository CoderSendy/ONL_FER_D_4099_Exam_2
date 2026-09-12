/**
 * Write your code below!
 */

class Product {
  constructor(name, price, inStock, quantity) {
    if (new.target === Product) {
      throw new Error("Product is an abstract class");
    }

    this.name = name;
    this.price = price;
    this.inStock = inStock;
    this.quantity = quantity;
  }

  isInStock() {
    return this.inStock ? "Product available" : "Out of stock";
  }

  order(quantity) {
    if (quantity > this.quantity) {
      return false;
    }

    this.quantity -= quantity;

    if (this.quantity === 0) {
      this.inStock = false;
    }

    return this.price * quantity;
  }
}

class Shoes extends Product {
  constructor(name, price, inStock, quantity) {
    super(name, price, inStock, quantity);

    this.colors = [];
    this.sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
  }

  addColor(color) {
    this.colors = [...this.colors, color];
  }

  removeSize(size) {
    this.sizes = this.sizes.filter(item => item !== size);
  }
}

const adidas = new Shoes("Adidas", 299.99, true, 40);

console.log(adidas.isInStock());
console.log(adidas.order(30));
console.log(adidas.order(30));
console.log(adidas.order(10));
console.log(adidas.isInStock());

adidas.addColor("red");
adidas.addColor("blue");
adidas.addColor("green");
console.log(adidas.colors);

adidas.removeSize(38);
adidas.removeSize(40);
adidas.removeSize(43);
console.log(adidas.sizes);
