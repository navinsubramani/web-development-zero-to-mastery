/* Object */

var user = {
    name: 'Navin',
    age: '30',
    isMarried: true,
    hobby: 'Coding'
}

user.age = 31
user.qualification = 'Engineering'

/* Array of Object */

var user_list = [
    {
        name: 'Navin',
        age: '30',
        isMarried: true,
        hobby: 'Coding'
    },
    {
        name: 'Mark',
        age: '35',
        isMarried: true,
        hobby: 'Gaming'
    }
]

user_list[0].qualification = 'Engineering'

/* Object containing functions */

var navin = {
    name: 'Navin',
    age: '30',
    isMarried: true,
    hobby: 'Coding',
    shout: function() {console.log('oooooo ha ha ha ha!!!!')}
}

/* empty Object VS null Object */

/* Can have values added to it*/
var emptyObj = {}

/* Cannot have values added to it*/
var nullObj = null

/* Defining Class */

class player {
    constructor(name, skill) {
        this.name = name
        this.skill = skill
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am good at ${this.skill}`)
    }
}

const max = new player('Max', 'Running')

/* Extend to Child Class */

class boxer extends player {
    constructor(name, skill) {
        super(name, skill)
    }
}

const jack = new boxer('Jack', 'Boxing')

// create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor(name, type, color) {
        this.name = name
        this.type = type
        this.color = color
    }
}

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color)
    }

    sound() {
        console.log(`mooooo.... ${this.name}, ${this.type}, ${this.color}`)
    }
}

const cow = new Mamal('ma', 'south', 'black and white')
cow.sound()