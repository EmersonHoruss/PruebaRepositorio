// CONSTANT
const d = document;
const defaultSource = "../img/dangers/angryCovid.PNG";
const $game = d.querySelector(".game");
const srcs = [
  "../img/dangers/angryCovid.PNG",
  "../img/dangers/darkGreenCovid.PNG",
  "../img/dangers/funnyGreenCovid.PNG",
  "../img/dangers/greenCovid.PNG",
  "../img/dangers/innocentCovid.PNG",
  "../img/dangers/lightBlueCovid.PNG",
  "../img/dangers/lightGreenCovid.PNG",
  "../img/dangers/purpleCovid.PNG",
];

// EXTRA FUNCTIONS
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getNumber(numberPx) {
  let num = numberPx.slice(0, numberPx.length - 1);
  num = parseInt(num);
  return num;
}

// SETTINGS
const danger = {
  source: `url('${srcs[getRandomInt(0, srcs.length)]}')`,
  step: 30,
  speedMovement: 1,
  turbo: 2,
  width: 100,
  height: 100,
  minWidth: 50,
  maxSize: 151,
  x: 0,
  y: 0,
};

console.log(getNumber(getComputedStyle($game).width));

// CREATE RANDOM DANGER
function createRandomDanger() {
  const randomDanger = JSON.parse(JSON.stringify(danger));
  const gameWidth = getNumber(getComputedStyle($game).width);

  randomDanger.width = getRandomInt(danger.minWidth, danger.maxSize);
  randomDanger.height = randomDanger.width;
  randomDanger.x = getRandomInt(danger.x, gameWidth - randomDanger.width);

  return randomDanger;
}
const randomDanger = createRandomDanger();
// console.log(randomDanger);
// console.log(getRandomInt(danger.minWidth, danger.maxSize));
const $randomDanger = d.createElement("section");
$game.appendChild($randomDanger);
$randomDanger.style.setProperty("background-image", randomDanger.source);
$randomDanger.style.setProperty("background-size", "contain");

$randomDanger.style.setProperty("width", randomDanger.width + "px");
$randomDanger.style.setProperty("height", randomDanger.height + "px");
$randomDanger.style.setProperty("border-radius", "50%");

$randomDanger.style.setProperty("position", "absolute");
$randomDanger.style.setProperty("left", randomDanger.x + "px");
$randomDanger.style.setProperty("top", randomDanger.y + "px");
