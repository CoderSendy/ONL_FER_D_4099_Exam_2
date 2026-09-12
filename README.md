![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)

# Důležité informace

Před zahájením cvičení si přečtěte následující pokyny.

## Jak začít?

1. Vytvořte [*fork*](https://guides.github.com/activities/forking/) repozitáře se cvičeními.
2. Naklonujte repozitář do svého počítače příkazem: `git clone repository_address`.
   Adresu repozitáře najdete po kliknutí na tlačítko "Clone or download" na jeho webové stránce.
3. Vypracujte cvičení a změny do svého repozitáře commitněte pomocí níže uvedených příkazů.
   `git add filename` přidá jeden soubor, který jste změnili.
   Chcete-li přidat všechny změněné soubory najednou, použijte `git add .`.
   Pamatujte, že tečka na konci tohoto příkazu je důležitá!
   Poté změny commitněte příkazem `git commit -m "description_of_changes"`.
4. Změny odešlete do svého repozitáře na GitHubu příkazem: `git push origin main`.
5. Po dokončení všech cvičení vytvořte [*pull request*](https://help.github.com/articles/creating-a-pull-request) do původního repozitáře.

### Cvičení vypracovávejte v příslušných souborech.

**Repozitář se cvičeními bude odstraněn 2 týdny po skončení kurzu. To povede k odstranění všech forků vytvořených z tohoto repozitáře.**


## Task 1 - ES6

Při plnění tohoto úkolu **nepoužívejte knihovnu React**.

> ### Příprava
>
> Upravte soubor `vite.config.js` tak, aby variable `root` ukazovala na:
>
> - `01_Task_1`


Vytvořte function `without`, která přijímá neomezený počet arguments (použijte vhodný operator). První argument (`data`) bude array celých čísel. Po něm může následovat neomezený počet dalších arguments.

Function má vrátit **nový array**, z nějž budou odstraněny values předané v dalších arguments. K vyřešení úkolu použijte vhodné **array functions**.

### Příklad

```js
const data = [1, 2, 3, 4, 5];

console.log(without(data, 1, 2)); // [3, 4, 5];
console.log(without(data, 5, 3)); // [1, 2, 4];
console.log(without(data, 1, 2, 3, 4)); // [5];
console.log(without(data)); // [1, 2, 3, 4, 5];
console.log(without(data, 1, 2, 3, 4, 5)); // [];
```


## Task 2 - ES6

Při plnění tohoto úkolu **nepoužívejte knihovnu React**.

> ### Příprava
>
> Upravte soubor `vite.config.js` tak, aby variable `root` ukazovala na:
>
> - `02_Task_2`


V souboru připraveném pro tento úkol najdete array uživatelů (variable `users`).

> Pro všechny operace nad data array použijte **array methods**.

Vytvořte function `parseUserData`, která jako argument přijímá **array** (ve variable `data`), a následně:

- vyfiltrujte výsledný array tak, aby v něm zůstali pouze uživatelé, kteří mají v key `language` value `French`,
- pomocí vhodné array method změňte strukturu jednotlivých objects tak, aby obsahovaly následující data (použijte destructuring):
  - `id`,
  - `fullName`: `firstName` `lastName` (jméno a příjmení musí být oddělené mezerou),
  - `email`,
  - `nin`,
- seřaďte je podle key `nin` vzestupně.

Function musí vrátit kompletně připravený array podle níže uvedené specifikace:

### Očekávaný výsledek:

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
Při plnění tohoto úkolu **nepoužívejte knihovnu React**.


> ### Příprava
> Upravte soubor `vite.config.js` tak, aby variable `root` ukazovala na:
> - `03_Task_3`




Vytvořte abstract class `Product` s constructorem, který přijímá následující parameters:

- `name` - název produktu
- `price` - cena produktu
- `inStock` - value `true`/`false`, která určuje, zda je produkt skladem
- `quantity` - množství skladem

Měla by také obsahovat následující methods:

- `isInStock()` - vrací text 'Product available' nebo 'Out of stock' podle příslušného key v objectu
- `order(quantity)` - method má vrátit informaci o celkové ceně nákupu zadaného `quantity` produktů. Pokud value `quantity` překročí množství skladem, method musí vrátit `false`. Musí také odpovídajícím způsobem upravit value `this.quantity`, a pokud dosáhne `0`, musí zároveň nastavit `this.inStock` na `false`.

Poté vytvořte class `Shoes`, která bude dědit z `Product`. V constructoru má **navíc** vytvořit:

- `colors` - array barev bot (na začátku prázdný)
- `sizes` - array velikostí bot (na začátku: `35`, `36`, `37`, `38`, `39`, `40`, `41`, `42`, `43`, `44`)

Class `Shoes` má mít také dvě další methods:

- `addColor(color)` - přidá zadanou barvu do array `this.colors` (použijte spread operator)
- `removeSize(size)` - odstraní zadanou velikost z array `this.sizes` (použijte iterativní method `filter`)

Otestujte fungování classes spuštěním následujícího nebo vlastního ukázkového code.

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
Úkol vypracujte **pomocí knihovny React**.

> ### Příprava
> Upravte soubor `vite.config.js` tak, aby variable `root` ukazovala na:
> - `04_Task_4`


Ve **function component** pojmenované ```App``` vyrenderujte následující elements:
- `h1` s textem "Hello World!",
- `span` s textem "React Rules!".

Elements musí být **direct** children hlavního elementu, do kterého renderujeme celou aplikaci — `#app`.


## Task 5 - React
Úkol vypracujte **pomocí knihovny React**.

> ### Příprava
> Upravte soubor `vite.config.js` tak, aby variable `root` ukazovala na:
> - `05_Task_5`



Vytvořte **function component** s názvem `UserDetails`. Prostřednictvím `props` má přijímat:

- jméno `name`
- příjmení `surname`
- adresu `address`
- PSČ `postcode`
- město `city`

Component má vyrenderovat (příklad v `HTML`):

```html
<div class="card">
  <div>
    <h5>{Name} {Surname}</h5>
    <div>{Address}</div>
    <div>{Postal Code} {City}</div>
  </div>
</div>
```

Vyrenderujte tento component s libovolně zvolenými daty.

**Nezapomeňte také vytvořit function component `App`, který vyrenderuje component pro tento úkol.**


## Task 6 - React
Úkol vypracujte **pomocí knihovny React**.

> ### Příprava
> Upravte soubor `vite.config.js` tak, aby variable `root` ukazovala na:
> - `06_Task_6`



Naimportujte array objects umístěný v `js/data/products.js` do variable `products`.

Vytvořte tři components: `App`, `Products`, `Item`.

Component `App` má předat naimportovaný seznam produktů component `Products` prostřednictvím `props` (`props` se má jmenovat `products`).

Component `Product` má vyrenderovat heading `h2` se stringem "Products" a list `ul` se svými components `Item`. Component `Product` má těmto components `Item` předat values `name` a `price` z každého objectu array `products`. Musí se to provést automaticky pomocí známé iterativní method.

Component `Item` má vyrenderovat element `li` s daty přijatými přes `props`, například `{name}, Price: {price}`.

Ve výsledku se má objevit následující struktura (v hranatých závorkách je uvedeno, jaké `props` má component přijímat a jaký mají mít type):

```plain
App
 |_Products [products: Array]
      |_Item [name: String, price: Number]
      |_Item [name: String, price: Number]
      |_Item [name: String, price: Number]
      |_Item [name: String, price: Number]
      |_Item [name: String, price: Number]
```
