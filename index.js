// Before you begin coding, be sure that you:
// a. Cleaned up the coffee_data.js file
// b. Connect the coffee_data.js file to this index.js file.

// Prompt 2:
// Print an array of all the drinks.

const coffeeMenu = require('./coffee_data');

console.log(coffeeMenu.map(item => item.name));

// Prompt 3
// Print an array of drinks that cost 5 and under.

const fiveAndUnder = coffeeMenu.filter(item => item.price <= 5);

console.log(fiveAndUnder);

// Prompt 4
// Print an array of drinks that are priced at an even number.

const evenPriced = coffeeMenu.filter (item => item.price % 2 === 0);

console.log(evenPriced);

// Prompt 5
// Print the total if you were to order one of every drink.

const totalPrice = coffeeMenu.reduce((sum, item) => sum + item.price, 0);

console.log(totalPrice);

// Prompt 6
// Print an array with all the drinks that are seasonal.

const seasonalDrinks = coffeeMenu.filter(item => item.seasonal)

console.log(seasonalDrinks);

// Prompt 7
// Print all the seasonal drinks with the words "with imported beans" after the item name.
// For example: "affogato with imported beans"

const seasonalDrinksWithBeans = coffeeMenu
    .filter(item => item.seasonal)
    .map(item => `${item.name} with imported beans`)

console.log(seasonalDrinksWithBeans);
