"use strict";


async function getData() {
   
    let promise = fetch("http://localhost:8081/api/courses"); 
    let response = await promise; 
    let data = await response.json();
    console.log(data);
  }
  
  getData();