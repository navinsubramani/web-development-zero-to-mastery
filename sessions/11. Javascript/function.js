// arrow functions
let a = function(x, y) {
    return x+y
}
// the above can be return like,
a = (x, y) => x-y;

// Closures
// function defined within another function
// here inner function uses a outer function variable, and it remembers it
// so always, inner function remembers the variables from the parent function/scope
// this is called closures
// closures means, remembering the references of variables from outer scope by runing it only once.

const outerfunction = () => {
    const greet = 'hello'
    const innerfunction = () => {
        return greet
    }
    return innerfunction;
}

const newfunc = outerfunction()
newfunc();

// Currying
const curriedMultuply = (a) => (b) => a*b;

const mult1 = curriedMultuply(4)
const mult2 = mult1(4)

const mult3 = curriedMultuply(4)(5)


// Compose
const compose = (f, g) => (a) => f(g(a))

const sum = (a) => a+1

compose(sum, sum)(5)