var arr = [0,1,2,3,4,5]

console.log('Array Element: ', arr)

/* Indexing, pop, push, shift, length */

console.log('Get Index 1: ', arr[1])
console.log('Set Index 1: ', arr[1]='1', arr)
console.log('Set Index 7: ', arr[7]='7', arr)

// using .at from ECMA 2022 to get the element from arrays
console.log(arr.at[-2])

console.log('pop: ', arr.pop(), arr)
console.log('push: ', arr.push(7, 8), arr)

console.log('shift: ', arr.shift(), arr)
console.log('unshift: ', arr.unshift(0), arr)

console.log('array length property: ', arr.length, arr)

console.log('Delete Element: ',delete arr[1], arr)

/* Merge OR Concatenate */

console.log('Concatenate 2 arrays: ',arr.concat(arr))
console.log('Concatenate 3 arrays: ',arr.concat(arr, [999, 999]))
console.log('Concatenate array with value: ',arr.concat(8))

/* Splice and Slice */

console.log('splice = remove & replace: ', arr.splice(2,3, 'removed from index 2, len 3'))
console.log('Spliced array ', arr)

console.log('Slice = slice into a new array: ', arr.slice(1))

var array = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log('Access Oranges: ', array[1][1][0])

/* Sort Array */

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log('Sort the array: ', array.sort())
console.log('Sort the array in reverse order: ', array.sort().reverse())

var array = [3, 4, 2, 1, 7, 5, 11, 32, 21, 20];
console.log('Sort the numeric array: ', array.sort(function(a,b){return a-b}))


// Array Iteration:

// forEach(element, index, array), acts a function on each element
arr = [1,2,3,4]
arr.forEach(console.log)

// map
const maparr = arr.map(
    (num) => num*2
)

// filter
const filterarr = arr.filter(
    (num) => num%2===0
)

// reduce
const reducearr = arr.reduce(
    (acc, num) => {
        return num + acc
    }
    ,0
)

// reduceRight

// every
// some

// indexOf
// lastIndexOf
// includes

// find
// findIndex

// Array.from()

// Keys
// entries