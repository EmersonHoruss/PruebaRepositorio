// CONSTANT
const d = document;
const defaultSource = "../img/players/blackBoy.PNG";

// EXTRA FUNCTIONS
function getNumber(numberPx) {
  let num = numberPx.slice(0, numberPx.length - 1);
  num = parseInt(num);
  return num;
}

// SETTINGS
const player = {
  source: `url('${defaultSource}')`,
  step: 30,
  speedMovement: 1,
  turbo: 2,
  width: 100,
  height: 100,
  x: 0,
  y: 0,
};

// CREATING PLAYER
const $game = d.querySelector(".game");
// console.log($game.childNodes);

// UPDATING PLAYER'S DEFAULT X AND Y COORDENATES 
const gameWidth = getNumber(getComputedStyle($game).width);
const gameHeight = getNumber(getComputedStyle($game).height);
player.x = gameWidth / 2 - player.width / 2;
player.y = (gameHeight / 4) * 3 - player.height / 2;

const $player = d.createElement("section");
$game.appendChild($player);
$player.style.setProperty("background-image", player.source);
$player.style.setProperty("background-size", "contain");

$player.style.setProperty("width", player.width + "px");
$player.style.setProperty("height", player.height + "px");
$player.style.setProperty("border-radius", "50%");

$player.style.setProperty("position", "absolute");
$player.style.setProperty("left", player.x + "px");
$player.style.setProperty("top", player.y + "px");

//CREATING THE WALL
const canvasCoordinates = {
  left: 0,
  right: getNumber(getComputedStyle($game).width),
  top: 0,
  bottom: getNumber(getComputedStyle($game).height),
};

function crashXAxis(futurePosition) {
  return futurePosition < canvasCoordinates.left ||
    futurePosition > canvasCoordinates.right - player.width
    ? true
    : false;
}

function crashYAxis(futurePosition) {
  return futurePosition < canvasCoordinates.top ||
    futurePosition > canvasCoordinates.bottom - player.height
    ? true
    : false;
}

function crashWall(futurePosition, axis) {
  console.log(canvasCoordinates);
  console.log(futurePosition);
  return axis === "x"
    ? crashXAxis(futurePosition)
    : axis === "y"
    ? crashYAxis(futurePosition)
    : "Not recognized input axis: '" + axis + "'";
}

// MOVING THE PLAYER
function goRight() {
  const futurePosition = player.x + player.speedMovement;
  const crash = crashWall(futurePosition, "x");
  if (!crash) {
    player.x = futurePosition;
    $player.style.setProperty("left", player.x + "px");
  }
  //   console.log(player.x);
}

function goLeft() {
  const futurePosition = player.x - player.speedMovement;
  const crash = crashWall(futurePosition, "x");
  if (!crash) {
    player.x = futurePosition;
    $player.style.setProperty("left", player.x + "px");
  }
  //   console.log(player.x);
}

function goDown() {
  const futuredPosition = player.y + player.speedMovement;
  const crash = crashWall(futuredPosition, "y");
  if (!crash) {
    player.y = futuredPosition;
    $player.style.setProperty("top", player.y + "px");
  }
  //   console.log(player.x);
}

function goUp() {
  const futuredPosition = player.y - player.speedMovement;
  const crash = crashWall(futuredPosition, "y");
  if (!crash) {
    player.y = futuredPosition;
    $player.style.setProperty("top", player.y + "px");
  }
  //   console.log(player.x);
}

d.addEventListener("keydown", (e) => {
  // console.log(e.key);
  for (let index = 0; index < player.step; index++) {
    if (e.key === "ArrowRight") goRight();
    if (e.key === "ArrowLeft") goLeft();
    if (e.key === "ArrowDown") goDown();
    if (e.key === "ArrowUp") goUp();
  }
});

console.log($player);

// const $player = d.createElement("section");
// const $playerFragmet = d.createDocumentFragment();

export function helloWorld() {
  console.log("Hello World");
}
