"use strict";

let usersTBody = document.querySelector("#usersTable tbody");
console.log(usersTBody);

async function getUsers() {
  //you get a promise object back which
  //will send you a signal that the previous operation has completed
  let promise = fetch("https://jsonplaceholder.typicode.com/users"); //asking another computer for the data
  let response = await promise; //wait for the response message to come back from the server with the data in the body
  let users = await response.json(); //turn JSON string in the body into a JavaScript array of objects
  console.log(users);
  displayUsers(users);
}

function buildTableRow(user) {
  let tr = usersTBody.insertRow();

  let td1 = tr.insertCell();
  td1.innerText = user.name;

  let td2 = tr.insertCell();
  td2.innerText = user.email;

  let td3 = tr.insertCell();
  let addressLine1 = `${user.address.street} ${user.address.suite}`;
  let addressLine2 = `${user.address.city}, ${user.address.zipcode}`;
  let textNode1 = document.createTextNode(addressLine1);
  let br = document.createElement("br");
  let textNode2 = document.createTextNode(addressLine2);
  td3.append(textNode1, br, textNode2);

  let td4 = tr.insertCell();
  td4.innerText = user.company.name;

  let td5 = tr.insertCell();
  let anchor = document.createElement("a");
  anchor.href = `user-details.html?userId=${user.id}`;
  anchor.text = "See details";
  td5.appendChild(anchor);
}

function displayUsers(users) {
  for (const user of users) {
    buildTableRow(user);
  }
}

getUsers();
