// Variables
let clickCount = 0;
let workerCount = 0;
let managerCount = 0;
let factoryCount = 0;
let upgradeCount = 0;
let clicksPerSecond = 0;

// Click button event listener
document.getElementById("clickButton").addEventListener("click", function() {
  clickCount += 0.1 * Math.pow(2, upgradeCount);
  updateClickCount();
});

// Worker button event listener
document.getElementById("buyWorkerButton").addEventListener("click", function() {
  if (clickCount >= workerPrice) {
    clickCount -= workerPrice;
    workerCount++;
    workerPrice *= 2;
    clicksPerSecond += 0.1;
    updateClickCount();
    updateWorker();
    updateCPS();
  }
});

// Manager button event listener (similar logic for factory and upgrade buttons)
document.getElementById("buyManagerButton").addEventListener("click", function() {
  // Logic for buying manager
});

// Function to update click count display
function updateClickCount() {
  document.getElementById("clickCount").textContent = clickCount.toFixed(1);
}

// Function to update worker display
function updateWorker() {
  document.getElementById("workerPrice").textContent = workerPrice;
  document.getElementById("workerProduction").textContent = (0.1 * workerCount).toFixed(1);
}

// Function to update clicks per second display
function updateCPS() {
  document.getElementById("cps").textContent = clicksPerSecond.toFixed(1);
}

// Initialize the game
updateClickCount();
updateWorker();
updateCPS();
