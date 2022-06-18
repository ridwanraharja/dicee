let randomNumber1 = Math.floor(Math.random() * 5) + 1;

let randomImageSource1 = "images/dice" + randomNumber1 + ".png";

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

let randomNumber2 = Math.floor(Math.random() * 5) + 1;

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
