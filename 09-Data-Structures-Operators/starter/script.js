'use strict';

// // /////////////////////////////////////////////////////////////////////////
// console.log('--------- Looping Objects Object Keys, Values, and Entries--------');

// //*  Looping Objects Object Keys, Values, and Entries

// //* Object.keys - KEY NAMES
// const restHours = Object.keys(openingHours);
// console.log(restHours);

// let openStr = `We are open ${restHours.length} days: `

// //* like a for loop with that the counter stay 1++

// for (const day of restHours) {
//   openStr += `${day},`;
//   console.log(openStr);
//   console.log(day);
//   console.log(`take me to thre rest on ${day}`);
// }
// console.log(openStr);

// let lotoNum = [31,32,24,25,67,81];
// for (const loto of lotoNum) {
// let lotoSum = loto+10
// console.log(lotoSum);
// }

// //* Object.values - Obj Values
// const restHoursValues = Object.values(openingHours)
// console.log(restHoursValues);

// for (const {open,close} of restHoursValues) {
//   console.log(open,close);
//   console.log(`we are open the rest on ${open}, till ${close} `);
// }

// //* Object.values - Obj entries
// const restOpen = Object.entries(openingHours);
// console.log(restOpen);

// for (const [key, {open,close}] of restOpen) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }



// // /////////////////////////////////////////////////////////////////////////
// console.log('--------- Optional Chaining--------');

// //* Optional Chaining

// if (restaurant.openingHours.sat) {
//   console.log(restaurant.openingHours.sat.open);
// }

// //* WIITHOT Optional Chaining

// //* console.log(restaurant.openingHours.mon.open); - We will get an error

// //* WIITH Optional Chaining
// //* if the value after the question mark not exsist: we will get undefined 
// //* if we have 0 or empty string
// console.log(restaurant.openingHours.mon?.open);

// console.log(restaurant.openingHours?.mon?.open);

// //example
// const days = ['sun','mon','tue','wed','thu','fri','sat']
// for (const day of days) {

//   //objectName["propertyName"] OR objectName.propertyName
//   const openRest = restaurant.openingHours[day]?.open ?? 'colsed';
//   if(restaurant.openingHours[day]?.open >=0 ){
//     console.log(`on ${day} we open at: ${openRest}`);}
//     else{
//       console.log(`on ${day} we closed`);
//     }
// }



// //* Looping Arrays The for of Loop
// console.log('--------- Looping Arrays The for of Loop--------');

// const newMenu = [...restaurant.starterMenu,...restaurant.mainMenu]
// for (const item of newMenu)
// console.log(item);
// for (const item of newMenu.entries()) {
//   console.log(`${item[0]+1}:${item[1]}`);
// }
// //* (method) Array<string>.entries(): IterableIterator<[number, string]>
// //* Returns an iterable of key, value pairs for every entry in the array
// console.log([...newMenu.entries()]);
// for (const [i,el] of newMenu.entries()) {
//   console.log(`${i+1}:${el}`);
// }
// /////////////////////////////////////////////////////////////////////////

// // Logical Assignment Operators
// console.log('--------- Logical Assignment--------');

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// }

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Daniel Gabay',
// }

// //* OR  - return the first truthy value or set the defalut value if it's falsy
// //* long way:
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest1, rest2);

// //* shortcut:
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 150;
// console.log(rest1, rest2);

// //* AND
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// console.log(rest1, rest2);

// //* shortcut:
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';
// console.log(rest1, rest2);

// /////////////////////////////////////////////////////////////////////////
// //The Nullish Coalescing Operator ( )
// console.log('--------- Nullish Operator ??--------');

// restaurant.numWorkeres = 6;
// let numWorkers = restaurant.numWorkeres || 10;
// console.log(numWorkers);

// //Nulish: null and undefined (NOT "" or 0)
// numWorkers = restaurant.numWorkeres ?? 10;
// console.log(numWorkers);


