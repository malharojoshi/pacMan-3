var pacMan;
var pacAnima, ghost1;

var cardboards = [];
var edges;
function preload() {
  pacManAnima = loadAnimation("images/pacMan-1.png", "images/pacMan-2.png");
  coinImg = loadImage("images/coin.png");
  //ghost1Anima = loadAnimation(
  //"images/Ghost-1-1.png",
  //"images/Ghost-1-2.png",
  //"images/Ghost-1-3.png",
  //"images/Ghost-1-4.png"
  //);
}
function setup() {
  canvas = createCanvas(400, 400);
  pacMan = createSprite(20, 25, 18, 18);
  pacMan.addAnimation("pacMan", pacManAnima);
  pacMan.scale = 0.1;
  coin1 = createSprite(383, 381, 1, 1);
  coin1.addImage(coinImg);
  coin1.scale = 0.1;
  coin2 = createSprite(71, 276, 1, 1);
  coin2.addImage(coinImg);
  coin2.scale = 0.1;
  coin3 = createSprite(271, 126, 1, 1);
  coin3.addImage(coinImg);
  coin3.scale = 0.1;
  //ghost1 = createSprite(20, 25, 18, 18);
  //ghost1.addAnimation("ghost", ghost1Anima);
  cardboards = [
    createSprite(50, 50, 10, 100),
    createSprite(150, 100, 100, 10),
    createSprite(150, 75, 10, 50),
    createSprite(125, 50, 50, 10),
    createSprite(200, 25, 10, 50),
    createSprite(50, 150, 100, 10),
    createSprite(150, 150, 10, 100),
    createSprite(50, 200, 100, 10),
    createSprite(300, 50, 100, 10),
    createSprite(250, 100, 10, 100),
    createSprite(380, 325, 160, 10),
    createSprite(300, 275, 10, 100),
    createSprite(325, 225, 50, 10),
    createSprite(250, 250, 10, 100),
    createSprite(200, 200, 100, 10),
    createSprite(100, 300, 200, 10),
    createSprite(300, 150, 100, 10),
    createSprite(350, 125, 10, 50),
    createSprite(200, 350, 100, 10),
    createSprite(50, 375, 10, 50),
    createSprite(100, 250, 100, 10),
    createSprite(50, 275, 10, 50),
  ];

  edges = createEdgeSprites();
  angleMode(DEGREES);
  pacMan.rotateToDirection = true;
}

function draw() {
  background("green");

  pacMan.velocityX = 0;
  pacMan.velocityY = 0;

  pacMan.bounceOff(edges);

  for (var i = 0; i < 22; i++) {
    pacMan.bounceOff(cardboards[i]);
  }

  if (keyDown("up")) {
    pacMan.velocityX = 0;
    pacMan.velocityY = -2;
  }
  if (keyDown("down")) {
    pacMan.velocityX = 0;
    pacMan.velocityY = 2;
  }

  if (keyDown("right")) {
    pacMan.velocityX = 2;
    pacMan.velocityY = 0;
  }

  if (keyDown("left")) {
    pacMan.velocityX = -2;
    pacMan.velocityY = 0;
  }
  console.log(pacMan.x);
  console.log(pacMan.y);
  //pacMan.shapeColor = "orange";
  drawSprites();
}
