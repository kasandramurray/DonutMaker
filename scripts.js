class DonutMaker {
    constructor() {
        this.donutCount = 0;
        this.multiplier = 1;
    } 

    makeDonuts() {
        this.donutCount += this.multiplier;
    }

    getDonuts() {
        return this.donutCount;
    }

}