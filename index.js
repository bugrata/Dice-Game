var randomNumber1 = 6 * Math.random();
randomNumber1 = randomNumber1 + 1;
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2 = 6 * Math.random();
randomNumber2 = randomNumber2 + 1;
randomNumber2 = Math.floor(randomNumber2);

randomİmageSource = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomİmageSource);

randomİmageSource = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomİmageSource);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
}

else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins!";
}

else{
    document.querySelector("h1").textContent = "Draw!";
}