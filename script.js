// Variables to store game state
let clickCount = 0;
let workerCount = 0;
let managerCount = 0;
let factoryCount = 0;
let upgradeCount = 0;

// Variables to store entity prices and production rates
let workerPrice = 10;
let managerPrice = 300;
let factoryPrice = 700;
let upgradePrice = 100;
let workerProduction = 0.1;
let managerProduction = 0.3;
let factoryProduction = 0.7;
let upgradeMultiplier = 2;

// Update the click count display
function updateClickCount() {
  document.getElementById('clickCount').textContent = clickCount.toFixed(1);
}

// Update the worker count display
function updateWorkerCount() {
  document.getElementById('workerCount').textContent = workerCount;
}

// Update the manager count display
function updateManagerCount() {
  document.getElementById('managerCount').textContent = managerCount;
}

// Update the factory count display
function updateFactoryCount() {
  document.getElementById('factoryCount').textContent = factoryCount;
}

// Update the upgrade count display
function updateUpgradeCount() {
  document.getElementById('upgradeCount').textContent = upgradeCount;
}

// Update the production rates display
function updateProductionRates() {
  document.getElementById('workerProduction').textContent = (workerCount * workerProduction).toFixed(1);
  document.getElementById('managerProduction').textContent = (managerCount * managerProduction).toFixed(1);
  document.getElementById('factoryProduction').textContent = (factoryCount * factoryProduction).toFixed(1);
}

// Update the clicks per second display
function updateCPS() {
  const cps = (workerCount * workerProduction) + (managerCount * managerProduction) + (factoryCount * factoryProduction);
  document.getElementById('cps').textContent = cps.toFixed(1);
}

// Update the total clicks produced display
function updateTotalClicks() {
  document.getElementById('totalClicks').textContent = (clickCount + (workerCount * workerProduction) + (managerCount * managerProduction) + (factoryCount * factoryProduction)).toFixed(1);
}

// Handle the click event
function handleClick() {
  clickCount += 0.1 + (upgradeCount * 0.1);
  updateClickCount();
  updateTotalClicks();
}

// Handle buying a worker
function buyWorker() {
  if (clickCount >= workerPrice) {
    clickCount -= workerPrice;
    workerCount++;
    workerPrice *= 2;
    updateClickCount();
    updateWorkerCount();
    updateProductionRates();
    updateTotalClicks();
  }
}

// Handle buying a manager
function buyManager() {
  if (clickCount >= managerPrice) {
    clickCount -= managerPrice;
    managerCount++;
    managerPrice *= 2;
    updateClickCount();
    updateManagerCount();
    updateProductionRates();
    updateTotalClicks();
  }
}

// Handle buying a factory
function buyFactory() {
  if (clickCount >= factoryPrice) {
    clickCount -= factoryPrice;
    factoryCount++;
    factoryPrice *= 2;
    updateClickCount();
    updateFactoryCount();
    updateProductionRates();
    updateTotalClicks();
  }
}

// Handle buying an upgrade
function buyUpgrade() {
  if (clickCount >= upgradePrice) {
    clickCount -= upgradePrice;
    upgradeCount++;
    upgradePrice *= 3;
    workerProduction *= upgradeMultiplier;
    managerProduction *= upgradeMultiplier;
    factoryProduction *= upgradeMultiplier;
    updateClickCount();
    updateUpgradeCount();
    updateProductionRates();
    updateTotalClicks();
    updateCPS();
  }
}

// Add event listeners to buttons
document.getElementById('clickButton').addEventListener('click', handleClick);
document.getElementById('buyWorkerButton').addEventListener('click', buyWorker);
document.getElementById('buyManagerButton').addEventListener('click', buyManager);
document.getElementById('buyFactoryButton').addEventListener('click', buyFactory);
document.getElementById('buyUpgradeButton').addEventListener('click', buyUpgrade);

// Initial setup
updateClickCount();
updateWorkerCount();
updateManagerCount();
updateFactoryCount();
updateUpgradeCount();
updateProductionRates();
updateCPS();
updateTotalClicks();
