/* Data for the facebook */

var profile1 = {
    username: 'Navin',
    password: 'omg'
}

var profile2 = {
    username: 'Mark',
    password: 'omg'
}

var profile3 = {
    username: 'Jack',
    password: 'omg'
}

var database = [
    profile1,
    profile2,
    profile3
];


var newsFeed = [
    {
        username: 'Navin',
        timeline: 'JavaScript is soo cool!!'
    },
    {
        username: 'Mark',
        timeline: 'Python is soo cool!!'
    },
    {
        username: 'Jack',
        timeline: 'LabVIEW is soo cool!!'
    }
    
];

/* Sign In Check */

function signIn_check(value){
    if (logInProfile.username === value.username && logInProfile.password === value.password) {
        return true
    }
    else {
        return false
    }
}

function signIn(logInProfile) {
    
    signedIn = database.some(signIn_check)

    if (signedIn) {
        alert("Login is successfull!!")
    }
    else {
        alert("User Name or Password entered is wrong!!")
    }
}

/* Execution Code */

logInProfile = {
    username: prompt('What is your user name?'),
    password: prompt('What is your password?')
}

signIn(logInProfile)
