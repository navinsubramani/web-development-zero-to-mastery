// BigInt
// bigint is used for operation on numeric numbeer post MAX_SAFE_INTEGER 
// adding 'n' at the end of the number will make it of type bigint

console.log(1231324128721462736 + 1)
console.log(1231324128721462736n + 1n)

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

// Optional Chaining Operator '?'
// Checking if the nested object is present using the terinary operator
// let a = obj1?.innerobj?.property
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}


if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon 
    && will_pokemon.pikachu && will_pokemon.pikachu.friend 
    && will_pokemon.pikachu.friend.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }

// answer
(andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) ? console.log('fight!') : console.log('walk away...')


// Nullish Coalescing Operator '??'
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
console.log(false ?? 'hellooo')
console.log(null ?? 'hellooo')
console.log(null || 'hellooo')
console.log((false || null) ?? 'hellooo')
console.log(null ?? (false || 'hellooo'))