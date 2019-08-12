//event listener / clicker
//clicker does not happen when table border is clicked

let player = 1;
let cells = document.querySelectorAll("td");

cells.forEach(function(cell) {
    cell.addEventListener('click', function() {
        if (!cell.innerHTML) {
            if (player % 2 !== 0) {
                cell.innerHTML = 'X';
                player++;
            } else {
                cell.innerHTML = 'O';
                player++;
            }
        }
    })
})

//restart game w/ button

let restartButton = document.getElementById('restart');

restartButton.addEventListener('click', function() {
    cells.forEach(function(cell) {
        cell.innerHTML = '';
        player = 1;
    });
});

//display message when board is full

// message() = {
//     if (player === 9) {
//         alert('STOP');
//     }
// }