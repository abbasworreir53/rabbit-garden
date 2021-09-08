var garden,rabbit;
var gardenImg,rabbitImg;
var leaves,apples,oranges,redimages;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  oranges = loadImage("orangeleaf.png")
  leaves = loadImage("leaf.png");
  apples = loadImage("apple.png");
  redimages = loadImage("redimage.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  rabbit.x = mouseX;
   
  edges= createEdgeSprites();
  rabbit.collide(edges);
  // mam my math.round code is not wotking so please help me with this
  var randsprite = Math.round(random(1,4));
  if(frameCount % 80 === 0){
    if(randsprite === 1){
      leave();
    } else if(randsprite === 2){
      apple();
    } else if (randsprite === 3){
      orange();
    } else{
      redleave();
    }
  }  

  redleave();
  orange();
  leave();
  apple();
  drawSprites();
   
  

  
}
  

function leave(){
     if(frameCount % 80 === 0){
    console.log("my name is abbas")
   var leave1 = createSprite(80, 10, 30, 30);
   leave1.scale = 0.1;
   leave1.addImage(leaves);
   leave1.velocityY = 2;
   leave1.lifetime = 200;
  

  
     }
  
 

 console.log(rabbit.x); 
  
}
 
function apple(){
  if(frameCount % 80 === 0){
   var apple1 = createSprite(160, 10, 30, 30) ;
   apple1.addImage(apples) ;
   apple1.scale = 0.1 ;

   apple1.velocityY = 2 ;

   apple1.lifetime = 200 ;

   rabbit.depth = apple1.depth ;
   
   rabbit.depth = rabbit.depth+1 ;

  }
}
 

function orange(){
  if(frameCount % 80 === 0){
   var orange1 = createSprite(240, 10, 30, 30) ;
   orange1.addImage(oranges) ;
   orange1.scale = 0.1 ;

   orange1.velocityY = 2 ;

   orange1.lifetime = 200;

   rabbit.depth = orange1.depth ;
   
   rabbit.depth = rabbit.depth+1 ;

   var randsprite = Math.round(random(1,4));
  if(frameCount % 80 === 0){
    if(randsprite === 1){
      leave();
    } else if(randsprite === 2){
      apple();
    } else if (randsprite === 3){
      orange();
    } else{
      redleave();
    }
  } 
  }
}

function redleave(){
  if(frameCount % 80 === 0){
    var redleave1 = createSprite(320, 10, 30, 30) ;
    redleave1.addImage(redimages) ;
    redleave1.scale = 0.1 ;
 
    redleave1.velocityY = 2 ;
    
    redleave1.lifetime = 200;

    rabbit.depth = redleave1.depth ;
    
    rabbit.depth = rabbit.depth+1 ;

  
   }
}
