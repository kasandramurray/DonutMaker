const donutMaker = new DonutMaker();
const counter = document.getElementById("counter");
const autoClicker = document.getElementById("autoClicker")
const autoCount = document.getElementById("autoCount")
const autoCost = document.getElementById("autoCost")

donutMaker.startTimer(updateDisplay);
updateUI();

function clickDonut() {
    donutMaker.makeDonuts();
    updateUI();
}

function clickAutoDonut() {
    donutMaker.autoClick();
    updateUI();
}

function updateDisplay() {
    donutMaker.updateAuto();
    updateUI();

}

function updateUI() {
    counter.innerText = donutMaker.getDonuts();
    autoClicker.disabled = donutMaker.checkAuto();
    autoCount.innerText = donutMaker.getAutoClicker();
    autoCost.innerText = donutMaker.getAutoClickerCost();
}

function reset() {
    donutMaker.reset();
    updateUI();
}