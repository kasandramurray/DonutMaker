const donutMaker = new DonutMaker();
const counter = document.getElementById("counter");

function clickDonut(){
    donutMaker.makeDonuts();
    updateUI();
}

function updateUI(){
    counter.innerText = donutMaker.getDonuts();
}