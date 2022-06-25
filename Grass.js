module.exports = class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiplay = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    search(character) {
        let found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix.length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;

    }
    mul() {
        let found = this.search(0)
        let foundRand = found[Math.floor(Math.random() * found.length)]
        this.multiplay++
        if (this.multiplay >= 5 && foundRand) {
            let x = foundRand[0]
            let y = foundRand[1]
            matrix[y][x] = 1
            let gr1 = new Grass(x, y)
            grassArr.push(gr1)
            this.multiplay = 0

        }
    }
}