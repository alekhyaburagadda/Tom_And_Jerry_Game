const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var jerry, jerry2;
var backgroundImg, cheese;
var tom, slingshot;

var gameState = "onSling";
var bg = "sprites/table.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    cheese = new Ground(150, 305, 300, 170);
    jerry = new Mouse(810, 350);
    jerry2 = new Mouse(810, 220);
    tom = new Tom(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(tom.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    
    ground.display();
    cheese.display();
    jerry.display();
    tuffy.display();
    tom.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(tom.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(tom.body);
       tom.trajectory=[];
       Matter.Body.setPosition(tom.body,{x: 200,y: 50})
    }
}