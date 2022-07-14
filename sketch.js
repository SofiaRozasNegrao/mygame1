let aviao,aviaoImg
let nuvem,nuvemImg,nuvens
let boom, boomImg
let asteroide, asteroideImg
let jogo=1

function setup() {
  createCanvas(windowWidth,windowHeight);

  asteroide=createSprite(1500, 400, 50, 50);
  asteroideImg= loadImage("ast.png")
  asteroide.addImage(asteroideImg)
  asteroide.scale=0.15

  aviao=createSprite(400,windowHeight/2,50,50)
  aviaoImg=loadImage("aviao.png")
  aviao.addImage(aviaoImg)
  aviao.scale=0.8
}

function draw() {
  background(96,235,255);  
  drawSprites();
}