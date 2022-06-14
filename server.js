var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
let side = 11


let matrix = []
function createMatrix(matlen) {

    for (let i = 0; i < matlen; i++) {
        matrix[i] = []
        for (let j = 0; j < matlen; j++) {
            matrix[i][j] = 0
        }
    }



createMatrix(80)

io.sockets.emit('send matrix', matrix)


let grassArr = []
let GrassEaterArr = []
let predatorArr = []
let bombArr = []
let waterArr = []

Grass = require("./Grass")
GrassEater = require("./GrassEater")
predator = require("./predator")
Water = require("./Water")
Bomb = require("./Bomb") 

function fills(gr) {
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * 80)
        let y = Math.floor(Math.random() * 80)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            }
        }
    }
    io.sockets.emit('send matrix', matrix)
}

function fills1(gr) {
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * 80)
        let y = Math.floor(Math.random() * 80)
        if (matrix[y][x] == 0 || 1) {
            matrix[y][x] = 2
        }
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                let gre = new GrassEater(x, y)
                GrassEaterArr.push(gre)
            }
        }
    }
    io.sockets.emit('send matrix', matrix)
}

function fills2(gr) {
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * 80)
        let y = Math.floor(Math.random() * 80)
        if (matrix[y][x] == 0 || 1 || 2) {
            matrix[y][x] = 3
        }
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 3) {
                let pr = new Predator(x, y)
                predatorArr.push(pr)
            }
        }
    }
    io.sockets.emit('send matrix', matrix)
}
function fills3(grs) {
    for (let i = 0; i < grs; i++) {
        let x = Math.floor(Math.random() * 80)
        let y = Math.floor(Math.random() * 80)
        if (matrix[y][x] == 0 || 1 || 2 || 3) {
            matrix[y][x] = 4
        }
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 4) {
                let pr = new bomb(x, y)
                bombArr.push(pr)
            }
        }
    }
    io.sockets.emit('send matrix', matrix)

}
function fills4(gr) {
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * 80)
        let y = Math.floor(Math.random() * 80)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 5) {
                let gr = new water(x, y)
                waterArr.push(gr)
            }
        }
    }
    io.sockets.emit('send matrix', matrix)
}

function game() {
    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in GrassEaterArr) {
        GrassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }
    for(let i in bombArr){
        bombArr[i].explode()
    }
    for(let i in waterArr){
        waterArr[i].GrassCreate()
    }
    io.sockets.emit("send matrix", matrix);
}
setInterval(game, 1000)
    
io.on('connection', function (socket) {
    createMatrix(matrix)
})
