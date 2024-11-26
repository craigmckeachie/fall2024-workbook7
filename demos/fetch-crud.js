"use strict";

async function createUser(user) {
  let promise = fetch(`http://localhost:3000/users`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json",
    },
  });

  let response = await promise;
  let newUser = await response.json();
  console.log("New user: ", newUser);
}

let newUser = {
  name: "Aubrey Graham",
  username: "drake",
  email: "drake@youngmoney.com",
};

createUser(newUser);

async function updateUser(user) {
  let promise = fetch("http://localhost:3000/users/" + user.id, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json",
    },
  });

  let response = await promise;
  let updatedUser = await response.json();
  console.log("Updated User: ", updatedUser);
}

let modifiedUser = {
  name: "Kendrick Lamar",
  username: "kdot",
  email: "klamar@tde.com",
  id: 12,
};

updateUser(modifiedUser);

async function deleteUser(user) {
  let promise = fetch("http://localhost:3000/users/" + user.id, {
    method: "DELETE",
  });

  let response = await promise;
  console.log(response);

  if (response.ok) {
    console.log("successfully deleted");
  }
}

let userToDelete = {
  id: 11,
};

deleteUser(userToDelete);
