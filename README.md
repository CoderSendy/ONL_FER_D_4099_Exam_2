![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)

# Important information

Read the following guidelines before doing the exercises.

## How do you begin?

1. [*Fork*](https://guides.github.com/activities/forking/) the repository containing exercises.
2. Clone the repository onto your computer using the command: `git clone repository_address`.
   You will find the address of the repository by pressing "Clone or download" button on its webpage.
3. Complete the exercises and commit changes to your repository using the commands below.
   `git add filename` will add a single file which you have changed.
   If you want to add all the changed files at once, use `git add .`.
   Remember that the fullstop (dot) at the end of this command is important!
   Next, commit changes using `git commit -m "description_of_changes"`.
4. Push changes to your repository on GitHub by typing: `git push origin main`.
5. Create a [*pull request*](https://help.github.com/articles/creating-a-pull-request) to the original repository when you have finished all the exercises.

### Do the exercises in appropriate files.

**The repository with the exercises will be removed 2 weeks after the end of the course. This will result in the removal of all forks made from this repository.**


## Task 1 - ES6

**Do not use the React library** when performing this task.

> ### Preparation
>
> Modify the `vite.config.js` file so that the `root` variable points to:
>
> - `01_Task_1`


Create a function `without` taking an infinite number of arguments (use an appropriate operator). The first of the argument (`data`) will be an array of integers. There may be infinitely many arguments following it.

The function should return a **new array** with values passed as the following arguments removed. Use appropriate **array functions** to solve the task.

### Example

```js
const data = [1, 2, 3, 4, 5];

console.log(without(data, 1, 2)); // [3, 4, 5];
console.log(without(data, 5, 3)); // [1, 2, 4];
console.log(without(data, 1, 2, 3, 4)); // [5];
console.log(without(data)); // [1, 2, 3, 4, 5];
console.log(without(data, 1, 2, 3, 4, 5)); // [];
```


## Task 2 - ES6

**Do not use the React library** when performing this task.

> ### Preparation
>
> Modify the `vite.config.js` file so that the `root` variable points to:
>
> - `02_Task_2`


In the file prepared for this task you'll find an array of users (`users` variable)

> For all actions involving the array of data use the **array methods**.

Create a function called `parseUserData` taking an **array** as an argument (with a `data` variable) and then:

- filter the resulting array and only leave such users who in the `language` key have the value of `French`,
- using an appropriate array method change the structure of individual objects so that they represent the following data (use destructuring):
  - `id`,
  - `fullName`: `firstName` `lastName` (the name and surname should be separated by a space character),
  - `email`,
  - `nin`,
- sort in on the `nin` key (ascending).

The function has to return a fully prepared array according to the specification below:

### Expected result:

```js
[
  {
    id: 5,
    fullName: "Colas Moffett",
    email: "cmoffett4@purevolume.com",
    nin: "1288790260",
  },
  {
    id: 4,
    fullName: "Biddie Liddard",
    email: "bliddard3@noaa.gov",
    nin: "2931819395",
  },
  {
    id: 1,
    fullName: "Idalia Franses",
    email: "ifranses0@mapy.cz",
    nin: "3033798411",
  },
];
```


## Task 3 - ES6
**Do not use the React library** when performing this task.


> ### Preparation
> Modify the `vite.config.js` file so that the `root` variable points to:
> - `03_Task_3`




Create an abstract class named `Product` with a constructor that takes the following parameters:

- `name` - product name
- `price` - product price
- `inStock` - value `true`/`false` stating if product is in stock
- `quantity` - quantity in stock

It should also include the following methods:

- `isInStock()` - returning the text 'Product available' or 'Out of stock' depending on the relevant key in the object
- `order(quantity)` - the method should return information on the total purchase price of a given `quantity` of products. If the value of `quantity` exceeds the quantity in stock, the method should return `false`. It must also modify the value of `this.quantity` accordingly and if it reaches `0`, the method must also set `this.inStock` to `false`.

Then create a class named `Shoes` which will inherit from `Product`. It should **additionally** create in the constructor:

- `colors` - shoe color array (empty at the beginning)
- `sizes` - shoe size array (at the beginning: `35`, `36`, `37`, `38`, `39`, `40`, `41`, `42`, `43`, `44`)

The `Shoes` class should also have two additional methods:

- `addColor(color)` - adds the appropriate color to the `this.colors` array (use a spread operator)
- `removeSize(size)` - removes the given size from the `this.sizes` array (use the iterative method `filter`)

Test the operation of the classes by executing the following or your own imaginary code.

```js
const adidas = new Shoes("Adidas", 299.99, true, 40);

console.log(adidas.isInStock()); // Product available
console.log(adidas.order(30)); // 8999.7
console.log(adidas.order(30)); // false
console.log(adidas.order(10)); // 2999.9
console.log(adidas.isInStock()); // Out of stock

adidas.addColor("red");
adidas.addColor("blue");
adidas.addColor("green");
console.log(adidas.colors); // ["red", "blue", "green"]

adidas.removeSize(38);
adidas.removeSize(40);
adidas.removeSize(43);
console.log(adidas.sizes); // [35, 36, 37, 39, 41, 42, 44]
```


## Task 4 - React
Do the task **using the React library**.

> ### Preparation
> Modify the `vite.config.js` file so that the `root` variable points to:
> - `04_Task_4`


Render the following elements in a **function** component named ```App```:
- `h1` with the text "Hello World!",
- `span` with the text "React Rules!".

The elements should be **direct** children of the main element in which we render the whole application - `#app`.


## Task 5 - React
Do the task **using the React library**.

> ### Preparation
> Modify the `vite.config.js` file so that the `root` variable points to:
> - `05_Task_5`



Create a **function component** named `UserDetails`. It should accept through `props`:

- Name `name`
- Surname `surname`
- Address ``address``
- Postal Code `postcode`
- City `city`

The component should render (example in `HTML`):

```html
<div class="card">
  <div>
    <h5>{Name} {Surname}</h5>
    <div>{Address}</div>
    <div>{Postal Code} {City}</div>
  </div>
</div>
```

Render this component with any chosen data.

**Remember to also create a function component `App` which will render the component for this task.**


## Task 6 - React
Do the task **using the React library**.

> ### Preparation
> Modify the `vite.config.js` file so that the `root` variable points to:
> - `06_Task_6`



Import the array of objects located in `js/data/products.js` under the variable `products`.

Create three components: `App`, `Products`, `Item`.

Component `App` should pass the imported product list to the `Products` Component through `props` (`props` should be named `products`).

The `Product` component should render `h2` heading with the string "Products", and a `ul` list with its `Item` components. The `Product` component should pass to those `Item` components the values `name` and `price` from each object of the `products` array. This must be done automatically through an iterative method you know.

The `Item` component should render a `li` element with data received via `props`, e.g. `{name}, Price: {price}`.

In the final result the following construction should appear (in square brackets it is indicated which `props` the component should receive and what type the props should be):

```plain
App
 |_Products [products: Array]
      |_Item [name: String, price: Number]
      |_Item [name: String, price: Number]
      |_Item [name: String, price: Number]
      |_Item [name: String, price: Number]
      |_Item [name: String, price: Number]
```
