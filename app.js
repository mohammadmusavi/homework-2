var my_score = 0;
var system_score = 0;
var randnumber = 0;
var counter = 0;
var choice = ['Rock', 'Paper', 'scissors'];
//0=rock 1=paper 2=scissors

var show_my_score = document.getElementById("my-score");
show_my_score.innerHTML = "My Score:<br><br>" + my_score;

var show_system_score = document.getElementById("system-score");
show_system_score.innerHTML = "System Score:<br><br>" + system_score;

var show_result = document.getElementById("img-holder");

var my_choice = document.getElementById('my-choice');
var system_choice = document.getElementById('system-choice');
my_choice.innerHTML += "My choice:<br>";
system_choice.innerHTML += "System choice:<br>";


function check_result() {
    show_my_score.innerHTML = "My Score:<br><br>" + my_score;
    show_system_score.innerHTML = "System Score:<br><br>" + system_score;

    if (counter == 3 && my_score > system_score) show_result.innerHTML = "you win";
    else if (counter == 3 && my_score < system_score) show_result.innerHTML = "you lose";
    else if (counter == 3 && my_score == system_score) counter = 2;
}

function rock() {
    randnumber = Math.floor(Math.random() * 3);
    if (randnumber == 2) my_score += 1;
    else if (randnumber == 1) system_score += 1;
    counter += 1;
    my_choice.innerHTML += "<br>Rock";
    system_choice.innerHTML += "<br>" + choice[randnumber];
    check_result();
}

function paper() {
    randnumber = Math.floor(Math.random() * 3);
    if (randnumber == 0) my_score += 1;
    else if (randnumber == 2) system_score += 1;
    counter += 1;
    my_choice.innerHTML += "<br>Paper";
    system_choice.innerHTML += "<br>" + choice[randnumber];
    check_result();
}

function scissors() {
    randnumber = Math.floor(Math.random() * 3);
    if (randnumber == 1) my_score += 1;
    else if (randnumber == 0) system_score += 1;
    counter += 1;
    my_choice.innerHTML += "<br>Scissors";
    system_choice.innerHTML += "<br>" + choice[randnumber];
    check_result();
}