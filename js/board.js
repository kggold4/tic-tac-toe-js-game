let size = 3;
let mat = new Array(size);

function createBorder() {
    for(var i = 0; i < size; i++) {
        mat[i] = new Array(size);
    }
    for(var i = 0; i < size; i++) {
        for(var j = 0; j < size; j++) {
            mat[i][j] = null;
        }
    }
}

function put(i, j, char) {
    if(i + 1 > size || j + 1 > size + 1) return false;
    else if(mat[i][j] != null) return false;
    else if(char != 'X' && char != 'O') return false;
    else {
        mat[i][j] = char;
        return true;
    }
}

function check() {
    let counterX = 0, counterO = 0;

    // checking horizontal
    for(var i = 0; i < size; i++) {
        for(var j = 0; j < size; j++) {

            if(mat[i][j] == null) continue;

            if(mat[i][j] == 'X') counterX++;
            else if(mat[i][j] == 'O') counterO++;

            if(counterX == size) return "X";
            else if(counterO == size) return "O";

        }
        counterX = 0;
        counterO = 0;
    }

    counterX = 0;
    counterO = 0;

    // checking vertical
    for(var j = 0; j < size; j++) {
        for(var i = 0; i < size; i++) {
            if(mat[i][j] == null) continue;

            if(mat[i][j] == 'X') counterX++;
            else if(mat[i][j] == 'O') counterO++;

            if(counterX == size) return 'X';
            else if(counterO == size) return 'O';
        }
        counterX = 0;
        counterO = 0;
    }

    counterX = 0;
    counterO = 0;

    // checking diagonal top-left to bottom-right
    for(var i = 0; i < size; i++) {
        if(mat[i][i] == null) continue;

        if(mat[i][i] == 'X') counterX++;
        else if(mat[i][i] == 'O') counterO++;

        if(counterX == size) return 'X';
        else if(counterO == size) return 'O';
    }

    counterX = 0;
    counterO = 0;

    // checking diagonal top-left to bottom-right
    for(var i = 0; i < size; i++) {
        if(mat[i][size - i - 1] == null) continue;

        if(mat[i][size - i - 1] == 'X') counterX++;
        else if(mat[i][size - i - 1] == 'O') counterO++;

        if(counterX == size) return 'X';
        else if(counterO == size) return 'O';
    }

    // checking if all full without a win
    let full = true;
    for(var i = 0; i < size; i++) {
        for(var j = 0; j < size; j++) {
            if(mat[i][j] == null) {
                full = false;
                break;
            }
        }
    }
    if(full) return 'draw';

    return null;
}