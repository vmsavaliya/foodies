const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}


// Initialize an array to store favorites
let favorites = [];

// Function to add a product to favorites
function addToFavorites(productName) {
    if (!favorites.includes(productName)) {
        favorites.push(productName);
        alert(`${productName} added to favorites!`);
    } else {
        alert(`${productName} is already in your favorites.`);
    }
}

// Function to display favorites on the favorites.html page
function displayFavorites() {
    const favoriteList = document.getElementById("favoriteList");
    favoriteList.innerHTML = "";

    favorites.forEach((productName) => {
        const listItem = document.createElement("li");
        listItem.textContent = productName;
        favoriteList.appendChild(listItem);
    });
}

// Call the displayFavorites function when the favorites.html page loads
if (window.location.href.endsWith("favorites.html")) {
    displayFavorites();
}