// // /////////////////////////////////////////////////////////////////////////
// //* Modern Operators || &&
// //*  Use any DATA type, return ANY Data type, Short Circuiting
// //* || return the first truthy value or the last element
// console.log('---------OR ||--------');
// console.log(0 || 'Daniel');
// console.log("" || 'Daniel');
// console.log(undefined || null);
// console.log(undefined || 0 || "" || 'Hello' || 23 || null);

// //Practical we can use OR || set defalut values

// //  if the key exsit ? take his value if not: set the default value
// restaurant.guests = 0;
// let restGuests = restaurant.guests ? restaurant.guests : 10;
// console.log(restGuests);

// //insted we can write it like this:
// restGuests = restaurant.guests || 10;

// restaurant.guests = 50;
// restGuests = restaurant.guests || 10;
// console.log(restGuests);

// //add new object inside exsist object
// restaurant.guests = {
//   day: 30,
//   night: 40
// }
// console.log(restaurant);


// // Practical we can use OR || set defalut values
// // || return the first truthy value or the last element
// // && return the first falsey value  or the last element if all
// console.log('---------AND &&--------');
// console.log(0 && 'Daniel');
// console.log(7 && 'Daniel');
// console.log('Hello' && 23 && null && 'Daniel');


// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mushrroms', 'Oninon')
// }

// //Practical we can use AND && for execute code in the second operand if the first one is true
// restaurant.orderPizza && restaurant.orderPizza('Olives', 'Corn')
// //

// /////////////////////////////////////////////////////////////////////////

// //Rest Pattern and Parameters

// //Spread = expand an array into individual elements
// //Rest Pattern = collect elemnts into array 
// console.log('--------- Rest (...) packing array and obj--------');

// // sprread, because RIGHT side
// const arr3 = [17, 18, 19, 20]
// const arr2 = [1, 2, 3, 4, 5, ...arr3]
// console.log(arr2);

// //Rest because LEFT side
// const [a1, b1, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(a1, b1, others);

// const [pizza1, , risoto1, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza1, risoto1, otherFood);

// // objects
// const {
//   sat: sat1,
//   ...weekDays
// } = restaurant.openingHours;
// console.log(sat1, weekDays);

// // rest (...) with Functions
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'corn')
// const pizzaIng = ['mushrooms', 'onion', 'olives', 'corn']
// restaurant.orderPizza(...pizzaIng)


// // /////////////////////////////////////////////////////////////////////////

// // The Spread Operator (...)
// console.log('--------- Spread (...) unpacking array and obj--------');

// //add new elements to the array
// const array = [7, 8, 9, 10]
// //bad way
// const badNewArray = [1, 2, array[0], array[1], array[2]]
// //good way
// const goodNewArray = [1, 2, ...array]
// console.log(array);
// console.log(badNewArray);
// console.log(goodNewArray);

// //show the elements in the array individualy
// console.log(...goodNewArray);
// //it's like
// console.log(1, 2, 7, 8, 9, 10);

// //creating a new array by expending an old one and add him new elements
// const newMenuArray = [...restaurant.mainMenu, 'Gnocchi']
// console.log(newMenuArray[0]);
// //copy array
// const mainMenuCopy = [...restaurant.mainMenu]
// console.log(mainMenuCopy);

// //join 2 arrays
// const bigMenu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log(bigMenu);

// //iterables: arrays, strings,maps,sets NOT objects

// //expend strings to elements
// const str = 'Jonas';
// const letters = [...str];
// console.log(letters);

// //using spread operator on functions
// /*const ingredients = [prompt(`let's order your pasta. Extra 1?`),
//   prompt(`Extra 2?`),
//   prompt(`Extra 3?`)
// ];
// restaurant.orderPasta(...ingredients)*/

// //using spread operator on objects
// //creat a new object and add new elements

// const newRestObj = {
//   foundIn: '1991',
//   ...restaurant,
//   founder: 'Daniel Del Pierro'
// };
// console.log(newRestObj);

