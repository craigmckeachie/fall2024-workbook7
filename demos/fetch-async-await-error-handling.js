"use strict";

async function getData() {

  let promise = fetch("https://httpstat.us/500"); //asking another computer for the data
  let response = await promise; //wait for the response message to come back from the server with the data in the body
  let data = await response.json(); //turn JSON string in the body into a JavaScript array of objects
  console.log(data);
}

getData();
