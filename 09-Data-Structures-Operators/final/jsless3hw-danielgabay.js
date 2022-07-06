'use strict';
// /////////////////////////////////////////////////////////////////////////
// console.log('--------- prac 1--------');
// /*// take input from the user
// const num1 = parseFloat(prompt("Enter first number: "));
// const num2 = parseFloat(prompt("Enter second number: "));
// const num3 = parseFloat(prompt("Enter third number: "));
// let largest;

// // check the condition
// if(num1 >= num2 && num1 >= num3) {
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }

// // display the result
// alert("The largest number is " + largest)
// console.log("The largest number is " + largest);

// // program to find the largest among three numbers

// // take input from the user
// const num4 = parseFloat(prompt("Enter first number: "));
// const num5 = parseFloat(prompt("Enter second number: "));
// const num6 = parseFloat(prompt("Enter third number: "));

// const largest2 = Math.max(num4, num5, num6);

// // display the result
// alert("The largest number is " + largest2)
// console.log("The largest number is " + largest2);
// */


// /////////////////////////////////////////////////////////////////////////
// console.log('--------- prac 2--------');

// /*const myName = prompt("Enter your name please: ");
// const num7 = parseFloat(prompt("choose a number between 1-50: "));
// const num8 = parseFloat(prompt("choose a seconed number between 1-50: "));*/

// /*function validData(){
//   while(true){   	  
//       let input =[prompt("Enter your name please: "),parseFloat(prompt("choose a number between 1-50: ")),parseFloat(prompt("choose a seconed number between 1-50: "))]

//       if (input == null || input.length<=0 || isNaN(input[1]) || isNaN(input[2])) {
//           // user hit invalid value
//               alert("Invalid input.");
//           return true;
//       }  else {
//               // user typed something valid and hit OK
//               return input;
//           }                
//       }                     
// }
// const checkData = validData()
// console.log(checkData);
// const [myName,num7,num8] = [...checkData]
// let sum = num7+num8

// if (sum >=50) {
//   alert(`Hello ${myName} the sum of numbers is greater or equals to 50`);
// } else {
//   alert(`Hello ${myName}, the sum of numbers is less than 50`);
// }

// /////////////////////////////////////////////////////////////////////////
// /*console.log('--------- prac 3--------'); 
// const num9 = parseFloat(prompt("choose a number between 0-100: "));
// const checkNum = (num9>=75)
// console.log(checkNum);*/

// /////////////////////////////////////////////////////////////////////////
// /*console.log('--------- prac 4--------'); 
// const num10 = parseFloat(prompt("choose a number between 1-50: "));
// const num11 = parseFloat(prompt("choose a seconed number between 1-50: "));
// const mathOp =prompt("Choose one math operator from this values: +, -, *, / ");

// if (mathOp ==='+') {
//   console.log(num10+num11);
// } else if (mathOp ==='-') {
//   console.log(num10-num11);
// } else if (mathOp ==='*') {
//   console.log(num10*num11);
// } else {
//   console.log(num10/num11);
// }

// /*
// const checkPrompt = [parseFloat(prompt("choose a number between 1-50: ")),prompt("Enter your name please: ")]
// console.log(...checkPrompt);

// if (checkPrompt == null || checkPrompt.length<=0 || isNaN(checkPrompt[0])) {
//   alert(`Invalid input, try again please`)
//   console.log(...checkPrompt);
// }
// else {
//   alert(`thank you for your answer!`)
//     console.log(...checkPrompt);
// }*/
// console.log('--------- prac 3--------');

// function getResult() {
//   console.log('button was clicked');
//   getValues()
// }

// function getValues() {
//   let firstNumber = parseInt(document.querySelector('#firstNumber').value)
//   console.log(firstNumber);
//   let operator = document.querySelector('#operator').value;
//   console.log(operator);
//   let seconedNumber = parseInt(document.querySelector('#seconedNumber').value)
//   console.log(seconedNumber)
//   validateInput(firstNumber, operator, seconedNumber)
// }

// function validateInput(firstNumber, operator, seconedNumber) {

//   if (!isNaN(firstNumber) && !isNaN(seconedNumber) && (operator === "+" || "-" || "*" || "/")) {
//     console.log('The user entered two numbers and a math operator!');
//     doCalculations(firstNumber, operator, seconedNumber);
//   } else {
//     alert(`Your first and second number are not a number please try again`);
//   };
// }

// function doCalculations(firstNumber, operator, seconedNumber) {
//   let calc;
//   if (operator === '+') {
//     calc = firstNumber + seconedNumber
//   } else if (operator === '-') {
//     calc = firstNumber - seconedNumber
//   } else if (operator === '*') {
//     calc = firstNumber * seconedNumber
//   } else {
//     calc = firstNumber / seconedNumber
//   }
//   doResult(calc)
// }

