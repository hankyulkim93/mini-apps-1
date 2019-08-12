
//restart game w/ button
let restartButton = document.getElementById('restart');

restartButton.addEventListener('click', function() {
    cells.forEach(function(cell) {
        cell.innerHTML = '';
        player = 1;
        notice.innerHTML = '';
        game();
    });
});

//detect 3-in-a-row
let checkWinner = function(win1, win2, win3) {
    let pieceOne = document.getElementById(win1);
    let pieceTwo = document.getElementById(win2);
    let pieceThree = document.getElementById(win3);
    
    if ((pieceOne.innerHTML === pieceTwo.innerHTML && pieceTwo.innerHTML === pieceThree.innerHTML) && pieceOne.innerHTML !== '') {
        return true;
    }
    return false;
}

//determine if game is over
let gameOver = function() {
    if ((checkWinner(1,2,3) ||
    checkWinner(4,5,6) ||
    checkWinner(7,8,9) ||
    checkWinner(1,4,7) ||
    checkWinner(2,5,8) ||
    checkWinner(3,6,9) ||
    checkWinner(1,5,9) ||
    checkWinner(3,5,7)) === true) 
    {
        if (player % 2 !== 0) {
            notice.innerHTML = "X wins!";
            cells.forEach(function(cell) {
                if(!cell.innerHTML) {
                    cell.innerHTML = '-';
                }
            });
        } else {
            notice.innerHTML = "O wins!";
            cells.forEach(function(cell) {
                if(!cell.innerHTML) {
                    cell.innerHTML = '-';
                }
            });
        }
    }
}

//event listener / clicker
//clicker does not happen when table border is clicked
let player = 1;
let cells = document.querySelectorAll("td");
let notice = document.getElementById('result');

let game = function() {
    cells.forEach(function(cell) {
        cell.addEventListener('click', function(e) {
            if (!cell.innerHTML) {
                if (player % 2 !== 0) {
                    cell.innerHTML = 'X';
                } else {
                    cell.innerHTML = 'O';
                }
                gameOver();
                player++;
            }

            //display message when board is full/stalemate
            if (player === 10) {
                notice.innerHTML = 'No more playable spaces.';
            }
        })
    })
};
game();