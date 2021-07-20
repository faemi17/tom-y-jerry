var canvas,bg;
var together;
var cat, catImg,tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2,jerryImg3;

function preload() {
    bg = loadImage("images/garden.png");
    catImg= loadAnimation("images/tomOne.png");
    tomImg1=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg2= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas("bg");

    cat = createSprite(870, 600);
    cat.addAnimation("tomSleeping", catImg);
    cat.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("tomLastImage", tomImg2);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("tomRunning", tomImg1);
        cat.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}
