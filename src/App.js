import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

function Header (props) {
  return <h1>Shopping Cart
  </h1>
}

function Footer(props) {
  return <h2>{props.total}</h2>
}



// JUST SOME TESTING CODE. NOTHING TO DO WITH SHOPPING LIST //

// compare two objects with nested properties in JavaScript
const obj1 = {age: 45,  name: "Anne" };
const obj2 = {age: 55, name: "Jenson"}
 
if(JSON.stringify(obj1) === JSON.stringify(obj2)) {
  console.log("same");
} else { 
  console.log("not same");
}
console.log("-------------");

//get the current URL
console.log(window.location.href);
console.log(document.URL);
console.log("-------------");






// get the sum of even numbers if the sum of array elements is even and the sum of odd numbers if the sum of array elements is odd
// function getOddOrEvenSum(arr) {
//   var a = 0;
//   var b = 0;
 
//   arr.forEach(function(number) {
//     // place for code
//   });
//   // place for code
// }
// var arr = [1, 2, 3, 4, 5, 10, 11];
// console.log(getOddOrEvenSum(arr))


function getOddOrEvenSum(arr) {
  var a = 0; // sum of all numbers
  var b = 0; // sum of even numbers
 
  arr.forEach(
    
    function(number) 
    {
       a += number;
       if (number % 2 === 0) { b += number; }
    }

  );
 
  return (a % 2) ? a - b : b;
  // if(a % 2 ===0 ) { return a - b;}
  // else {  return b;}


}
 
var arr = [1, 2, 3, 4, 5, 10, 11];
console.log(getOddOrEvenSum(arr))
console.log("-------------");


// what is the output
// var i = 10;
var j = 1;
for(var i=1; i < 5; i++) {
  j++;
}
console.log(i);
console.log(j++);
console.log("-------------");




// Improve the code using ES6
// let person = {
//   name: 'Anna',
//   age: 56,
//   job: {
//     company: 'Tesco',
//     title: 'Manager'
//   }
// };
// function getInfo(person) {
//   var age = person.age,
//     yearOfBirth = 2018 - age,
//     name = person.name,
//     company = person.job.company;
//   console.log(`${ name } works at ${ company } and was born in ${ yearOfBirth }.`);
// }
// console.log("-------------");


function getInfo({
  age,
  name,
  job: {company}
}) {
  var yearOfBirth = 2018 - age;
  console.log(`${ name } works at ${ company } and was born in ${ yearOfBirth }.`);
}

getInfo( {age: 25, name: "Jan", job: {company: "IBM"} } );
console.log("-------------");


// function to find the sum number of array elements using reduce
const arr1 = [11, 29, 5]
var tot = arr1.reduce(
      (sum, num) => sum + num, 0
  );

console.log(tot);  
console.log("-------------");


// JavaScript function to check that two words are anagrams (formed by rearranging the letters of another)
function checkAnagrams(a, b) {
  return a.split('').sort().join('') === b.split('').sort().join('');
  // split() divides a string into substrings and returns them as an array.
  // sort() in alphabetical order
  // join() combines all array elements into a string.
  // check both a+b
}
console.log(checkAnagrams('cinema', 'iceman'));
console.log("-------------");


//add your method to the Array object so the following code would work?
// var arr3 = [1, 2, 3, 4, 5];
// var sum = arr3.sum();
// console.log(sum);

// Array.prototype.sum = function() {
//   return this.reduce(function(prev, cur) { return prev + cur; });
// }
console.log("-------------");


// check that variable is not undefined? How to check that a property exists in an object?



if (typeof someVar !== "undefined") {
  // do some stuff
  console.log("someVar not defined");
}

let myObject = {
  name: "bob",
  age: 21
}

// check property with inheritance
if ('name' in myObject) {
  // do some stuff
  console.log("isin myObject " + myObject.name);
}

// check property without inheritance
if (myObject.hasOwnProperty('age')) {
  // do some stuff
  console.log("hasOwnProperty " + myObject.name);
}
console.log("-------------");

