let LivingCreature = require('./LivingCreature.js')

module.exports = class water extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 8
}


GrassCreate(){
    let found = super.chooseCell(0)
    let foundRand = found[Math.floor(Math.random()*found.length)]
    this.energy--
    if (this.energy >= 0 && foundRand) {
        let x = foundRand[0]
        let y = foundRand[1]
        matrix[y][x] = 1
        grassArr.push(new Grass(x,y))

}else{
    this.die()
}
}
die() {
    for (var i in waterArr) {
        if (this.x == waterArr[i].x && this.y == waterArr[i].y) {
            matrix[this.y][this.x] = 0
            waterArr.splice(i, 1);
            break;
        }
    }

}
}