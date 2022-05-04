var edges, dot, flag = false,lf=100, gameState="start";

function preload(){

}

function setup(){
  createCanvas(700,500)
  edges = createEdgeSprites();


}

function draw(){
  background("blue");
  if(gameState === "start"){
    textSize(15);
    fill("white");
text("Play",350,300);

  }

if(gameState === "play"){




}

if(gameState === "end"){




}

if(flag === false){

  drawDots();
  flag=true;


}
if(mousePressedOver(dot)){
  dot.destroy();
  flag=false;
  lf -= 1;


}

drawSprites();


}

function drawDots(){
  dot=createSprite(700,500,100,100);
  dot.shapeColor="red";
    dot.x= Math.round(random(1, 700));
    dot.y= Math.round(random(1,500));
    dot.lifetime=lf;





}