//What is wrong with this code?
function checkTheYear(initYear, targetYear) {
  switch(targetYear) {
    case initYear - 30:
      console.log('I\'m sure in 1985, plutonium is available at every corner drugstore, but in 1955 it\'s a little hard to come by.');
      return true;
     case initYear - 100:
      console.log('A hundred years ago? But that\'s now!');
      return true;
     case initYear + 30:
      console.log('Nobody calls me chicken!')
             return true;
     default:
      console.log('Time traveling is just too dangerous. Better that I devote myself to study the other great mystery of the universe: women!');
      return false;
   }
 }
  
 function backToTheFuture(targetYear) {
   var timeMachine = {
     model: 'DeLorean DMC-12',
     initYear: '1985'
   }
   if(checkTheYear(timeMachine.initYear, targetYear)) {
    // execute the secret code for time travel to the targetYear
   }
 }

 backToTheFuture(1955);
 backToTheFuture(1885);
 backToTheFuture(2015);
 backToTheFuture(2020);
 console.log("-------------");


 //  3 code examples to check whether a string “Soshace” contains a substring “sh”
let string = "Soshace";
if (string.includes("sh") ) {
  console.log("includes");
}
if(string.indexOf("sh")){
  console.log("also includes");
}
if(string.match(/sh/g)) {
  console.log("this also");
}
 console.log("-------------");

// using Object.freeze
var user = {
 name: 'John',
  age: 35
}
 
Object.freeze(user)
 
// user.age = 36; // can't do this
console.log(user.age); // 35
console.log("-------------");




//update the sample to use previous object constructor
function Developer(experience) {
  this.experience = experience;
}
Developer.prototype = {
  skills: ['JavaScript']
};
 
let senior = new Developer(7);
let junior = new senior.constructor(1);
console.log( junior.experience ); // undefined

// the prototype has been replaced by a plain object and the original constructor is not available
// need to avoid replacing the prototype
 
function Developer2(experience) {
  this.experience = experience;
  this.skills = ['JavaScript']
}
 
let senior2 = new Developer2(7);
let junior2 = new senior2.constructor(1);

let master = new Developer2(18);
let junior3 = new Developer2(2);
 
console.log( junior2.experience ); // 1
console.log(senior2.experience, senior2.skills );
console.log(master.experience, master.skills );
console.log( junior3.experience ); // 2
console.log("-------------");


//recursive function to create a deep copy of the object
function cloneObject(obj) {
  var clone = {};
  for(var i in obj) {
      if(obj[i] != null &&  typeof(obj[i])=="object")
          clone[i] = cloneObject(obj[i]);
      else
          clone[i] = obj[i];
  }
  return clone;
}
var usr = {
  name: 'Ashley',
   age: 35,
   hair: 'blond'
 }

let newObj = cloneObject(usr);
console.log(newObj);

console.log("-------------");
 
//code samples for immutable operations using Object.assign and Spread  operator
// copying an object
const person = {
  name: 'James',
  age: 31,
  job: 'driver'
}
 
const newUser = Object.assign({}, person, {
  age: 35
})

console.log(newUser);
 
 const person2 = {
   name: 'James',
   age: 31,
   job: 'driver'
 }
  
 const newUser2 = {
   ...person2,
   age: 35,
   job: 'cook'
 }
 console.log(newUser2);
console.log("-------------");

//check if intiger

function verifyInt(num) {
  return num % 1 === 0;
}
console.log(verifyInt(10));
console.log(verifyInt(10.829));
console.log(Number.isInteger(123));
var cc = "123.4";
console.log(Number.isInteger(cc));
console.log("-------------");

// switch
function getFullPrice(type) {
  var ticket = 10,
  luggage = 7,
  service = 5,
  taxes = 3,
  price = taxes;

  switch(type) {
      case 'ticket':
    price += ticket;
    break;
      case 'luggage':
    price += ticket + luggage;
    break;
      case 'service':
    price += ticket + luggage + service;
    break;
    default:
      price += ticket + luggage + service;
  }

return price;
}
console.log(getFullPrice('ticket'));
console.log(getFullPrice('luggage'));
console.log(getFullPrice('service'));
console.log("-------------");

