// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered.
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

function groupElementAndReduceArray(arr, element) {
    elementArray = []

    // remove the element from the input array
    reduceArr = arr.filter(
        (i) => {
            if (i === element) {
                // Add the element to the Element Array
                elementArray.push(i)
                return false
            }
            else {
                return true
            }
        }
    )

    return [reduceArr, elementArray]
}


function sortArray(arr) {
    return arr.sort(function(a, b){return a - b});
}

function organize(array) {
    // Sort the Array
    inputArray = sortArray(inputArray)

    // Split the Array

    outputArray = []

    while (inputArray.length > 0) {
    output = groupElementAndReduceArray(inputArray, inputArray[0])
    
    inputArray = output[0];
    elementArray = output[1];

    if (elementArray.length === 1) {
            outputArray.push(elementArray[0])
        }
    else {
        outputArray.push(elementArray)
            }
        }

    return outputArray 
}


//Main Code Area

var inputArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]

console.log(organize(inputArray))


// Question 2: Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added together,
// give the target number. For example: answer([1,2,3], 4)should return [1,3]

function findCombination(arr) {
    combinationArray = []

    for (let i=0; i<arr.length; i++){
        for (let j=i+1; j<arr.length; j++) {
            combinationArray.push([i, j])
        }
    }
    return combinationArray
}

function findTargetCombination(arr, combinationList, target) {
    outputArray = []
    combinationList.forEach(
        (combination) => {
            if ( (arr[combination[0]] + arr[combination[1]]) === target ) {
                
                outputArray.push([arr[combination[0]], arr[combination[1]]])
                // console.log(outputArray)
            } 
        }
    )
    
    return outputArray
}


// Main Code Area

let inputArray = [1,2,3,2,4]
let target = 5

combinationList = findCombination(inputArray)
// console.log(combinationList)

outputArray = findTargetCombination(inputArray, combinationList, target)


// Question 3: Write a function that converts HEX to RGB.
// Then Make that function auto-dect the formats so that
// if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

function hex2rgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

function rgb2hex(rgb) {
    return "#" + componentToHex(rgb.r) + componentToHex(rgb.g) + componentToHex(rgb.b);
}

function detectColorType(input) {
    if (typeof(input) === 'string') {
        return 'hex'
    }
    else {
        return 'rgb'
    }
}

// Main Code Area

input = '#0033ff'
input = { r: 0, g: 51, b: 255 }

if (detectColorType(input) === 'hex') {
    output = hex2rgb(input)
}
else {
    output = rgb2hex(input)
}

console.log(output)