// // change name elements
// newRestObj.name = 'Gabay Pizza Italiano';
// console.log(newRestObj.name);
// console.log(restaurant.name);


// //Functions with rest (...)
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     console.log(sum);
//   }
// }

// add(20, 56)
// add(49, 31, 51, 68)
// const o1 = [50, 90, 80]
// add(...o1)



// // /////////////////////////////////////////////////////////////////////////////////////////

// const italianPizzaRest = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   pizzaTopings: ['green olives', 'black olives', 'mushrooms', 'corn', 'peppers', 'Onion', 'anshobi', 'eggplants', 'sweet potato', 'pineapple', 'feta cheese', 'mozzarella cheese', 'Fontina cheese', 'Parmesan cheese'],
//   pizzaSizes: ['s', 'm', 'l', 'xl'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   newCustomer: {
//     //this could be an Address instance if you wanted 
//     address: '2 Portola Plaza, Monterey, Ca, 93940',
//     firstName: 'Brandon',
//     lastName: 'Miller',
//     //where's that 555 number from?
//     email: 'brandon@diginow.it',
//     phone: '941-555-2368',
//     email: 'brandon@diginow.it'
//   }

// };

// // *TODO: todo list
// // * - highlight text
// // !- important information
// // @ - parameter
// // ? - querey
// console.log('-------------distructing Arrays-----------');
// // // * distructing Arrays - unpacking Arrays or Objects to seprate varibales

// //! bad and long way
// const arrOfNumbers = [2, 3, 4, 5];
// const a = arrOfNumbers[0]
// const b = arrOfNumbers[1]
// const c = arrOfNumbers[2]
// console.log(a, b, c);

// //* the right way
// const [x, y, z] = arrOfNumbers;
// console.log(x, y, z);
// //* adding space between the elemnts
// const [e, , f, g] = arrOfNumbers
// console.log(e, f, g);

// let [firstTop, secondtop] = italianPizzaRest.pizzaTopings;
// console.log(firstTop, secondtop);

// //* switching varibales
// [firstTop, secondtop] = [secondtop, firstTop]
// console.log(firstTop, secondtop);
// //* recive values from function and distructing them

// //Arrow Function  parametes return
// function orderFood(num1, num2) {
//   return [italianPizzaRest.mainMenu[num1], italianPizzaRest.starterMenu[num2]]
// }
// const [orderNum1, orderNum2] = orderFood(1, 2);
// console.log(orderNum1, orderNum2);

// //*Nested distructing
// const arrOfNumbers2 = [23, 45, 67, [123, 456, 789]]
// const [j, , k, l] = arrOfNumbers2;
// console.log(j, k, l);
// const [u, , o, [p1, p2, p3]] = arrOfNumbers2;
// console.log(u, o, p1, p2, p3);

// //*Defalut values
// let [j2, j3, j4, j5, j6, j7, j8] = arrOfNumbers2;
// //*! we wil get here undefined cause we entered more varibales than the arr's elements
// console.log(j2, j3, j4, j5, j6, j7, j8);
// //*!we can use default values
// [j2, j3, j4, j5, j6 = 1, j7 = 1, j8 = 1] = arrOfNumbers2;
// console.log(j2, j3, j4, j5, j6, j7, j8);

// console.log('-------------distructing OBjects-----------');

// //* distructing objects
// const {
//   name: restName,
//   openingHours,
//   categories
// } = italianPizzaRest;
// console.log(restName, openingHours, categories);

// //*set default values
// const {
//   menu = [], starterMenu: starters
// } = italianPizzaRest
// console.log(menu, starters);

// //*mutating varibales
// let t = 10;
// let t2 = 20;
// const objOfNumbers = {
//   t: 23,
//   t2: 34,
//   c: 56
// };

// //! we MUST use the ORIGINAL NAME of the Obj's Key!!



// //*nested objects
// const {
//   fri: {
//     open: oTime,
//     close: cTime
//   }
// } = italianPizzaRest.openingHours
// console.log(oTime, cTime);

