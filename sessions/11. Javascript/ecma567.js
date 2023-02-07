// let will create a new scope within curly brcakets even if its if brackets.
let feeling = 'cold'
var temperature = 'cold'

if (true) {
    let feeling = 'hot'
    console.log('in', feeling);

    var temperature = 'hot'
    console.log('in', temperature);
}

console.log('out', feeling);
console.log('out', temperature);

// const will let users not update or reassign a variable
const firstname = 'bob'
firstname = 'jack'

// const can update the properties but not reassign the value to the variable
const arr = [1,2,3]
arr.pop()

// Object properties can be used within [] to set the dynamic property names
who = 'bob'
var student = {
    [who] : 'hello'
}

// Destructing enables developers to get the property of the object to a variable easily
const person = {
    name : 'bob',
    age: 25,
    gender: 'Male'
}

var { name, age } = person;

// When the properties of the object name and value is same.

var a = 'bob'
var age = 25
var gender = 'male'

const obj = {
    a, age, gender
}

// Template string in js using the ``

var a = 'bob'
var age = 25
var gender = 'male'

const greet = `Hello ${a}, you seem to be yonger than ${age}`

// Symbol is a primitive datatype that when called using Symbol() will always return a unique value
// Symbol can be used with a key to return a same value, like Symbol.for('key')



// arrow functions

const a = function(x, y) {
    return x+y
}

// the above can be return like,

const a = (x, y) => x+y;