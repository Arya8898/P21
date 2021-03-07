var canvas;
var music;
var box
var surface1;
var surface2;
var surface3;
var surface4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surface
createSprite = box(random(60,60));   
createSprite = surface1(random(20,750));
createSprite = surface2(random(20,750));
createSprite = surface3(random(20,750));
createSprite = surface4(random(20,750));
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    surface1.shapeColour = "yellow";
    surface2.shapeColour = "blue";
    surface3.shapeColour = "lightblue";
    surface4.shapeColour = "lightgreen";
    //create edgeSprite
    createEdgeSprites();
if(surface1.isTouching(box) && box.bounceOff(surface1)){
box.shapeColour = "yellow";
box.velocityX = 0;
music.play();
}
if(surface2.isTouching(box) && box.bounceOff(surface2)){
box.shapeColour = "blue";
box.velocityX = 0;
music.play();
}
if(surface3.isTouching(box) && box.bounceOff(surface3)){
box.shapeColour = "lightblue";
box.velocityX = 0;
music.play();
}
if(surface4.isTouching(box) && box.bounceOff(surface4)){
box.shapeColour = "lightgreen";
box.velocityX = 0;
music.play();
}        
    //add condition to check if box touching surface and make it box
}
