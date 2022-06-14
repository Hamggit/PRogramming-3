
  

var socket = io();



function setup() {
    createCanvas(side * 80, side * 80)
    background('#acacac')
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            }
            if (matrix[y][x] == 2) {
                let gre = new GrassEater(x, y)
                GrassEaterArr.push(gre)
            }
            if (matrix[y][x] == 3) {
                let pr = new Predator(x, y)
                predatorArr.push(pr)
            }
            if(matrix[y][x] == 4){
                let bm = new bomb(x,y)
                bombArr.push(bm)
            }
        }

    }
}

function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            } else if (matrix[y][x] == 2) {
                fill("yellow")
            } else if (matrix[y][x] == 3) {
                fill("red")
            }else if (matrix[y][x] == 4) {
                fill("black")
            }else if(matrix[y][x] == 5){
                fill("blue")
            }

            rect(x * side, y * side, side, side);
        }
    }
}

setInterval(
    function () {
    socket.on('send matrix', nkarel)
    },1000
)