//code using operators “&&” , “||” and “?”
var aa = 10;
if(aa> 9 && aa< 11 ) {
  console.log("&& met");
}

if(aa !== null || aa !== undefined || aa !== ''){
  console.log(10);
}

function getFee(isMember) {
  return (isMember ==='Yes' ? '$2.00' : '$10.00');
}

console.log(getFee("Yes"));
console.log(getFee("No"));
console.log("-------------");

console.log(1.1 - 0.2);
// We can get the correct result using toFixed
console.log((1.1 - 0.2).toFixed(1));

console.log("-------------");


// find prime # ***
function isPrime(n) {

  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
  
    for (var i = 2; i < n; i++) {
      // console.log(i)
      if (n % i === 0) {
        return false;
      }
  
    }
    return true;
  }
}
console.log(isPrime(23));
console.log("-------------");

// find the greatest common divisor of two positive numbers ***
function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}
console.log(gcd(32, 24));


var gcdAlt = function(a, b) {
  if ( ! b) {    // if b = 0 then return a  if(b===0)
      return a;
  }
  // console.log(b + " " + a + " % " + b); 

  return gcdAlt(b, a % b);  // using recursion here to keep calling itself until it answers, keep getting remainders until zero
};
console.log(gcdAlt(2154, 458));
console.log("-------------");

let persons = {
  age: 30,
  name: 'John'
};
console.log(persons.hasOwnProperty("age")); // true
console.log(persons.hasOwnProperty("lastName")); // false, there is no such property
console.log(persons.hasOwnProperty("toString")); // false, it is inherited property


console.log("-------------");

// Data types that are known as primitive values in JavaScript are numbers, strings, booleans, null, undefined.
// Objects such as functions and arrays are referred to as non-primitive values. 
//The fundamental difference between primitives and non-primitives is that primitives are immutable and non-primitives are mutable.



console.log("-------------");

// can be created using syntax
let secretKey = Symbol("secretSymbol"); // “secretSymbol” is a description

let importantObject = {
  name: "public name"
}
importantObject[secretKey] = "some hidden data";
console.log("-------------");


// new Boolean("true") === true; // false, it’s an object
// Boolean("true") === true; // true, it’s a boolean



console.log("-------------");


// Clock ***
// function pad(symb) {
//   return String(symb).length === 1 ? '0' + symb : symb;
// }

// function clock() {
//   var time = new Date(),
//     hours = time.getHours(),
//     minutes = time.getMinutes(),
//     seconds = time.getSeconds();
//   return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
// }
// setInterval(function() {
//   console.log(clock());
// }, 1000);


console.log("-------------");

