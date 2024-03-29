let turn = true;
let done = false;
const space = 35;
const extra = 75;
const little = 5;

function getDOMs() {
    const header = document.getElementById("header");
    const main = document.getElementById("main");
    const board = document.getElementById("board");
    const game_status = document.getElementById("game_status");
    const turn_show = document.getElementById("turn_show");
    const red_line = document.getElementById("red_line");
    game_status.style.display = 'none';
}

function display() {
    let output = '<div class="board" id="board">';
    for(var i = 0; i < size; i++) {
        for(var j = 0; j < size; j++) {
            var value = mat[i][j];
            if(value == null) value = "";
            output += '<span onclick="clicked(' + i + ',' + j + ')">'
                + value
                + '</span>';
        }
    }
    output += '</div>';
    main.innerHTML = output;

    if(turn) output = 'X';
    else output = 'O';
    turn_show.innerHTML = output;
}

function clicked(i, j) {
    if(done) return;
    char = 'X';
    if(!turn) char = 'O';
    
    let valid = put(i, j, char);
    if(valid) {
        turn = !turn;
        display();
    }

    let s = check();
    let game_status_output = ' is Win!';
    switch(s) {
        case 'X':
            done = true;
            game_status_output = 'X' + game_status_output;
            
            break;
        case 'O':
            done = true;
            game_status_output = 'O' + game_status_output;

            break;
        case 'draw':
            done = true;
            game_status_output = "Draw!";

            break;
        default:
            break;
    }

    game_status_output += '<br><input type="button" value="Play Again" class="btn italic" onclick="refresh_game();">';

    if(done) {
        displayFinalStatus(game_status_output);
        if(s != 'draw') drawLine();
    }
}

function rePlayGame() {
    game_status.style.display = "none";
    game_status.innerHTML = null;
    header.style.opacity = "1";
    done = false;
}

function displayFinalStatus(game_status_output) {
    game_status.style.display = 'block';
    game_status.innerHTML = game_status_output;
    game_status.style.color = "greenyellow";
    header.style.opacity = '0';
}

function unDrawLine() {
    red_line.innerHTML = null;
}

function drawLine() {

    var rect = board.getBoundingClientRect();
    let x1_pos = 0;
    let y1_pos = 0;
    let x2_pos = 0;
    let y2_pos = 0;

    switch(way_of_win) {
        case "hrz0":
            x1_pos = rect.left + space;
            y1_pos = rect.top + space + extra;
            x2_pos = rect.right - space;
            y2_pos = rect.top + space + extra;
            break;
        case "hrz1":
            x1_pos = rect.left + space;
            y1_pos = (rect.bottom + rect.top) / 2;
            x2_pos = rect.right - space;
            y2_pos = (rect.bottom + rect.top) / 2;
            break;
        case "hrz2":
            x1_pos = rect.left + space;
            y1_pos = rect.bottom - space - extra;
            x2_pos = rect.right - space;
            y2_pos = rect.bottom - space - extra;
            break;
        case "vrt0":
            x1_pos = rect.left + space + extra - little;
            y1_pos = rect.top + extra;
            x2_pos = rect.left + space + extra - little;
            y2_pos = rect.bottom - extra;
            break;
        case "vrt1":
            x1_pos = (rect.right + rect.left) / 2;
            y1_pos = rect.top + extra;
            x2_pos = (rect.right + rect.left) / 2;
            y2_pos = rect.bottom - extra;
            break;
        case "vrt2":
            x1_pos = rect.right - space - extra + little;
            y1_pos = rect.top + extra;
            x2_pos = rect.right - space - extra + little;
            y2_pos = rect.bottom - extra;
            break;
        case "dig-top-left-to-bottom-right":
            x1_pos = rect.left + space;
            y1_pos = rect.top + space;
            x2_pos = rect.right - space;
            y2_pos = rect.bottom - space;
            break;
        case "right-left-to-bottom-left":
            x1_pos = rect.right - space;
            y1_pos = rect.top + space;
            x2_pos = rect.left + space;
            y2_pos = rect.bottom - space;
            break;
        case "draw":
            break;
        default:
            return;
    }

    let output = '<svg class="line_container">\
        <line\
            id="line"\
            x1="' + x1_pos + 'px' + '"\
            y1="' + y1_pos  + 'px' + '"\
            x2="' + x2_pos + 'px' + '"\
            y2="' + y2_pos + 'px' + '"\
            stroke-width="10"\
            stroke-linejoin="round">\
        </line>\
    </svg>';
    red_line.innerHTML = output;
}

function refresh_game() {
    rePlayGame();
    unDrawLine();
    createBorder();
    display();
}
