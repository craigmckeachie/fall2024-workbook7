"use strict";

async function getData() {
  //you get a promise object back which
  //you hold as collateral for eventually getting the data you requested
  let promise = fetch("https://jsonplaceholder.typicode.com/users");
  let response = await promise; //wait for the response message to come back from the server with the data in the body
  let data = await response.json(); //turn JSON string into JavaScript object or array of objects
  console.log(data);
}

getData();
