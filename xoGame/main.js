let title = document.querySelector('.title');
let turn = "X"
var square = [];

function end(num1, num2, num3, num4) {
    title.innerHTML = `${square[num1]} winner`;
    document.getElementById('item' + num1).style.background = "green";
    document.getElementById('item' + num2).style.background = "green";
    document.getElementById('item' + num3).style.background = "green";
    document.getElementById('item' + num4).style.background = "green";
    setInterval(function () { title.innerHTML += "." }, 1000);
    setTimeout(function () { location.reload }, 4000);
}

function winner() {
    for (var i = 1; i < 17; i++) {
        square[i] = document.getElementById('item' + i).innerHTML;
    } if (square[1] == square[2] && square[2] == square[3] && square[3] == square[4] && square[2] != "") {
        end(1, 2, 3, 4);
    } else if (square[5] == square[6] && square[6] == square[7] && square[7] == square[8] && square[6] != "") {
        end(5, 6, 7, 8);
    } else if (square[9] == square[10] && square[10] == square[11] && square[11] == square[12] && square[10] != "") {
        end(9, 10, 11, 12);
    } else if (square[13] == square[14] && square[14] == square[15] && square[15] == square[16] && square[14] != "") {
        end(13, 14, 15, 16);
    } else if (square[1] == square[5] && square[5] == square[9] && square[9] == square[13] && square[5] != "") {
        end(1, 5, 9, 13);
    } else if (square[2] == square[6] && square[6] == square[10] && square[10] == square[14] && square[6] != "") {
        end(2, 6, 10, 14);
    } else if (square[3] == square[7] && square[7] == square[11] && square[11] == square[15] && square[7] != "") {
        end(3, 7, 11, 15);
    } else if (square[4] == square[8] && square[8] == square[12] && square[12] == square[16] && square[8] != "") {
        end(4, 8, 12, 16);
    } else if (square[1] == square[6] && square[6] == square[11] && square[11] == square[16] && square[6] != "") {
        end(1, 6, 11, 16);
    } else if (square[4] == square[7] && square[7] == square[10] && square[10] == square[13] && square[7] != "") {
        end(4, 7, 10, 13);
    }
}

function game(id) {
    let element = document.getElementById(id);
    if (turn === "X" && element.innerHTML == "") {
        element.innerHTML = "X";
        turn = "O";
        title.innerHTML = "O";

    } else if (turn === "O" && element.innerHTML == "") {
        element.innerHTML = "O";
        turn = "X";
        title.innerHTML = "X";
    }
    winner();
}