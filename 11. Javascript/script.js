/* console.log("deubug information") */

/* alert("Displayed in console") */

/* Type 1 of function definitions*/
function say_hello(name) {
    console.log("Hello!!! " + name)
}

/* Type 2 of function definition*/
var say_bye = function() {
    console.log("Bye!!!")
}

/* Return from a function */
var multiply = function(a, b) {
    return a*b
}

say_hello("Navin")

say_bye()

c = multiply(5, 10)
console.log(c)

/* Keyless car Excercis */

function checkDriverAge() {

    var age = prompt("What is your age?");

    if (Number(age) < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}


function checkDriverAge2 (age) {
    if (Number(age) < 18) {
        console.log("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) > 18) {
        console.log("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

checkDriverAge2(10)
checkDriverAge2(18)
checkDriverAge2(19)