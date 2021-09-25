let turn = true;
let done = false;

function getDOMs() {
    const header = document.getElementById("header");
    const main = document.getElementById("main");
    const game_status = document.getElementById("game_status");
    const turn_show = document.getElementById("turn_show");
}

function clicked(i, j) {
    if(done) return;
    console.log(i, j);
    char = 'X';
    if(!turn) {
        char = 'O';
    }
    let valid = put(i, j, char);
    console.log(valid);
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
    if(done) {
        header.style.display = 'none';
        game_status.innerHTML = game_status_output;
        game_status.style.color = "green";
    }
}