// //* distrcuting obj with function
// const pizzaOrder = {
//   name: 'Daniel Gabay',
//   adress: 'Meshek 65',
//   city: 'Geulim',
//   ordered: 'Pizza with olives and mushrooms'
// }

// function takeOrder({
//   name,
//   adress,
//   city,
//   ordered
// }) {
//   console.log(`${name} from ${adress},${city} ordered:${ordered} `);
// }
// takeOrder(pizzaOrder);

// ///////////////////////////////////////////////////////////////////////////
// console.log('--------- Sets--------');
// //! A JavaScript Set is a collection of unique values.
// //! Each value can only occur once in a Set. 
// //! A Set can hold any value of any data type.

// const takingOrder = new Set(['pizza', 'pasta', 'rissoto', 'ice-cream', 'pizza', 'pasta', 'rissoto', 'pizza', 'pasta'])
// console.log(takingOrder);


// //set methods:
// takingOrder.add('bread');
// takingOrder.add('bread');
// takingOrder.delete('rissoto');
// //takingOrder.clear();
// console.log(takingOrder);

// const restPosition = ['waiter', 'waiter', 'waiter', 'chef', 'chef', 'manager']
// //loop over set values
// for (const position of restPosition)
//   console.log(position);
// const restPositionUniqe = [...new Set(restPosition)]
// console.log(restPositionUniqe);
// console.log(new Set(['waiter', 'waiter', 'waiter', 'chef', 'chef', 'manager']).size);

// console.log(typeof takingOrder);



// ///////////////////////////////////////////////////////////////////////

// console.log('--------- Maps--------');
// //! A Map holds key-value pairs where the keys can be any datatype.
// //! A Map remembers the original insertion order of the keys.
// //! A Map has a property that represents the size of the map.


// //* create a Map by passing an Array to the new Map()
// const fruits = [
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]

// const fruitsMap = new Map(fruits)
// console.log(fruitsMap);
// console.log(fruitsMap.get('apples')); //* return 500

// //*add elements to a Map with the set() method
// const newFruitsMap = new Map() //* it always better creat an empty Map

// newFruitsMap
// .set('mango', 400)
// .set('kiwi', 900)
// .set(true, 'The fruits store is open right now 😁')
// .set(false, 'The fruits store is close right now 😢') //* able to declare a key name only once.
// .set(true, 'Fresh fruits Arrived 😁')
// .set(false, 'We out off goods 😢')
// console.log(newFruitsMap);

// console.log(newFruitsMap.get(true));
// //*convert Objects to map
// console.log(Object.entries(italianPizzaRest));
// const newRestMap = new Map(Object.entries(italianPizzaRest))
// console.log(newRestMap);



// //*quizzApp

// const question = new Map([
//   ['question1', 'What is the best programming language in the world?'],
//   [1,'C'],
//   [2,'Java'],
//   [3,'Python'],
//   [4,'JavaScript'],
//   [true, 'Correct!😁'],
//   [false,'Try again!😕']
// ]);
// console.log(typeof question.get(4));
// console.log(question.keys());


// console.log(typeof question.get('question1'));
// for(const [key,value] of question){
//   // console.log(typeof key,value);
//   if (typeof key === 'number'){
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// const answer = 3;
// console.log(answer);
// if (answer === 3) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }



// //* convert a map back to array
// const questionBackToArr =  [...question];
// console.log(questionBackToArr);




// //* 1. creat function that insert all the pizza toping to a checkboxes
// //* 2. insert munally all the pizza sizes to the multiple choices html's elements
// //* 3  creat a function that takes all the fieleds names and the values from the orderForm 
// //* 4. creat an empty obj and store the names and values inside him by 'key:value'
// //* 5. insert the obj to the function as a parameter
// //* 6 . print the order detailes on a new paragraph


