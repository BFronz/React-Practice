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
