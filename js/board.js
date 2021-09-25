let size = 3;
let mat = new Array(size);
let way_of_win = '';

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

            if(counterX == size) {
                if(i == 0) way_of_win = "hrz0";
                else if(i == 1) way_of_win = "hrz1";
                else way_of_win = "hrz2";
                return "X";
            }
            else if(counterO == size) {
                if(i == 0) way_of_win = "hrz0";
                else if(i == 1) way_of_win = "hrz1";
                else way_of_win = "hrz2";
                return "O";
            }

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

            if(counterX == size) {
                if(j == 0) way_of_win = "vrt0";
        
                else if(j == 1) way_of_win = "vrt1";
                else way_of_win = "vrt2";
                return 'X';
            }
            else if(counterO == size) {
                if(j == 0) way_of_win = "vrt0";
                else if(j == 1) way_of_win = "vrt1";
                else way_of_win = "vrt2";
                return 'O';
            }
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

        if(counterX == size) {
            way_of_win = "dig-top-left-to-bottom-right";
            return 'X';
        }
        else if(counterO == size) {
            way_of_win = "dig-top-left-to-bottom-right";
            return 'O';
        }
    }

    counterX = 0;
    counterO = 0;

    // checking diagonal right-left to bottom-left
    for(var i = 0; i < size; i++) {
        
        if(mat[i][size - i - 1] == null) continue;

        if(mat[i][size - i - 1] == 'X') counterX++;
        else if(mat[i][size - i - 1] == 'O') counterO++;

        if(counterX == size) {
            way_of_win = "right-left-to-bottom-left";
            return 'X';
        }
        else if(counterO == size) {
            way_of_win = "right-left-to-bottom-left";
            return 'O';
        }
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
    if(full) {
        way_of_win = "draw";
        return 'draw';
    }

    return null;
}