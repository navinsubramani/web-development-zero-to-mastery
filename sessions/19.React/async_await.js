// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);


async function getUsers() {
  let firstPromise = await fetch("https://jsonplaceholder.typicode.com/users/");
  let seconPromise = await firstPromise.json();
  console.log(seconPromise)
};


// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

async function getData() {
  const [users, posts, albums] = await Promise.all(urls.map(
    async (url) => {
      let f_promise = await fetch(url)
      return f_promise.json()
        }
      )
    )
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
}

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls_1 = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];


async function getData() {

  try {
    const [users, posts, albums] = await Promise.all(urls_1.map(
      async (url) => {
        let f_promise = await fetch(url)
        return f_promise.json()
          }
        )
      )
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
  }

  catch(err) {
    console.log("Error Caught: " + err)
  }

}