// function doResult(calc) {
//   let result = document.querySelector('#result');
//   result.innerText = calc;
// }

// const newStr = function (firstName,secondName) {
//   let welcomeMsg = `Welcome ${firstName} ${secondName}, you entered our new website!`
//   icq(welcomeMsg)
// }

// const icq = function (welcomeMsg) {
//   console.log(`${welcomeMsg} you can share our website to you friends`);
// }

// newStr('Daniel','Gabay')


// //Arrow function

// const arrowFunction = (num1,num2) => num2*num1;
// arrowFunction(8,2)

// const arrowFunction2 = function(num1,num2) {
//   let sum = num1*num2
//   return sum;
// }

// //seld invoking function

// // (function () {
// //   console.log("Hello! I called myself");
// // })();

// // // (function() {
// // //   console.log('i a self-invoking function!');
// // // })();


//1.)
const arrNumbers = [10, 20, 30, 40, 50];
for (let i = 0; i < arrNumbers.length; i++) {
  console.log(arrNumbers[i]);
}

//2.)
const arrNumbers2 = [10, 20, 30, 40, 50];
for (let i = arrNumbers2.length - 1; i >= 0; i--) {
  console.log(arrNumbers2[i]);
}

//3.)
let arrStar = [];
let starStr = "";
for (let i = 0; i < 5; i++) {
  arrStar[i] = starStr += '*';
  console.log(arrStar[i]);
}

//4.)
for (let i = arrStar.length - 1; i >= 0; i--) {
  console.log(arrStar[i]);
}

///////////////////////////////////////////////////
function dubleTwoNumbers(num1, num2) {
  return num1 * num2
}
console.log(dubleTwoNumbers(30, 3));

///////////////////////////////////////////////////


const arrowFunction2 = (num1, num2) => num2 * num1;
console.log(arrowFunction2(16, 14));

///////////////////////////////////////////////////

const dubleTwoNumbers2 = function (num1, num2) {
  return num1 * num2
}
console.log(dubleTwoNumbers2(120, 3));

///////////////////////////////////////////////////

function generateRandomNumber(randomNumber) {
  return randomNumber = Math.floor(Math.random() * randomNumber)
}
console.log(generateRandomNumber(89));

///////////////////////////////////////////////////

const tenNumbersArr = [];

for (let i = 0; i < 10; i++) {
  tenNumbersArr[i] = generateRandomNumber(89);
}
console.log(tenNumbersArr);
///////////////////////////////////////////////////

let myArr = [3, 12, -48, 26, 2, 44, 9, 0, -1, 27, 63, 8, 50];
let largest = 0;

function findTheBiggesetNumber(a) {
  for (let i = 0; i < a.length; i++) {
    //debugger
    if (myArr[i] > largest) {
      largest = myArr[i];
    }
  }
  console.log(largest);

}
findTheBiggesetNumber(myArr)
///////////////////////////////////////////////////


let divisibleThree = [];
for (let i = 0; i < 10; i++) {
  divisibleThree[i] = Math.floor(Math.random() * 101);
  if (divisibleThree[i] % 3 === 0) {
    console.log(divisibleThree[i]);
  } else {
    console.log(`the number ${divisibleThree[i]} don't divisible on 3 `);
  }
}
///////////////////////////////////////////////////

const divisibleByTwo = []
for (let i = 0; i < 10; i++) {
  divisibleThree[i] = Math.floor(Math.random() * 151);
  if (divisibleThree[i] % 2 === 0) {
    console.log(divisibleThree[i]);
  } else {
    console.log(`the number ${divisibleThree[i]} don't divisible on 2 `);
  }
}
///////////////////////////////////////////////////

let imagesArr = [
  "https://cutt.ly/hJSy1oJ",
  "https://cutt.ly/gJSul0B",
  "https://cutt.ly/rJSuSUX"
];

function showImageOnDom(img) {
  for (let i = 0; i < img.length; i++) {
    document.querySelector("#images").innerHTML += `<img src = "${imagesArr[i]}"></img>`
  }
}
showImageOnDom(imagesArr)

///////////////////////////////////////////////////

myArr = [3, 12, -48, 26, 2, 44, 9, 0, -1, 27, 63, 8, 50];
function sortArray(array) {
  let temp = 0;
  debugger
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    for (let j = i; j < array.length; j++) {
      console.log(array[j], array[i]);
      if (array[j] < array[i]) {
        temp = array[j];
        console.log(array[j], array[i],temp);
        array[j] = array[i];
        console.log(array[j], array[i]);
        array[i] = temp;
        console.log(array[j], array[i],temp);
        console.log(array);
      }
    }
  }
  return array;
}
console.log(sortArray(myArr));