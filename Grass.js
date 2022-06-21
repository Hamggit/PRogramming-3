let LivingCreature = require('./LivingCreature.js')

module.exports = class Grass extends LivingCreature{
   
    mul() {
        // console.log("hey");
        this.multiply++;
        if (this.multiply >= 5) {
            let emptyCells = super.chooseCell(0)
            let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
            if (this.multiply >= 5 && newCell) {
                let x = newCell[0]
                let y = newCell[1]
                var gr = new Grass(x, y, 1)
                grassArr.push(gr)
                this.multiply = 0;
            }
        }
    }
}