function greet() {
  throw new Error("failed");
  console.log("Hello");
}

try {
  greet();
} catch (error) {
  console.log("Error occured: " + error.message);
}
