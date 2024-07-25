var rand1 = Math.random();
rand1 = rand1 * 6;
rand1 = Math.floor(rand1);

var num1 = 1;
var num2 = 2;
var num3 = 3;
var num4 = 4;
var num5 = 5;
var num6 = 6;

var rand2 = Math.random();
rand2 = rand2 * 6;
rand2 = Math.floor(rand2);


if (window.performance.navigation.type === 1){
    rollDice();
}

function rollDice(){

    if(rand1 > rand2){
        document.querySelector("h1").textContent = "🚩 Player 1 wins!";
    
    }
    else if(rand1 < rand2){
        document.querySelector("h1").textContent = "Player 2 wins! 🚩";
    }
    else{
        document.querySelector("h1").textContent = "Draw Bud";
    }
    
    //player 1
    if(num1 === rand1){
        document.querySelector(".b1").innerHTML = "<img src= './images/dice1.png'>";
    }
    if(num2 === rand1){
        document.querySelector(".b1").innerHTML = "<img src= './images/dice2.png'>";
    }
    if(num3 === rand1){
        document.querySelector(".b1").innerHTML = "<img src= './images/dice3.png'>";
    }
    if(num4 === rand1){
        document.querySelector(".b1").innerHTML = "<img src= './images/dice4.png'>";
    }
    if(num5 === rand1){
        document.querySelector(".b1").innerHTML = "<img src= './images/dice5.png'>";
    }
    if(num6 === rand1){
        document.querySelector(".b1").innerHTML = "<img src= './images/dice6.png'>";
    }
    
    //player2
    if(num1 === rand2){
        document.querySelector(".b2").innerHTML = "<img src= './images/dice1.png'>";
    }
    if(num2 === rand2){
        document.querySelector(".b2").innerHTML = "<img src= './images/dice2.png'>";
    }
    if(num3 === rand2){
        document.querySelector(".b2").innerHTML = "<img src= './images/dice3.png'>";
    }
    if(num4 === rand2){
        document.querySelector(".b2").innerHTML = "<img src= './images/dice4.png'>";
    }
    if(num5 === rand2){
        document.querySelector(".b2").innerHTML = "<img src= './images/dice5.png'>";
    }
    if(num6 === rand2){
        document.querySelector(".b2").innerHTML = "<img src= './images/dice6.png'>";
    }

}
