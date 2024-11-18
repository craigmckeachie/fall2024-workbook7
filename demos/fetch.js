"use strict";

//you get a promise object back which
//you hold as collateral for eventually getting the data you requested
let promise = fetch("https://jsonplaceholder.typicode.com/users");

promise.then(parseJSON).then(displayUsers);

//takes the body (after the blank line) of the http response
//and calls JSON.parse() on it
function parseJSON(response) {
  let arrayOfUserObjects = response.json(); //response.body's json string
  return arrayOfUserObjects;
}

//recieves the data you asked for and does something to display it
function displayUsers(users) {
  console.log(users);
}
