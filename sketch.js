var ground;
var lavaI, diamondI;
var lava1,lava2,lava3,lava4,lava5,lava6,lava7,lava8,lava9;
var diamond1,diamond2,diamond3,diamond4,diamond5,diamond6,diamond7,diamond8,diamond9;
var hat, hatI;
var score = 0;
var drop = 0;
var time=0;
var lives=100;
var pool=0;
var spin=0;
var eruption=false;
var escape=false;
var caught=false;
var minecart, minecartI;
var shake=0;

function preload(){
  ground=loadImage("rock.jpg");
  lavaI=loadImage("lava.png");
  diamondI=loadImage("diamond.png");
  hatI=loadImage("hat.png");
  minecartI=loadImage("minecart.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  lava1=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  lava1.addImage(lavaI);
  lava1.scale=0.045;
  lava2=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  lava2.addImage(lavaI);
  lava2.scale=0.045;
  lava3=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  lava3.addImage(lavaI);
  lava3.scale=0.045;
  lava4=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  lava4.addImage(lavaI);
  lava4.scale=0.045;
  lava5=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  lava5.addImage(lavaI);
  lava5.scale=0.045;
  lava6=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  lava6.addImage(lavaI);
  lava6.scale=0.045;
  lava7=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  lava7.addImage(lavaI);
  lava7.scale=0.045;
  lava8=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  lava8.addImage(lavaI);
  lava8.scale=0.045;
  lava9=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  lava9.addImage(lavaI);
  lava9.scale=0.045;

  diamond1=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  diamond1.addImage(diamondI);
  diamond1.scale=0.1;
  diamond2=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  diamond2.addImage(diamondI);
  diamond2.scale=0.1;
  diamond3=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  diamond3.addImage(diamondI);
  diamond3.scale=0.1;
  diamond4=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  diamond4.addImage(diamondI);
  diamond4.scale=0.1;
  diamond5=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  diamond5.addImage(diamondI);
  diamond5.scale=0.1;
  diamond6=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  diamond6.addImage(diamondI);
  diamond6.scale=0.1;
  diamond7=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  diamond7.addImage(diamondI);
  diamond7.scale=0.1;
  diamond8=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  diamond8.addImage(diamondI);
  diamond8.scale=0.1;
  diamond9=createSprite(random(0,displayWidth*2),random(0,displayHeight*2));
  diamond9.addImage(diamondI);
  diamond9.scale=0.1;
  
  hat=createSprite(500,500);
  hat.addImage(hatI);
  hat.scale=0.4;
  
  
}



function draw() {
  background(50,20,0);
  time++;

  if(keyDown("up")){
    hat.y-=8;
  }
  if(keyDown("down")){
    hat.y+=8;
  }
  if(keyDown("left")){
    hat.x-=12;
  }
  if(keyDown("right")){
    hat.x+=12;
  }
  


  camera.position.x=hat.position.x+shake;
  camera.position.y=hat.position.y+shake;
  
  if(hat.x>displayWidth*2){
    hat.x-=12;
  }
  if(hat.x<0){
    hat.x+=12;
  }
  if(hat.y>displayHeight*2){
    hat.y-=8;
  }
  if(hat.y<0){
    hat.y+=8;
  }



  

  if((hat.isTouching(lava1) || hat.isTouching(lava2) || hat.isTouching(lava3) || hat.isTouching(lava4) || hat.isTouching(lava5)
   || hat.isTouching(lava6) || hat.isTouching(lava7) || hat.isTouching(lava8) || hat.isTouching(lava9)) && score>0){
     score-=1;
     drop+=1;
  }

  if((hat.isTouching(lava1) || hat.isTouching(lava2) || hat.isTouching(lava3) || hat.isTouching(lava4) || hat.isTouching(lava5)
  || hat.isTouching(lava6) || hat.isTouching(lava7) || hat.isTouching(lava8) || hat.isTouching(lava9)) && score<=0){
    lives--;
  }

  if(hat.isTouching(diamond1)){
    score+=2;
    diamond1.x=random(0,displayWidth*2);
    diamond1.y=random(0,displayHeight*2);
  }
  if(hat.isTouching(diamond2)){
    score+=3;
    diamond2.x=random(0,displayWidth*2);
    diamond2.y=random(0,displayHeight*2);
  }
  if(hat.isTouching(diamond3)){
    score+=2;
    diamond3.x=random(0,displayWidth*2);
    diamond3.y=random(0,displayHeight*2);
  }
  if(hat.isTouching(diamond4)){
    score+=3;
    diamond4.x=random(0,displayWidth*2);
    diamond4.y=random(0,displayHeight*2);
  }
  if(hat.isTouching(diamond5)){
    score+=1;
    diamond5.x=random(0,displayWidth*2);
    diamond5.y=random(0,displayHeight*2);
  }
  if(hat.isTouching(diamond6)){
    score+=2;
    diamond6.x=random(0,displayWidth*2);
    diamond6.y=random(0,displayHeight*2);
  }
  if(hat.isTouching(diamond7)){
    score+=1;
    diamond7.x=random(0,displayWidth*2);
    diamond7.y=random(0,displayHeight*2);
  }
  if(hat.isTouching(diamond8)){
    score+=1;
    diamond8.x=random(0,displayWidth*2);
    diamond8.y=random(0,displayHeight*2);
  }
  if(hat.isTouching(diamond9)){
    score+=2;
    diamond9.x=random(0,displayWidth*2);
    diamond9.y=random(0,displayHeight*2);
  }


  drawSprites();

  noFill();
  strokeWeight(5);
  stroke(155,255,0);
  rect(0,0,width*2,height*2);

  fill(100,100,255);
  stroke(200,200,255);
  strokeWeight(3);
  textSize(25);
  text("diamonds: "+score,hat.x-80,hat.y-60);

 

  if(time>2000){
    shake=(random(-10,10));
    lavapool=createSprite(displayWidth,displayHeight,pool,pool);
    lavapool.shapeColor=rgb(random(200,255),random(0,155),0);
    lavapool.rotation=spin;
    spin+=1000000000000000000000000;
    pool+=2;
    noStroke();
    fill(random(200,255),random(0,155),0);
    ellipse(lavapool.x,lavapool.y,pool+pool/4,pool+pool/4);
    eruption=true;
    minecart=createSprite(95,55);
    minecart.addImage(minecartI);
    minecart.scale=0.1;

    if(lava1.x<150 && lava1.y<150){
      lava1.lifetime=1;
    }
    if(lava2.x<150 && lava2.y<150){
      lava2.lifetime=1;
    }
    if(lava3.x<150 && lava3.y<150){
      lava3.lifetime=1;
    }
    if(lava4.x<150 && lava4.y<150){
      lava4.lifetime=1;
    }
    if(lava5.x<150 && lava5.y<150){
      lava5.lifetime=1;
    }
    if(lava6.x<150 && lava6.y<150){
      lava6.lifetime=1;
    }
    if(lava7.x<150 && lava7.y<150){
      lava7.lifetime=1;
    }
    if(lava8.x<150 && lava8.y<150){
      lava8.lifetime=1;
    }
    if(lava9.x<150 && lava9.y<150){
      lava9.lifetime=1;
    }
    diamond1.lifetime=1;
    diamond2.lifetime=1;
    diamond3.lifetime=1;
    diamond4.lifetime=1;
    diamond5.lifetime=1;
    diamond6.lifetime=1;
    diamond7.lifetime=1;
    diamond8.lifetime=1;
    diamond9.lifetime=1;

    if(hat.isTouching(minecart)){
      escape=true;
    }
    if(hat.isTouching(lavapool)){
      caught=true;
    }
  }

   if(lives<0){
    background(255,0,0);
    fill(0,0,0);
    stroke(255,155,0);
    strokeWeight(10);
    textSize(125);
    text("You Fell Into The Lava\n         Game Over\n            You Lost",100,300);
    camera.position.x=700;
    camera.position.y=400;
  }

  if(escape===true){
    background(0,0,255);
    camera.position.x=700;
    camera.position.y=400;
      fill(200,200,255);
      noStroke();
      textSize(110);
      text("You made it out with "+score+"\ndiamonds!",50,150);
      if(drop>0){
        text("                  You dropped\n"+drop+" though. Your health\nwas "+lives+", or "+(100-lives)+"%\ndamage.",50,280);
      }
      else{
        text("                  Your health\nwas "+lives+", or "+(100-lives)+"% damage.",50,280);
      }
  }

  if(caught===true){
    background(0,0,0);
    camera.position.x=700;
    camera.position.y=400;
    fill(255,255,0);
    stroke(255,0,0);
    strokeWeight(10);
    textSize(125);
    text("You got caught in the\neruption.\n         Game Over\n            You Lost",50,175);
    textSize(35);
    noStroke();
    text("HINT: Try to get ot the minecart at the top left corner↖(it is only there during the eruption)",50,750);
  }
}

