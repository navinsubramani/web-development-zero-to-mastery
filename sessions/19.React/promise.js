// Trys

const action = new Promise( 
    (resolve, reject) => {
        setTimeout(() => {resolve('Hello')}, 1000)})

action.then((result) => console.log(result))


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });

  myPromise.then((result) => console.log(result))


  fetch('https://example.com/', {
    cache: 'only-if-cached',
    mode: 'no-cors',
  })

  // Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
// #2) Run the above promise and make it console.log "success"

console.log('started')
const quickPromise = new Promise(
    (resolve, reject) => {setTimeout(
        () => resolve('success'), 4000
    )}
    )

quickPromise.then((result) => console.log(result))
console.log('waiting')

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
console.log('started')
const quickPromise_1 = Promise.resolve(
    setTimeout(
        () => console.log('success'), 4000
    )
    )
console.log('waiting')

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch((err) => console.log('Ooops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(
    urls.map(
        (url) => { return fetch(url) }
    )
).then(
    (responses) => {
        console.log(responses)
        responses.forEach(
            (response) => { 
                response.json().then(users => console.log(users.name))
            }
        )
    }
).catch(
    (err) => console.log(err)
)


url = 'http://swapi.dev/api/people/1'
fetch(url)
.then(response => {return response.json()})
.then(users => console.log(users))

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

const urls_1 = [
    'http://swapi.dev/api/people/1',
    'http://swapi.dev/api/people/2',
    'http://swapi.dev/api/people/3',
    'http://swapi.dev/api/people/4'
  ]
  
  Promise.all(urls_1.map(url =>
      fetch(url).then(people => people.json())
  ))
    .then(array => {
      console.log('1', array[0])
      console.log('2', array[1])
      console.log('3', array[2])
      console.log('4', array[3])
    })
    .catch(err => console.log('ughhhh fix it!', err));