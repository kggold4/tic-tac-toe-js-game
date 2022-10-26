// get a list with all the empty cells (no 'X' or 'O' has selected)
function getEmptyCells() {
    let empty_cells = [];
    let current_board = document.getElementById("board");
    let game_cells = current_board.childNodes;
    for(let game_cell of game_cells) {
        if(!game_cell.innerHTML) {
            empty_cells.push(game_cell);
        }
    }
    return empty_cells;
}

// play a random game until someone win
function testRandomPlay() {
    while(!done) {
        let cells_to_click = getEmptyCells();
        let cell_to_click = cells_to_click[Math.floor(Math.random() * cells_to_click.length)];
        cell_to_click.click();
    }
}
