"use strict";



let promise = fetch("https://jsonplaceholder.typicode.com/users")

function displayUsers(users){
 console.log(users);
}

function parseJSON(response){
    return response.json(); 
}

promise.then(parseJSON).then(displayUsers)