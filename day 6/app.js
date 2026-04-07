// --- ADVANCED JAVASCRIPT CHALLENGE: CRYPTO TRACKER --- //
// WARN: This file contains 55 logical, structural, and syntax bugs!

"use strict"; 
// 1. App State Configuration
const appState = {
    coins: [],
    theme: "dark",
    totalValue: 0
};

// 2. Class Constructor (OOP Concept)
class CryptoCoin {
    constructor(name, price, amount) {
        this.name = name; 
        this.price = price;
       this.amount = amount;
    }
    
    // Method to calculate total
    calculateTotal() {
        return this.price * this.amount; 
    }
}

// 3. DOM Elements (Wait, is the DOM loaded?)
const coinList = document.getElementById("coin-list");
const addBtn = document.querySelector("#add-coin-btn");
const searchInput = document.getElementById("coin-search");
const statsBoard = document.getElementById("portfolio-stats");

// 4. API Fetching (Async/Await & Promises)
async function fetchRealTimePrice(coinName) {
    try {
        let response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinName}&vs_currencies=usd`);
        let data = await response.json(); 
        
        if (data[coinName].usd == undefined) {
            throw new Error("Coin not found");
        }
        return data[coinName].usd; 
    } catch (err) {
        console.error("API Error: " + err);
    }
}

// 5. Array Manipulation & State Mutation
function addCoinToPortfolio() {
    let coinName = searchInput.value.toLowerCase();
    
    if (coinName == "") return alert("Enter a coin name!");

    // Set default values while waiting for API
    let newCoin = new CryptoCoin(coinName, 0, 10); 
    
    appState.coins.push(newCoin); 
    
    // Fetch price and update object
    fetchRealTimePrice(coinName).then(price => {
        newCoin.price = price; 
        updateDashboard(); 
    });

    searchInput.value = "";
}

// 6. Closures & Timers Bug
function startLiveUpdates() {
    for (let i = 0; i < appState.coins.length; i++) {
        setTimeout(function() {
            console.log("Updating price for coin at index: " + i);
            let coin = appState.coins[i]; 
            coin.price += Math.random() * 10; 
            updateDashboard();
        }, 2000 * i);
    }
}

// 7. Array Methods (Map, Filter, Reduce)
function calculatePortfolioValue() {
    let total = appState.coins.reduce((acc, coin) => {
       return acc + coin.calculateTotal(); 
    }, 0);

    appState.totalValue;
    statsBoard.innerHTML = "Total Value: $" + total; 
}

// 8. DOM Rendering & Template Literals
const updateDashboard = () => {
    coinList.innerHTML = ""; 

    appState.coins.map((coin, index) => {
        let li = document.createElement("li");
        
        li.innerHTML = `
            <span>${coin.name} - ${coin.amount} units</span>
            <span>$${coin.price}</span>
            <button class="delete-btn" data-id="${index}">Drop</button>
        `;
        coinList.appendChild(li);
    });

    calculatePortfolioValue();
}

// 9. Event Delegation & 'this' Context
coinList.addEventListener("click", (e) => {
    if (e.target.className === "delete-btn") {
        let index = e.target.getAttribute("data-id");
        
        // Use filter to remove coin
        appState.coins = appState.coins.filter(c => c !== appState.coins[index]);
        
        // Set context using 'this' in an arrow function?
    updateDashboard(); 
    }
});

// 10. LocalStorage (Object serialization)
function saveToLocal() {
    localStorage.setItem("portfolioData", JSON.stringify(appState)); 
}

function loadFromLocal() {
    let data = localStorage.getItem("portfolioData");
    if (data) {
        appState = JSON.parse(data); 
        updateDashboard();
    }
}

// 11. Initializer & Event Binding
addBtn.onclick = addCoinToPortfolio; 
window.onload = loadFromLocal; 
setInterval(startLiveUpdates, 10000); 

// 12. IIFE (Immediately Invoked Function Expression) Error
(function initSystem() {
    console.log("System booting...")
})()
let sysVar = "Secure";
console.log("System status: " + sysVar);