class DonutMaker {
    constructor() {
        this.timer;
        this.reset();
    }

    reset() {

        this.donutCount = 0; // the number of donuts
        this.multiplier = 1; // the amount of donuts per click by user
        this.autoClickerCount = 0; // the number of auto clickers purchased
        this.autoClickerCost = 10; // the cost to purchase auto clicker

    }

    startTimer(updateDisplay) {
        if (this.timer == null) {
            this.timer = setInterval(() => {
                updateDisplay();
            }, 1000);
        }
    }

    getAutoClicker() {
        return this.autoClickerCount;
    }

    makeDonuts() {
        this.donutCount += this.multiplier;
    }

    getDonuts() {
        return this.donutCount;
    }

    getAutoClickerCost() {
        return this.autoClickerCost;
    }

    updateAuto() {
        return this.donutCount += this.autoClickerCount;
    }

    autoClick() {
        if (!this.checkAuto()) {
            this.autoClickerCount++;
            this.donutCount -= this.autoClickerCost;
            this.autoClickerCost += Math.round(this.autoClickerCost *= 0.1);
        }
    }

    checkAuto() {
        if (this.donutCount >= this.autoClickerCost) {
            return false;
        } else {
            return true;
        }
    }
}
