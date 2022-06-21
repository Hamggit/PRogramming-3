
  

var socket = io();
side = 11


function setup() {
    createCanvas(side * 50, side * 50)
    background('#acacac')
    
}

function nkarel(matrix) {
    // console.log(matrix);
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

setInterval(function(){

    socket.on('send matrix', nkarel)
},1000)

 
function fills1(){
    socket.emit("barev")
}


function fills2(){
    socket.emit("predator")
}
function fills(){
    socket.emit("water")
}