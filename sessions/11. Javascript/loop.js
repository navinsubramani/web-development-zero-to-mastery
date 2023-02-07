let arr = [1,2,3,4,5]

// for

for (i = 0; i < arr.length; i++)
{
    console.log(arr[i])
}

// forEach

arr.forEach(
    (element, index, arr) => console.log(element)
)

// for of
// 'of' is for the arrays or strings

for (element of arr) {
    console.log(element)
}

// for in
// 'in' is for the objects by providing the keys
// 'in' can work on the arrays but provides the index or keys

let obj = {
    one: 1,
    two: 2,
    three: 3
}

for (element in obj) {
    console.log(element)
}


// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
    max = (arr.length === 0) ? 0 : -Infinity
    for (let i = 0 ; i<arr.length; i++) {
        max = (max > arr[i] ? max : arr[i])
    }
    return max
}

function biggestNumberInArray2(arr) {
    max = (arr.length === 0) ? 0 : -Infinity

    max = arr.reduce(
        (max, i) =>
        {
            return max = (max > i ? max : i)
        }
    ,
    max)

    return max

}

function biggestNumberInArray3(arr) {
    max = (arr.length === 0) ? 0 : -Infinity
    for (element of arr) {
        
            max = (max > element ? max : element)

    }
    return max

}

