let name = prompt("Enter your name");
let city = prompt("Enter your city");

// Store the name and city in localStorage with keys "name" and "city"
localStorage.setItem("name", name);
localStorage.setItem("city", city);

// Retrieve and log the stored name and city values
console.log(`Name: ${localStorage.getItem("name")}, City: ${localStorage.getItem("city")}`);

// If the name is "ram" or "jay", remove the entry for that name from localStorage
if (name === "ram" || name === "jay") {
    localStorage.removeItem("name");
}

// If the name is "jay", clear the entire localStorage
if (name === "jay") {
    localStorage.clear();
}