// // elements:
// //*1.
// let topingPizzaDiv = document.querySelector('#topingPizza');
// for (let i = 0; i < italianPizzaRest.pizzaTopings.length; i++) {
//   topingPizzaDiv.innerHTML += `
//   <div class="form-check">
//   <input class="form-check-input" type="checkbox" value="Green Olives" id="flexCheckDefault${[i]}">
//   <label class="form-check-label" for="flexCheckDefault">
//   ${italianPizzaRest.pizzaTopings[i]}</label>
//   </div>`
// }

// let newCustomer = {};
// let inputFirstName = document.querySelector('#firstName');
// let inputLastName = document.querySelector('#lastName');
// let inputAddress = document.querySelector('#address');
// let inputCity = document.querySelector('#city');
// let inputEmail = document.querySelector('#email');
// let inputPizzaSize = document.querySelector('#pizzaSize');
// let submitOrderBtn = document.querySelector('#submitOrderBtn');
// let flexCheckDefault = document.querySelector('#flexCheckDefault0');

// submitOrderBtn.addEventListener('click', function () {
//   console.log('button was clicked');
//   newCustomer[inputFirstName.getAttribute('id')] = inputFirstName.value;
//   newCustomer[inputLastName.getAttribute('id')] = inputLastName.value;
//   newCustomer[inputAddress.getAttribute('id')] = inputAddress.value;
//   newCustomer[inputCity.getAttribute('id')] = inputCity.value;
//   newCustomer[inputEmail.getAttribute('id')] = inputEmail.value;
//   newCustomer[inputPizzaSize.getAttribute('id')] = inputPizzaSize.value;
//   flexCheckDefault.checked === true ? newCustomer[topingPizzaDiv.getAttribute('id')] = flexCheckDefault.value : console.log(`OK`)
// })
// console.log(newCustomer);





// // function takeOrder({
// //   name,
// //   adress,
// //   city,
// //   ordered
// // }) {
// //   console.log(`${name} from ${adress},${city} ordered:${ordered} `);
// // }
// // takeOrder(newCustumerObj);


// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');

// // const openModal = function () {
// //   modal.classList.remove('hidden');
// //   overlay.classList.remove('hidden');
// // };

// // const closeModal = function () {
// //   modal.classList.add('hidden');
// //   overlay.classList.add('hidden');
// // };

// // for (let i = 0; i < btnsOpenModal.length; i++)
// // btn btn-primary.addEventListener('click', openModal);
// // btnCloseModal.addEventListener('click', closeModal);
// // overlay.addEventListener('click', closeModal);

// // document.addEventListener('keydown', function (e) {
// //   // console.log(e.key);

// //   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
// //     closeModal();
// //   }
// // });



// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'
//   ],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //*! Coding#1
// //* 1.
// const [player1, player2] = game.players;
// console.log(player1, player2);
// //* 2.

// const [gk, ...fieldsPlayer] = [...player1];
// console.log(gk);
// console.log(fieldsPlayer);

// //* 3.
// const allPlayers = [...player1, ...player2]
// console.log(allPlayers);

// //* 4.
// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic']
// console.log(players1Final);

// //* 5.
// const {
//   team1,
//   x: draw,
//   team2
// } = game.odds;
// console.log(team1, draw, team2);

// //* 6.
// function printGoals(...player) {
//   console.log(player);
//   for (let i = 0; i < player.length; i++) {
//     console.log(`${player[i]} has scored !!! total goalas been scored:  ${i+1}`);
//   }
// }
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
// printGoals(...game.scored)

// // *7
// // && return the first falsey value  or the last element if all
// team1 < team2 && console.log(`Team 1 is more likel to win!`);
// // || return the first truthy value or the last element
// team1 > team2 || console.log(`Team 2 is more likel to win!`);


// //*! Coding#2
// //* 1.
// for (let i = 0; i < game.scored.length; i++) {
//   console.log(`⚽⚽ Goal number ${i+1} scored by ${game.scored[i]} `);
// }

