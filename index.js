let name1 = prompt("Player1 Name:")
let name2 = prompt("Player2 Name:")
name1 = name1.slice(0, 1).toUpperCase() + name1.slice(1).toLowerCase()
name2 = name2.slice(0, 1).toUpperCase() + name2.slice(1).toLowerCase()

document.querySelector(".playerOne").innerText = name1;
document.querySelector(".playerTwo").innerText = name2;

let randomNumber1 = Math.round(Math.random() * 5 + 1);
let randomNumber2 = Math.round(Math.random() * 5 + 1);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".svg")
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".svg")

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerText = "This is a draw!"

} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = name1 + " wins!"
  document.querySelector(".playerOne").innerText = "✔" + name1
} else {
  document.querySelector("h1").innerText = name2 + " wins!"
  document.querySelector(".playerTwo").innerText = "✔" + name2
}
