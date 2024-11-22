"use strict";

let url = "http://localhost:8081/api/categories";
let shopByTypeSelect = document.querySelector("#shopByTypeSelect");
let categorySelect = document.querySelector("#categorySelect");

async function getCategories() {
  try {
    let response = await fetch(url);
    let categories = await response.json();
    console.log("categories", categories);
    populateCategorySelect(categories);
  } catch (error) {
    console.log("error:", error.message);
  }
}

function populateCategorySelect(categories) {

  categories.forEach((category) => {
    let option = document.createElement("option");
    option.value = category.categoryId;
    option.innerText = category.name;
    categorySelect.appendChild(option);
  });
}

getCategories();