// //* 2.
// let oddsAvg = 0;
// for (let val of Object.values(game.odds)) {
//   oddsAvg += val
// }
// oddsAvg /= 3;
// console.log(oddsAvg);

// //* 3.

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }



// // *! BONUS

//  const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);


// //*! Coding#3

// //* 1
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92,'🔶 Yellow card'],
// ]);

// //*2 

// const backToArr = [...gameEvents];
// let eventsSet = new Set([]);
  
// for (let i = 0; i < backToArr.length; i++) {
//    eventsSet.add(backToArr[i][1])
// }
// console.log(eventsSet);
// //*3
// gameEvents.delete(64)
// console.log(gameEvents);

// //*4 
// console.log(`An event happened, on
// average, every ${90/gameEvents.size} minutes`);
// //*5 
// for (let i = 0; i < backToArr.length; i++) {
//   let [key,value] = backToArr[i];
//   let firstOrSeconed = (key<='45') ? '[FIRST-HALF]: ' : '[SECONED-HALF]: '
//   console.log(`${firstOrSeconed} ${key} : ${value}`);
// }

// console.log([...gameEvents.entries()]);
// console.log([...gameEvents.keys()]);
// console.log([...gameEvents.values()]);

// console.log([...gameEvents]);
// console.log(...gameEvents.values());

/////////////////////////////////////////////////////////////////////////////////////////////////

//* Working with Strings
const airLine = 'Israel air line company: El-Al';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
//* same as:
console.log('A320'[0]);

console.log(airLine.length);
//* same as:
console.log('El-Al'.length);

//* string methods
//*! indexOf method
//* first use position on the string
console.log(airLine.indexOf('l')); //*! outPut: '1' cause string are zero based!
//* last use position on the string
console.log(airLine.lastIndexOf('l')); //*! outPut: '4' cause "-" also counts
//*  word starting position on the string
console.log(airLine.indexOf('Al')); //*! outPut: '1' cause string are zero based!

//* slice() method =  string.Slice(start,end)
                                          //*0 1 2 3 4 5 6 7 
console.log(airLine.slice(4,7));// output: 'I s r a e l   air line company: El-Al';
                                           //*START>      END(mot include)
console.log(airLine.slice(0,airLine.indexOf(' ')));
console.log(airLine.slice(0,airLine.lastIndexOf(' ')+1));
                                           //*0 1 2 3 4 5 6 7 
console.log(airLine.slice(1,-7));// output: 'I s r a e l   air line company: El-Al';
                                          //*START>      END(mot include)

