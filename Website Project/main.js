// NBA Quiz
'use strict';
console.log("Hello Console");
//Event Listeners
document.getElementById('mrkquiz').addEventListener('click', quizresultHandler);


//Event Functions
function quizresultHandler() {
    console.log('mrkquizclick');
    let q1ans = document.getElementById('q1input').value;
    let q2ans = Number(document.getElementById('q2input').value);
    let q3ans = Number(document.getElementById('q3input').value);
    //Checking Answers
    //Question 1
    if (q1ans == "James Naismith") {
        document.getElementById('q1spn').innerHTML = "CORRECT!";
        document.getElementById('q1spn').style.color = 'green';
    } else {
        document.getElementById('q1spn').innerHTML = "INCORRECT";
        document.getElementById('q1spn').style.color = 'red';
    }
    //Question 2
    if (q2ans == 30) {
        document.getElementById('q2spn').innerHTML = "CORRECT!";
        document.getElementById('q2spn').style.color = 'green';
    } else {
        document.getElementById('q2spn').innerHTML = "INCORRECT";
        document.getElementById('q2spn').style.color = 'red';
    }
    //Question 3
    if (q3ans == 1946) {
        document.getElementById('q3spn').innerHTML = "CORRECT!";
        document.getElementById('q3spn').style.color = 'green';
    } else {
        document.getElementById('q3spn').innerHTML = "INCORRECT";
        document.getElementById('q3spn').style.color = 'red';
    }
}