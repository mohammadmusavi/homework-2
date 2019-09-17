var my_score = 0;
var system_score = 0;
var randnumber = 0;
var counter = 0;
//0=rock 1=paper 2=scissors

var show_my_score = document.getElementById("my-score");
show_my_score.innerHTML = "My Score:<br><br>" + my_score;

var show_system_score = document.getElementById("system-score");
show_system_score.innerHTML = "System Score:<br><br>" + system_score;

var show_result = document.getElementById("img-holder");


function check_result() {
    show_my_score.innerHTML = "My Score:<br><br>" + my_score;
    show_system_score.innerHTML = "System Score:<br><br>" + system_score;
    if (counter == 3 && my_score > system_score) {
        show_result.innerHTML = "you win";
    } else if (counter == 3 && my_score < system_score) {
        show_result.innerHTML = "you lose";
    }
}

function rock() {
    randnumber = Math.floor(Math.random() * 3);
    if (randnumber == 0) my_score += 1;
    else
        system_score += 1;
    counter += 1;
    check_result();
}

function paper() {
    randnumber = Math.floor(Math.random() * 3);
    if (randnumber == 1) my_score += 1;
    else
        system_score += 1;
    counter += 1;
    check_result();
}

function scissors() {
    randnumber = Math.floor(Math.random() * 3);
    if (randnumber == 2) my_score += 1;
    else
        system_score += 1;
    counter += 1;
    check_result();
}