//* using string methods with FUNCTIONS
//* function that checking your place in the plane
function checkMiddleSeat(seat) {
  //*! B or E are in the middle
  const s = seat.slice(-1);
  if( s === 'B' || s ==='E'){
    console.log(`Sorry yor place is in the middle😢`);
  }else {
    console.log(`You got luckey 😎`);
  }
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//*! behid the seacnes javaScript convert the string to an String Object
console.log(new String('Daniel'));
console.log(typeof new String('Daniel'));


console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

//* Fix capitalization in name
const passanger = 'DaNiEl';
const passangerLower = passanger.toLowerCase();
const passangerCorrect = passangerLower[0].toUpperCase()+passangerLower.slice(1);
console.log(passangerCorrect);

//* checking email
const email = 'hello@daniel.co.il';
const loginEmail =' Hello@Daniel.co.il';
const normalaizedEmail = loginEmail.toLowerCase().trim();
console.log(normalaizedEmail);
console.log(email === normalaizedEmail);

//* replacing strings
const priceGB = '288,97€';
const priceUS = priceGB.replace('€','$').replace(',','.');
console.log(priceUS);

const callForpassanger ='Boarding to 12RT flight to India is on door 23';
console.log(callForpassanger.replace('door','gate'));
console.log(callForpassanger.replaceAll('door','gate'));

//*Methods that returns Booleans
const planeA = 'A32NEW';
console.log(planeA.includes('A32'));
console.log(planeA.includes('Boeing'));
console.log(planeA.startsWith('A32'));
console.log(planeA.startsWith('NEWA32'));
console.log(planeA.endsWith('NEWA32'));
console.log(planeA.endsWith('NEW'));

function checkBaggage(items){
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed enter the board!');
  }else {
    console.log(`Welcome aboard!`);
  }
}
checkBaggage('I have a laptop,some Food and pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//* splite method = Split string using separator and return him as an array.
console.log('a+very+nice+string'.split('+'));
console.log('Daniel Gabay'.split(' '));
const [firstName,lastName] = 'Daniel Gabay'.split(' ');
let fullName;
//* Join method = Adds all the elements of an array into a string, separated by the specified separator string. 
let newName =['Mr.',firstName,lastName.toUpperCase(),fullName = firstName[0].toUpperCase()+firstName.slice(1)+' '+lastName]
console.log(newName);
newName = ['Mr.',firstName,lastName.toUpperCase()].join(' ')
console.log(newName);

const capitalizationNames = function (name) {
  let capital = name.split('_');
  console.log(capital);
  // let nameUpper = [];
  // for( let n of capital){
  //   //* nameUpper.push(n[0].toUpperCase()+ n.slice(1)) ==> option1
  //   nameUpper.push(n.replace(n[0], n[0].toUpperCase()))
  // }
  //  console.log(nameUpper.join(' ')
  // ); 
}
capitalizationNames('daniel_gabay');
capitalizationNames('diego armando maradonna');  
capitalizationNames('yakir asor');

//* padding start/end methods
//* Pads start the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.

const msg = 'Go to gate 21!';
console.log(msg.padStart(25,'+').padEnd(36,'+'));

//* Pads ends Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.

const maskCreditCard = function (number) {
  let convertToStr = String(number); //* number + '' ; value + string = string
  const lastFourDigits = convertToStr.slice(-4);
  return lastFourDigits.padStart(convertToStr.length,'+')
}
console.log(maskCreditCard('1234 1234 7823 9023'));
console.log(maskCreditCard(123456678987645));

//* Repeat method
const msg2 = 'Bad weather... All departues Delayed... ';
console.log(msg2.repeat(5));
 const planesInlines = function (number) {
  console.log(` there are ${number} Airplanes inline ${'✈'.repeat(number)}`);
 }
 planesInlines(5)
 planesInlines(4)
 planesInlines(3)
 planesInlines(2)
 planesInlines(1)



 //*! Coding #4
let count = 0;
 const pressBtn = document.querySelector('#pressBtn');
 const textAreaBox = document.querySelector('#exampleFormControlTextarea1');
 pressBtn.addEventListener('click',function() {
let convertValuesToArray = textAreaBox.value.split('\n');
console.log(convertValuesToArray);
for(let item of convertValuesToArray){
let indexNum = item.indexOf('_');
const itemLower = item.toLowerCase();
const itemCorrect = itemLower.slice(0,indexNum) + itemLower[(indexNum+1)].toUpperCase() + itemLower.slice(indexNum+2);
console.log(`${itemCorrect.padEnd(20)} ${'💎'.repeat(++count)}`);
}
 })

const flights = 
'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+Deprature;fao93766109;lis2323639855;12:30';
//* split to Arr
const convertFromStrtoArr = flights.split('+');
console.log(convertFromStrtoArr);
//* split
const newMapArr = convertFromStrtoArr.map(value => value.split(';'));
//* split the New arr into sprade arrays within 4 elemnts
console.log(newMapArr);
//* distruct the arrays elements to varibales
for(let [type,from,to,hour] of newMapArr){
  type.startsWith('_D') ? type = `👛${type.replace('_'," ")}`: ''; 
  type = type.replace('_'," ").trim()
from = from.slice(0,3).toUpperCase();
to = to.slice(0,3).toUpperCase();
hour = hour.replace(':','h')
  console.log(from,to,hour);
}
