//remove elements from an array by criteria
function removeElements(arr, criteriaFunc) {
  var i;
  for (i = 0; i < arr.length; i++) {
    if (criteriaFunc(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

console.log(removeElements([1, 2, 5, 4, 6, 7, 3, 1, 5], function(number) {
  return number < 5;
}));


console.log("-------------");

// program to find the most frequent item of an array ***
const arrr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let mf = 1;
let m = 0;
let item;
for (let i=0; i<arrr1.length; i++)
{
        for (let j=i; j<arrr1.length; j++)
        {
                if (arrr1[i] === arrr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arrr1[i];
                }
        }
        m=0;
}
console.log(`${item} ( ${mf} times ) `) ;



console.log("-------------");

//  program to remove duplicate items from the char array. ***



const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
let unique = [...new Set(names)];
console.log(unique); // 'John', 'Paul', 'George', 'Ringo'


const nnames = ['John', 'Paul', 'George', 'Ringo', 'John'];
let x = (nnames) => nnames.filter((v,i) => nnames.indexOf(v) === i)
x(nnames); // 'John', 'Paul', 'George', 'Ringo'



const nnnames = ['John', 'Paul', 'George', 'Ringo', 'John'];
function removeDups(nnnames) {
  let unique = {};
  nnnames.forEach(
   function(i) {
       if(!unique[i]) {
        unique[i] = true;
       }
   }

  );
  return Object.keys(unique);
}
removeDups(nnnames); // // 'John', 'Paul', 'George', 'Ringo'
console.log("-------------");
// Fibonacci numbers Each subsequent number is the sum of the previous two

var fibonacci = function(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {

    var s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);

    return s;

  }
};
console.log("fibonacci ", fibonacci(7));


function fibonacci2(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    // console.log(num);
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

console.log(fibonacci2(7));



console.log("-------------");

//PROTOTYPE property is basically an object (also known as Prototype object), where we can attach methods and properties in a prototype object, 
//which enables all the other objects to inherit these methods and properties.


// SCOPE determines the accessibility (visibility) of these variables.
  // Local scope
  // Global scope


  //We can assign a method to the class function, not to its “prototype.” Such methods are called static.
  // Usually, STATIC methods are used to implement functions that belong to the class, but not to any particular object of it.
 

console.log("-------------");

// sum of the elements of an array if the nesting of the array is unknown

// using recursion
// function arraySum(arr) {
//   let sum = 0;
//   arr.map((item) => {
//       if (Array.isArray(item)) {
//           sum += arraySum(item);
//       } else {
//           sum += item;
//       }
//   });
//   return sum;
// }
// console.log(arraySum([[1, 2, [3, 4]], [9], [10, 12]]));


console.log("-------------");

// redirect browsaer
// window.location.replace("https://blog.soshace.com/en/");
//  window.location.href = "https://blog.soshace.com/en/";



console.log("-------------");

//Capturing phase – the event goes down to the element.

//Target phase – the event reached the target element.

//Bubbling phase – the event bubbles up from the element.

//Capturing and bubbling allow us to implement one of the most powerful event handling patterns called event delegation.

//The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.



console.log("-------------");
// random hex color
var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
console.log(randomColor);

var randomHexColor = function(){
	var color = '#', i = 5;
	do{ color += "0123456789abcdef".substr(Math.random() * 16,1); }while(i--);
	return color;
}
console.log(randomHexColor);

function pad(symb) {
  return String(symb).length === 1 ? '0' + symb : symb;
}
function randHex() {
  return pad(Math.floor(Math.random() * 256).toString(16));
}
function randHexColor() {
  return  '#' + randHex() + randHex() + randHex();
}
console.log(randHexColor());


console.log("-------------");

// require will automatically scan node_modules to find modules, but import , which comes from ES6, won't.


console.log("-------------");

//code to drag and drop an absolute positioned element.

// {/* <div id="square"></div>
// <style>
// #square {
//   background-color: red;
//   width: 20px;
//   height: 20px;
//   position: absolute;
// }
// </style>
// <script>
// var el = document.getElementById('square');
 
// el.onmousedown = function(event) {
 
//   el.style.position = 'absolute';
 
//   document.body.append(el);
 
//   moveAt(event.pageX, event.pageY);
 
//   function moveAt(pageX, pageY) {
//     el.style.left = pageX - el.offsetWidth / 2 + 'px';
//     el.style.top = pageY - el.offsetHeight / 2 + 'px';
//   }
 
//   function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);
//   }
 
//   document.addEventListener('mousemove', onMouseMove);
 
//   el.onmouseup = function() {
//     document.removeEventListener('mousemove', onMouseMove);
//     el.onmouseup = null;
//   };
 
// };
// <script> */}



console.log("-------------");

//benefits of debugging the script in the browser
// Watch: shows current values for any expressions 
// Call Stack: shows the nested calls chain
 // Scope: current variables


// set an environment variable in the npm script?
// package.json sample fragment for Linux and MacOS
// "scripts": {
//   "start": "node app.js",
//   "dev": "NODE_ENV=dev node app.js"
// },

// process.env.NODE_ENV

console.log("-------------");
//purposes can the global object console be used, besides logging?
// assert()  Writes an error message to the console if the assertion is false
// clear() Clears the console
// count() Logs the number of times that this particular call to count() has been called
// error() Outputs an error message to the console
// group() Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called
// groupCollapsed() Creates a new inline group in the console. However, the new group is created collapsed. The user will need to use the disclosure button to expand it
// groupEnd() Exits the current inline group in the console
// info() Outputs an informational message to the console
// log() Outputs a message to the console
// table() Displays tabular data as a table
// time() Starts a timer (can track how long an operation takes)
// timeEnd() Stops a timer that was previously started by console.time()
// trace() Outputs a stack trace to the console
// warn() Outputs a warning message to the console


// integrated development environment (IDE) is a software application that provides comprehensive facilities to computer programmers for software development. 
// good for:
// Syntax highlighting
// Linting
// Debugging
// Local server and hot reload
// Autocompletion
// Shortcuts
// Integration of Git, building tools, etc.

console.log("-------------");

// descructering "unpack” arrays or objects into a bunch of variables
let arry = ["John", "Doe"]
let [firstName, surname] = arry;
 
console.log(firstName); // John
console.log(surname);  // Doe

console.log("-------------");
// yield keyword is used to pause and resume a generator function (or legacy generator function)
function * generatorForLoop(num) {
  for (let i = 0; i < num; i += 1) {
    yield console.log(i);
  }
}
 
const genForLoop = generatorForLoop(5);
 
genForLoop.next(); // first console.log - 0
genForLoop.next(); // 1
genForLoop.next(); // 2



console.log("-------------");

// Rewrite the example using promise
// const printSec = (number, callback) => {
//   setTimeout(() => {
//       console.log(`${number} sec`)
//       callback()
//     },
//     1000)
// }
// printSec(1, () => {
//   printSec(2, () => {
//     printSec(3, () => {})
//   })
// })

// const printSec = (number) => {
//   return new Promise((resolve, reject) => {
//    setTimeout(() => {
//         console.log(`${number} sec`)
//         resolve()
//       },
//       1000)
//   })
// }
// printSec(1)
//   .then(() => printSec(2))
//   .then(() => printSec(3))

//   async function printAll(){
//     await printSec(1)
//     await printSec(2)
//     await printSec(3)
//   }
//   printAll()


console.log("-------------");
//examples in which ECMAScript languages ​​are used other than the browser and the web backend
// Adobe plugins (Photoshop, After Effects, etc.)
// Browser extensions
// IDE Plugins
// Microcontrollers (Arduino)

// What is the difference between REST API and GraphQL?
// Representational State Transfer is a software architectural style that defines a set of constraints to be used for creating Web services. Web services that conform to the REST architectural style, called RESTful Web services, provide interoperability between computer systems on the Internet.
// GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.


// What is PWA?
// Progressive Web Apps are websites that look and feel like an app, and are:

// Reliable – Load instantly
// Fast 
// Engaging – Feel like a natural app on the device

// What is SSR?
// Server-Side Rendering, also called SSR, is the ability of a JavaScript application to render on the server rather than in the browser.
// It allows your site to have a faster first page load time, which is the key to good user experience.


//storage in the browser.
//They are all browser-side storage to provide offline/cache mechanisms to web apps/sites:
//local storage:         simple key-value storage, the data is always stored as strings. The same data is accessible to all the pages of the domain and remains persistent even after closing the browser.
//session storage:       to one URL and one browser session (deleted on browser close
//SQL database (WebSQL): storage in a local DB, access by SQL requests.
//IndexedDB is a kind of local/sessionStorage, use to store JavaScript objects instead of only strings.

// Static Site Generators?
// Static site generators focus on one main task: generate a complete static HTML-based site. This result does not rely on databases or other external data sources and therewith avoid any server-side processing when accessing the website.

// common practice for type checking in JavaScript?
// We can use TypeScript or Flow:


// What is Lodash?
// A modern JavaScript utility library delivering modularity, performance & extras.
// Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
// Lodash’s modular methods are great for:
// Iterating arrays, objects, & strings
// Manipulating & testing values
// Creating composite functions

// Hybrid Mobile App?
// Hybrid apps mean developers only write code once that runs on multiple platforms. Also, it lets the developer reuse the code for developing web apps without any extra efforts.


// disadvantages of using jQuery with SPA?
// SPA frameworks have cross-browser support and ready-made functionality for manipulating DOM elements. Therefore, most of the jQuery functionality is not required. In addition, modern frameworks themselves create DOM elements during operation and also interact with a virtual DOM, which complicates the integration of solutions based on jQuery.

// popular libraries for data visualization.
// d3 – A JavaScript visualization library for HTML and SVG.
// three.js – JavaScript 3D library.]
// Chart.js – Simple HTML5 Charts using the tag.
// raphael – JavaScript Vector Library.
// morris.js – Pretty time-series line graphs.

// libraries for state management?
// Redux
// Vuex
// Mobx
// Ngrx

// List SPA (SINGLE PAGE APPLICATION) frameworks and libraries.
// Angular
// React
// Vue.js
// Ember.js
// Meteor
// Backbone.js

// List the libraries to making requests from the browser and Node.js?
// Popular ajax libraries (for browser requests):

// Fetch API
// Axios
// jQuery (ajax)
// Request library


// What is JWT?
// JSON Web Token (JWT) is a compact URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is digitally signed using JSON Web Signature (JWS).

// how to create push notifications?
// Push and notification use different, but complementary, APIs: push is invoked when a server supplies information to a service worker; a notification is the action of a service worker or web page script showing information to a user.


// What is Web Assembly?
// WebAssembly (WASM) is a binary instruction format which has been built to compile high-level languages such as C, C++, Java, Python and Rust. It allows deployment on the web and server applications.
// Users write the code in multiple languages to run it on the web. WebAssembly allows them to run the code on the web at a native speed.


// What is Websocket?
// WebSockets provide a persistent connection between a client and server that both parties can use to start sending data at any time.
// The client establishes a WebSocket connection through a process known as the WebSocket handshake. This process starts with the client sending a regular HTTP request to the server. An Upgrade header is included in this request that informs the server that the client wishes to establish a WebSocket connection.



// script to toggle the DOM element’s class “active” by clicking.
// <button id="click-me" class="btn">Click Me</button>
// <script type="text/javascript">
// var clickMeBtn = document.getElementById("click-me");

// clickMeBtn.addEventListener('click', function() {
//   clickMeBtn.classList.toggle('active');
// })
// </script>


 
// List primitive types in JavaScript
// The number type represents both integer and floating point numbers
// The string type must be surrounded by quotes
// The boolean type has only two values: true and false




console.log("-------------");




// repeat with the interval of 1 second
let intervalId = setInterval(  () => console.log('tick'),  1000);
// stop after 10 seconds 
setTimeout(() => { clearInterval(intervalId); console.log('stop'); }, 5000);

setTimeout(  function(){ console.log("Hello"); }, 1000);

let sayHi     = setInterval(   () => console.log('Hi'),  1000 );
console.log(sayHi);
// clearInterval(sayHi);
setTimeout(  () => {  clearInterval(sayHi); console.log('stop');   }, 5000   );


// END TESTING CODE //



function Items(props) {
  return <table>
    <thead>
    <tr><th>Name</th>
    <th>Count</th>
    <th>Price</th>
    <th>Total</th></tr>
    </thead>
    <tbody>
    {
      props.productItems.map(item=>
        <tr key={item.name}>
          <td>{item.name}</td>
          <td>{item.count}</td>
          <td>${item.price}</td>
          <td>${item.price*item.count}</td>
        </tr>
      ) 
    }
    </tbody>
   </table> 
}


class App extends Component {
  render () {
    
      const productItems = [
        {name: 'iPhone', count:3, price: 1200},
        {name: 'iPad',   count:2, price: 800},
        {name: 'iPod', count:4, price: 200}
      ];

      return (
      <div  className="App">
        <Header />
        <Items productItems={productItems}/>
        <Footer total={productItems.reduce(  (a,c) => (a+c.price*c.count), 0)  } />
     </div> 
    );
  }
}

export default App;
