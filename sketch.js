var form,game;
var b,bImg,intro,introImg;
var gameState = 0;
var plant,plantImg;
var walle,walle1Img,walle2Img;
var wa,waImg,trash,trashImg;//GIF//
var t1,t2,t3,t4,m1,m2,m3,m4,m5,m6,tireImg,metalImg,cooperImg,Tscore=0,cube = 0;// CUBES MADE,Tscore - trash collected,cube - count of cubes //
var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10;
var ok = 0;
var junk1, junk2, junk3,junk1Img,junk2Img;
var sound;
var eve,eveImg;
var axiom_m,axiom_mImg, axiom, axiomImg;
var earth,earthImg,rocket,rocketImg,r,space,spaceImg;//r - NPC, rocket - PC// 
//LEVEL  - 2 SATELLITE//
var s1,s2,s1Img,s2Img;
//LEVEL  - 2 SATELLITE//

//LEVEL  - 2, CAMERA VIEW- 2//
var sp_1,sp_2,sp_3,sp_1Img,sp_2Img,sp_3Img;
var ship,shipImg;
var boost = 1;//FOR THE BOOST COUNT//

var b_m = 0;// FOR BOOSTER MODE//

var points = 0 , e = 0;

var dis = 0; //FOR Distance travelled by the rocket //

var s_c = 0;//FOR SATELLITE COUNT//

var d = 0;//d For Damage to the satellite// 

var t = 0;//// WHEN ROCKET TOUCHES TO THE SHIP,SWAL()////
//LEVEL  - 2//

 //// AFTER REACHING IN AXIOM////
 var axi,k = 0;//IF KEY DOWN THEN CHANGE ANIMATION//
 var w_p = 0;//WALL E REACHING THE PATH//
  //// AFTER REACHING IN AXIOM////

  ////INTRODUCTION////
  var logoImg,logo;
  var welcome,to;
  ////INTRODUCTION////

  var box_1,box_2; 

function preload() {
  bImg = loadImage("Disney Pixar.png");
  plantImg = loadImage("plant.png");
  walle1Img = loadAnimation("WALLE_side.png");
  walle2Img = loadAnimation("WALLE_side2.png");
  waImg = loadImage("trash_cube.png");
  //trashImg = loadAnimation("b1.gif","b2.gif","b3.gif");
  trashImg = loadAnimation("b1.gif");
  cubeImg = loadImage("cube_1.png");
  eveImg = loadImage("EVE.png");

  //MUSIC//
  sound = loadSound("music.mp3");
  warning = loadSound("Warning.mp3");
 // music_button = loadSound("musicB_1.mp3");
  //MUSIC//

  axiom_mImg = loadImage("ship_2.png");
  axiomImg = loadImage("ship_1.jpg");
  //WASTE//
  tireImg = loadImage("tire.png");
  metalImg = loadImage("m1.png");
  cooperImg = loadImage("mm1.png")
  junk1Img = loadImage("junk_1.png");
  junk2Img = loadImage("junk_2.png");
  //WASTE//

  //LEVEL2//
  earthImg = loadImage("earth.png");
  spaceImg = loadImage("sp_1.jpg");
  rocketImg = loadImage("rocket.png");
  s1Img = loadImage("s_1.png"); //SATELLITE//
  shipImg = loadImage("ship_3.png");

  // DIFFERENT VIEWS OF THE SATELLITE //
  s3_1Img = loadAnimation("sat_1.png");
  s3_2Img = loadAnimation("sat_2.png");

  s2_1Img = loadAnimation("sat_2.1.png");
  s2_2Img = loadAnimation("sat_2.2.png");
  // DIFFERENT VIEWS OF THE SATELLITE //

   // CAMERA VIEW - 2//
  // sp_1Img = loadImage("sp_1.jpg");
  // rc_Img = loadImage("rc_back.png");
  // CAMERA VIEW - 2//

  coinImg = loadImage("coin.png");
  //LEVEL2//

  //// AFTER REACHING IN AXIOM////
  ax1Img = loadAnimation("assets/ax1.png");
  ax2Img = loadAnimation("assets/ax2.png");
  ax3Img = loadAnimation("assets/ax3.png");
  ax4Img = loadAnimation("assets/ax4.png");
  ax5Img = loadAnimation("assets/ax5.png");
  ax6Img = loadAnimation("assets/ax6.png");
  ax7Img = loadAnimation("assets/ax7.png");
  ax8Img = loadAnimation("assets/ax8.png");
  ax9Img = loadAnimation("assets/ax9.png");
  w1Img = loadImage("assets/walle3.png");//WALL - E BACK VIEW//
  p1Img = loadAnimation("assets/p_1.png");
  p2Img = loadAnimation("assets/p_2.png");
  p3Img = loadAnimation("assets/p_3.png");
  p4Img = loadAnimation("assets/p_4.png");
  p5Img = loadAnimation("assets/p_5.png");
  p6Img = loadAnimation("assets/p_6.png");
  p7Img = loadAnimation("assets/p_7.png");
  p8Img = loadAnimation("assets/p_8.png");
  p9Img = loadAnimation("assets/p_9.png"); 
  p10Img = loadAnimation("assets/p_10.png");
  p11Img = loadAnimation("assets/p_11.png"); 
  
  // INNER VIEW OF SPACESHIP //
  i1Img = loadAnimation("assets/i_1.png");
  i2Img = loadAnimation("assets/i_2.png");
  i3Img = loadAnimation("assets/i_3.png");
  i4Img = loadAnimation("assets/i_4.png");
  i5Img = loadAnimation("assets/i_5.png");
  i6Img = loadAnimation("assets/i_6.png");
  i7Img = loadAnimation("assets/i_7.png");
  i8Img = loadAnimation("assets/i_8.png");
  i9Img = loadAnimation("assets/i_9.png");
  i10Img = loadAnimation("assets/i_10.png");
  i11Img = loadAnimation("assets/i_11.png");
  i12Img = loadAnimation("assets/i_12.png");
  i13Img = loadAnimation("assets/i_13.png");
  i14Img = loadAnimation("assets/i_14.png");
  i15Img = loadAnimation("assets/i_15.png");
  i16Img = loadAnimation("assets/i_16.png");
  i17Img = loadAnimation("assets/i_17.png");
  i18Img = loadAnimation("assets/i_18.png");
  i19Img = loadAnimation("assets/i_19.png");
  i20Img = loadAnimation("assets/i_20.png");
  i21Img = loadAnimation("assets/i_21.png");
  i22Img = loadAnimation("assets/i_22.png");
  i23Img = loadAnimation("assets/i_23.png");
  i24Img = loadAnimation("assets/i_24.png");
  i25Img = loadAnimation("assets/i_25.png");

  symbolImg = loadImage("symbol.png");
  // INNER VIEW OF SPACESHIP //

  // In the finishing of the Game //
  pltImg = loadImage("assets/planted.png"); 
  e1Img = loadImage("assets/e_1.png"); 
  e2Img = loadImage("assets/e_2.png"); 
  e3Img = loadImage("assets/e_3.png"); 
  e4Img = loadImage("assets/e_4.png"); 
  e5Img = loadImage("assets/e_5.png"); 
  e6Img = loadImage("assets/e_6.png"); 
  e7Img = loadImage("assets/e_7.png"); 
 // In the finishing of the Game //


  //// AFTER REACHING IN AXIOM////

  

   crashImg = loadImage("crash.jpg");

}

function setup(){
 canvas = createCanvas(1100,700);

  b = createSprite(550,348,20,20); 
  b.addImage("b1",bImg);
  b.scale = 1.1;

//GIF//
  trash = createSprite(4050,340,30,30);
  trash.addAnimation("tr1",trashImg);
  trash.scale = 2.5; 
 //GIF//  

  //IN THE SERVE STATE//
  wa = createSprite(4300,580,30,30);
  wa.addAnimation("wa1",waImg);
  wa.scale = 0.6;
  
  //IN THE PLAY STATE//

  junk2 = createSprite(7990,420,10,10)
  junk2.addImage("j2",junk2Img);
  junk2.scale = 1.8;

  junk1 = createSprite(3800,480,10,10)
  junk1.addImage("j1",junk1Img);
  junk1.scale = 1.5;

  walle = createSprite(100,6000,30,30);
  walle.addAnimation("walle1",walle1Img);
  walle.addAnimation("walle2",walle2Img);
  walle.scale = 0.6;

  plant = createSprite(9800,610,20,20);
  plant.addImage("p1", plantImg);
  plant.scale = 0.6;

  //// TYRES ////
  t1 = createSprite(8000,650,50,50);
  t1.addAnimation("t1",tireImg);
  t1.scale = 0.2;
  t2 = createSprite(9500,650,50,50);
  t2.addAnimation("t2",tireImg);
  t2.scale = 0.2;
  t3 = createSprite(9100,600,50,50);
  t3.addAnimation("t3",tireImg);
  t3.scale = 0.2;
  t4 = createSprite(8300,600,50,50);
  t4.addAnimation("t4",tireImg);
  t4.scale = 0.2;
 //// TYRES ////
  
 
  m1 = createSprite(8400,650,50,50);
  m1.addAnimation("m1",metalImg);
  m1.scale = 1;
  m1.setCollider("rectangle",0,0,95,90);
  m2 = createSprite(6950,650,50,50);
  m2.addAnimation("m2",metalImg); 
  m2.scale = 1;
  m2.setCollider("rectangle",0,0,95,90);
  m3 = createSprite(6100,600,50,50);
  m3.addAnimation("m3",metalImg); 
  m3.scale = 1;
  m3.setCollider("rectangle",0,0,95,90);
  m4 = createSprite(9830,600,50,50);
  m4.addAnimation("m4",metalImg);
  m4.scale = 1;
  m4.setCollider("rectangle",0,0,95,90);
  m5 = createSprite(5530,640,50,50);
  m5.addAnimation("m5",cooperImg);
  m5.scale = 1;
  m5.setCollider("rectangle",0,0,95,90);
  m6 = createSprite(7300,580,50,50);
  m6.addAnimation("m6",cooperImg);
  m6.scale = 1;
  m6.setCollider("rectangle",0,0,95,90);
  
  //INTRO BEFORE LEVEL 2//
  axiom = createSprite(4200,230,20,20);
  axiom.addImage("ax2", axiomImg);
  axiom.scale = 0.5;

  axiom_m = createSprite(5000,200,30,30);
  axiom_m.addImage("ax1",axiom_mImg);
  axiom_m.scale = 1.3;
  //INTRO BEFORE LEVEL 2//
  


//LEVEL 2//
  space = createSprite(43000,320,20,20);
  space.addImage("s1",spaceImg);
  space.scale = 3.2;

  earth = createSprite(540,326,20,20);
  earth.addImage("e1",earthImg);
  earth.scale = 2;
  earth.visible = false;

  eve = createSprite(540,4600,30,30);
  eve.addImage("e1",eveImg);
  eve.scale = 0.5;

  r = createSprite(390,-400,20,20); 
  r.addImage("r2",rocketImg);
  r.scale = 3;

  s1 = createSprite(random(100,200),-90,10,10);
  s1.addImage("sa_1",s1Img);
  s1.scale = 0.6;
  s1.velocityY = 0;
  s1.setCollider("rectangle",0,0,196,180)
  
  s2 = createSprite(random(400,600),-130,10,10);
  s2.addAnimation("sa_2.1",s2_1Img);
  s2.addAnimation("sa_2.2",s2_2Img);
  s2.scale = 0.7;
  s2.velocityY = 0;
  s2.setCollider("rectangle",-90,-30,230,80)
 
  s3 = createSprite(random(800,900),-165,10,10);
  s3.addAnimation("sa_3.1",s3_1Img);
  s3.addAnimation("sa_3.2",s3_2Img);
  s3.scale = 0.8;
  s3.velocityY = 0;
  s3.setCollider("rectangle",-90,-5,200,70)

  ship = createSprite(550,-220,20,20);
  ship.addImage("s3",shipImg);
  ship.scale = 0.2;
  ship.setCollider("rectangle",20,20,300,300)
  //ship.visible = false;


  rocket = createSprite(460,380,20,20); 
  rocket.addImage("r1",rocketImg);
  rocket.scale = 1.2;
  rocket.setCollider("rectangle",80,0,100,130)
  rocket.visible = false;

  atmos = createSprite(550,-200,1310,40);
  atmos.shapeColor = rgb(167, 234, 237);

 //IN THE PLAY STATE//

 //// AFTER REACHING IN AXIOM////
 axi = createSprite(780,375,20,20);
 axi.addAnimation("a_1", ax1Img);
 axi.addAnimation("a_2", ax2Img);
 axi.addAnimation("a_3", ax3Img);
 axi.addAnimation("a_4", ax4Img);
 axi.addAnimation("a_5", ax5Img);
 axi.addAnimation("a_6", ax6Img);
 axi.addAnimation("a_7", ax7Img);
 axi.addAnimation("a_8", ax8Img);
 axi.addAnimation("a_9", ax9Img);
 //axi.scale = 1.2;
 axi.scale = 1.6;
 axi.visible = false;

//// AFTER REACHING IN AXIOM////

// LEVEL - 3//
 p = createSprite(780,380,20,20);
 p.addAnimation("p_1", p1Img);
 p.addAnimation("p_2", p2Img);
 p.addAnimation("p_3", p3Img);
 p.addAnimation("p_4", p4Img);
 p.addAnimation("p_5", p5Img);
 p.addAnimation("p_6", p6Img);
 p.addAnimation("p_7", p7Img);
 p.addAnimation("p_8", p8Img);
 p.addAnimation("p_9", p9Img);
 p.addAnimation("p_10", p10Img);
 p.addAnimation("p_11", p11Img);
 p.scale = 1.5;
 p.visible = false;
 
// Interior Of the ship //
 i = createSprite(780,380,20,20);
 i.addAnimation("i1",i1Img);
 i.addAnimation("i2",i2Img);
 i.addAnimation("i3",i3Img);
 i.addAnimation("i4",i4Img);
 i.addAnimation("i5",i5Img);
 i.addAnimation("i6",i6Img);
 i.addAnimation("i7",i7Img);
 i.addAnimation("i8",i8Img);
 i.addAnimation("i9",i9Img);
 i.addAnimation("i10",i10Img);
 i.addAnimation("i11",i11Img);
 i.addAnimation("i12",i12Img);
 i.addAnimation("i13",i13Img);
 i.addAnimation("i14",i14Img);
 i.addAnimation("i15",i15Img);
 i.addAnimation("i16",i16Img);
 i.addAnimation("i17",i17Img);
 i.addAnimation("i18",i18Img);
 i.addAnimation("i19",i19Img);
 i.addAnimation("i20",i20Img);
 i.addAnimation("i21",i21Img);
 i.addAnimation("i22",i22Img);
 i.addAnimation("i23",i23Img);
 i.addAnimation("i24",i24Img);
 i.addAnimation("i25",i25Img);
 i.scale = 1.5;
 i.visible = false;
// Interior Of the ship //

  box_2 = createSprite(750,460,100,200);//assemble_b2 is the box //
  box_2.shapeColor = rgb(93, 90, 90);
  box_2.visible = false;

  box_1 = createSprite(750,460,20,20);// assemble_b is the sprite with plant symbol // 
  box_1.addImage("symbol",symbolImg);
  box_1.scale = 0.19;
  box_1.visible = false;

  planted = createSprite(windowWidth/2-200,7200,20,20);
  planted.addImage("plt",pltImg);
  planted.scale = 2.09;

  // e1.... is the image in the end//
  e1 = createSprite(windowWidth/2-200,2700,20,20);
  e1.addImage("e1",e1Img);
  e1.scale = 2.9;

  e2 = createSprite(windowWidth/2-200,e1.y+2500,20,20);
  e2.addImage("e2",e2Img);
  e2.scale = 2.8;

  e3 = createSprite(windowWidth/2-200,e2.y+2500,20,20);
  e3.addImage("e3",e3Img);
  e3.scale = 3.2;
 
  e4 = createSprite(windowWidth/2-200,e3.y+2500,20,20);
  e4.addImage("e4",e4Img);
  e4.scale = 3;
  
  e5 = createSprite(windowWidth/2-200,e4.y+2500,20,20);
  e5.addImage("e5",e5Img);
  e5.scale = 3.2;
 
  e6 = createSprite(windowWidth/2-200,e5.y+2500,20,20);
  e6.addImage("e6",e6Img);
  e6.scale = 4.3;
  
  e7 = createSprite(windowWidth/2-200,e6.y+2500,20,20);
  e7.addImage("e7",e7Img);
  e7.scale = 4;
  
  crash = createSprite(600,300,20,20);
  crash.addImage("crash",crashImg);
  crash.scale = 1.5;
  crash.visible = false;

 w = createSprite(windowWidth/2-60,630,10,10);
 w.addAnimation("w_1",w1Img);
 w.addAnimation("w_2",walle1Img);
 w.addAnimation("w_3",walle2Img);
 w.scale = 0.6;
 w.visible = false;

 
 coin = createSprite(200,-200,20,20);
 coin.addImage("coin1",coinImg);
 coin.scale = 0.09;

 asteroid = createSprite(300,-290,10,10);
 asteroid.addImage("ast_1",astImg);
 asteroid.scale = 0.2;

 booster = createSprite(200,-400,20,20);
 booster.addImage("b_1", boostImg);
 booster.scale = 0.35;
 // LEVEL - 3//
 
  game = new Game()
  game.start();

  // FOR PLAYING THE INITIALLY IN SETUP AND //
  //THEN INCREASING THE VOLUME IN DRAW TO AVOID MUTIPLE SOUNDS // 
  warning.play(); 
  warning.loop();
  warning.setVolume(0);
  
  success.play();
  success.loop();
  success.setVolume(0);

  coin_collect.play(); 
  coin_collect.setVolume(0);
   // FOR PLAYING THE INITIALLY IN SETUP AND //
   //THEN INCREASING THE VOLUME IN DRAW TO AVOID MUTIPLE SOUNDS // 

   c1 = createSprite(random(20,340),650,20,20);
   c1.addImage("c_1",cubeImg);
   c1.scale = 0.2;
   c1.visible = false;
   c2 = createSprite(random(20,340),650,20,20);
   c2.addImage("c_2",cubeImg);
   c2.scale = 0.2;
   c2.visible = false;
   c3 = createSprite(random(20,340),650,20,20);
   c3.addImage("c_3",cubeImg);
   c3.scale = 0.2;
   c3.visible = false;
   c4 = createSprite(random(20,340),650,20,20);
   c4.addImage("c_4",cubeImg);
   c4.scale = 0.2;
   c4.visible = false;
   c5 = createSprite(random(20,340),650,20,20);
   c5.addImage("c_5",cubeImg);
   c5.scale = 0.2;
   c5.visible = false;
   c6 = createSprite(random(20,340),650,20,20); 
   c6.addImage("c_6",cubeImg);
   c6.scale = 0.2;
   c6.visible = false;
   c7 = createSprite(random(20,340),650,20,20);
   c7.addImage("c_7",cubeImg);
   c7.scale = 0.2;
   c7.visible = false;
   c8 = createSprite(random(20,340),650,20,20);
   c8.addImage("c_8",cubeImg);
   c8.scale = 0.2;
   c8.visible = false;
   c9 = createSprite(random(20,340),650,20,20);
   c9.addImage("c_9",cubeImg);
   c9.scale = 0.2;
   c9.visible = false;
   c10 = createSprite(random(20,340),650,20,20);
   c10.addImage("c_10",cubeImg);
   c10.scale = 0.2;
   c10.visible = false;

  
}

function draw(){
   background("black"); 


   //IN THE SERVE STATE//
   if(gameState === 1){
    b.destroy();
    wa.x = 430; 
   trash.x = 450;
   
   }
   //IN THE SERVE STATE//

   //LEVEL - 1 //
   if(gameState === 2){
    Cube();
    wa.destroy(); 
    walle.y = 600;
    trash.destroy();
    junk1.x = 380;
    junk2.x = 799;
    t1.x = 800;
    t2.x = 980;
    t3.x = 950;
    t4.x = 860;
    m1.x = 840;
    m2.x = 695;
    m3.x = 610;
    m4.x = 983;
    m5.x = 553;
    m6.x = 730;
    plant.x = 980;
    background("#BA8160");
  
    if(keyDown("LEFT_ARROW")&&walle.x>40&&cube < 10){
      walle.x = walle.x-8;
      walle.changeAnimation("walle2");
    }
    if(keyDown("RIGHT_ARROW")&&walle.x<1070&&cube < 10){
      walle.x = walle.x+8;
      walle.changeAnimation("walle1");   
    }

   
 //COLLECTING THE TRASH//
    Collected(t1);
    Collected(t2);
    Collected(t3);
    Collected(t4);
    Collected(m1);
    Collected(m2);
    Collected(m3);
    Collected(m4);
    Collected(m5);
    Collected(m6); 
 //COLLECTING THE TRASH//

//EXTRA //
  /* if(ok === 1){
      createCanvas(1100,600);
      background("#BA8160");
      
      if(r.y<400){
        r.velocityY = 2;
       }
     else{
       r.velocityY = 0;
      }
      if(eve.x <= 800 && r.velocityY === 0){
        eve.y = 460;
        eve.velocityX = 2;
      }
      else{
        eve.velocityX = 0;
       
       }
     
       walle.y = 500;
       walle.x = 980;
       plant.x =  walle.x-70;
       plant.y =  walle.y-40;
       walle.changeAnimation("walle2");
       junk1.x = 380;
       junk2.x = 799;
    }*/ 
 //EXTRA //
  }
if(gameState === 3||gameState ==="serve"||gameState === "c_1"||gameState === "end"){
  createCanvas(1100,600)
  background("black");
}

 //LEVEL - 1 //
  if(gameState === 3){
    cube = 11;
    walle.destroy();
    t1.destroy();
    t2.destroy();
    t3.destroy();
    t4.destroy();
    m1.destroy();
    m2.destroy();
    m3.destroy();
    m4.destroy();
    m5.destroy();
    m6.destroy();
    r.destroy();
    junk1.destroy();
    junk2.destroy();
    plant.destroy();
    axiom.x = 420;
  }

 //LEVEL - 2//
  // THE SERVE STATE //
 if(gameState === "serve"){
    space.x = 430;
    rocket.visible = true;
    earth.visible = true; 
 }
 // THE SERVE STATE //
 
 //*GAME CAMERA - 1*//
  if(gameState === "c_1"){
   
    axiom_m.destroy()
    axiom.destroy()
    rocket.visible = true;
    space.visible = true;
    s3.changeAnimation("sa_3.2");
    s2.changeAnimation("sa_2.1");
    
  if(keyDown("LEFT_ARROW")){
    rocket.x = rocket.x - 8;
   // rc.x = rc.x - 8;
    earth.x =  earth.x + 10;
  }
  if(keyDown("RIGHT_ARROW")){
    rocket.x = rocket.x + 8;
   // rc.x = rc.x + 8;
    earth.x =  earth.x - 10;
  }  
  
  earth.velocityY =  4;
  space.velocityY = 11;

  if(space.y>450){
    space.y = 180;
  }

  space.velocityY = space.velocityY+0.09; 

  // FIXED SCALE ; IN GAME CAMERA 2 THE SCALE IS INCREASING //
  s1.scale = 0.6;
  s2.scale = 0.7;
  s3.scale = 0.8;
 // s1.velocityY = 10;
  s2.velocityY = 9;
  s3.velocityY = 10;
  coin.velocityY = 8;
  booster.velocityY = 8;
   // FIXED SCALE ; IN GAME CAMERA 2 THE SCALE IS INCREASING //

   ////TEST////
   damage();
   ////TEST////

   
   if(dis > 1200){
    atmos.velocityY = 4;
   }

   if(atmos.y < 720){
   if(s1.y>695){
      s1.x = random(70,286);
      s1.y = -30;
      s1.scale = 0.6;
    }
  
    if(s2.y>695){
      s2.x = random(360,490);
      s2.y = -150;
      s2.scale = 0.7;
    }
  
    if(s3.y>695){
      s3.x = random(820,1010);
      s3.y = -70;
      s3.scale = 0.7;
    }
  }

  if(atmos.y > 730){
    atmos.destroy();  
  }

 if(dis > 1400||dis > 2300||dis > 3500){
   asteroid.scale = asteroid.scale+0.001;
   asteroid.velocityY = 2;
   asteroid.velocityX = 3;  
 }
  if(asteroid.y > -10 && asteroid.y < 750){
    warning.setVolume(1);
  }else if(asteroid.y > 750||rocket.isTouching(asteroid)){
    warning.setVolume(0);
  }


 if(asteroid.x > 440){
  asteroid.x =  asteroid.x-5;
 } 

 if(rocket.isTouching(asteroid)){
  warning.stop();
  boost = boost+0;
  boost = boost-0;
  b_m = 0;
  EndGame();
  stop();
  gameState = "end";
  crash.visible = true;
}

  // AXIOM SHIP //
  if(ship.y < 320&&ship.scale<3.4){    
    if(dis > 3900){
      ship.velocityY = 3;
      ship.scale = ship.scale+0.001;
    }
  }
  else{
    ship.y = 321;
    ship.scale = ship.scale+0.000;
    space.velocityY = 0;
  }
  if(rocket.isTouching(ship)){
    background("black");
    warning.stop();
    Enter();// SWAL //
    b_m = 0;
    ship.velocityY = 0;
    stop(); // DESTROY //
    dis = dis+0;
    w_p = 1;//Use OF VARIABLE TO CALL THE FUNCTION//
   }
// AXIOM SHIP //
 
    if(rocket.isTouching(coin)){ 
      coin_collect.setVolume(1);
      points = points+1;
      coin.y = random(-40,-100);
      coin.x = random(50,950);
     }

     if(b_m === 0){
      dis = dis+1;
      if(rocket.isTouching(booster)){
        if(boost < 187){
          boost = boost + 20;
        }
        if(boost > 187) {
          b_m = 1;
        }  
        booster.y = random(-20,-90);
        booster.x = random(130,800);
       }
     }
       
// BOOSTER MODE //
   if(b_m === 1){
    dis = dis+3;
    space.velocityY = 28; 
    s1.velocityY = 25; 
    s2.velocityY = 25; 
    s3.velocityY = 25;
    coin.velocityY = 19; 
    booster.velocityY = 19; 
    boost = boost - 0.3;

   if(boost <= 2){
    b_m = 0;
    boost = 1;
    s1.velocityY = 8;
    s2.velocityY = 7;
    s3.velocityY = 8;
    coin.velocityY = 5;
    space.velocityY = 5;
   }   
  } 
// BOOSTER MODE //

   if(coin.y>695){
    coin.y = random(-100,-900);
    coin.x = random(100,900);
   }

   if(booster.y>710){
    booster.y = random(-20,-90);
    booster.x = random(130,800);
   }
  
//Use OF VARIABLE TO CALL THE FUNCTION//
 if(w_p === 1){
  w.visible = true;
  w_Control();
 } 
//Use OF VARIABLE TO CALL THE FUNCTION// 

  // AXIOM SHIP //

}

//*GAME CAMERA - 1*//

//**//**//**//**//**//**//**//

 //*GAME CAMERA - 2*//

 /*if(gameState  === "c_2"){
  rocket.visible = false;
  space.visible = false;
  ship.visible = true;
  s.visible = true;
  rc.visible = true;
  s3.changeAnimation("sa_3.1");
  s2.changeAnimation("sa_2.2");

  s.scale =  s.scale+0.03;

  s1.scale =  s1.scale+0.003;
  s2.scale =  s2.scale+0.003;
  s3.scale =  s3.scale+0.003;
  s1.velocityY = 1.4;
  s2.velocityY =  1.4;
  s3.velocityY =  1.6;

  if(ship.y < 350&&ship.scale<3.4){
    ship.velocityY = 1;
    ship.scale = ship.scale+0.001;
  }
  else{
    ship.y = 352;
    ship.scale = ship.scale+0.000;  
  }

  ////TEST////
  damage();
  ////TEST////

 if(s.scale > 4.4){
    s.scale = 2.9;
   }
 if(s1.y>695){
    s1.y = -20;
    s1.scale = 0.1;
    s_c = s_c + 1;
  }
  if(s2.y>695){
    s2.y = -40;
    s2.scale = 0.1;
  }
  if(s3.y>695){
    s3.y = -40;
    s3.scale = 0.1;
  } 
//CONTROLS//
  if(keyDown("LEFT_ARROW")){
    rc.x = rc.x - 8;
    rocket.x = rocket.x - 8;
  }
  if(keyDown("RIGHT_ARROW")){
    rc.x = rc.x + 8;   
    rocket.x = rocket.x + 8;
  } 
if(rc.isTouching(ship)){
    background("black");
    w_Control();
    Enter();
    stop();
    w_p = 1;//Use OF VARIABLE TO CALL THE FUNCTION//
   }

//Use OF VARIABLE TO CALL THE FUNCTION//
 if(w_p === 1){
  w.visible = true;
  w_Control();
 } 
//Use OF VARIABLE TO CALL THE FUNCTION// 

//CONTROLS// 

}
*/


if(gameState === "Finish"){
  e = e + 1;
}
 if(e >=350){
      planted.velocityY = -2;
      e1.velocityY = -2;
      e2.velocityY = -2;
      e3.velocityY = -2;
      e4.velocityY = -2;
      e5.velocityY = -2;
      e6.velocityY = -2;
      e7.velocityY = -2;  
    }

//*GAME CAMERA - 2*//
// MAIN //
if(d === 10){
 d = 11;
 gameState = "end";
  swal("Oh no!","There is multiple damage on rocket we can't go ahead","error");
  stop();// FOR STOPPING THE GAME
  crash.visible = true;
}

// MAIN //

 //level - 2//

   drawSprites();

   if(gameState === 2 && ok=== 0){
    fill ("yellow")
    textSize(30);
    text("Trash collected inside : "+Tscore +" %" , 370,30)
    fill ("yellow")
    textSize(30);
    text("Cubes converted : "+cube  , 20,30)
   }
 if(gameState === 3){
  fill("yellow")
  textSize(40);
  text("The plant needs to be put ",80,520);
  text("in the ship to bring all the people back to earth!",80,570);
 } 
  
 if(gameState === "c_1"&&w_p === 0&& d < 12){
  fill("white")
  textSize(35);
  text("Damage :" + d,20,50);
  text("Distance :" + dis +" Kms",800,50);
  text("Speed Boost :",820,126);
  text("Points : "+ points,810,220); 
  fill("green")
  text("THE VAN ALLEN BELT OF THE EARTH",210,atmos.y+10);
  fill("white");
  rect(830,140, 185, 20);
  fill("#f50057");
  rect(830,140,boost, 20); 
}

 if(b_m === 1){
  textSize(40);
  text("Booster Mode ON!",400,40);
 }

 if(d === 10){
  fill("red") 
  textSize(40);
  text("Sorry, Game Over!",400,50);
 }

 if(e7.y<200){
 fill("white");
 textSize(80);
 text("Thank you for playing my Game",windowWidth/2-680,windowHeight/2);
 text("Hope you enjoyed it!",windowWidth/2-680,windowHeight/2+160);
 }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function Collected(a){
  if(walle.isTouching(a)){
    Tscore = Tscore+10;
    a.destroy();
  }
}

function damage(){
  // b_m is BOOSTER MODE //
  if(b_m === 0){
    if(rocket.isTouching(s1)){
      s1.y = random(-500,-900);
      d = d+1;
     }
     if(rocket.isTouching(s2)){
       s2.y =  random(-500,-900)
       d = d+1;
      }
      if(rocket.isTouching(s3)){
       s3.y =  random(-520,-900)
       d = d+1;
      }
  } 
 
}

//DESTROYING THE ELEMENTS IN LEVEL 2//
function stop(){
  ship.destroy();
  s1.destroy();
  s2.destroy();
  s3.destroy();
  space.destroy();
  rocket.destroy();
  coin.destroy();
  dis = dis+0;
  atmos.destroy();
  asteroid.destroy();
  booster.destroy();
  warning.setVolume(0);

}
//DESTROYING THE ELEMENTS IN LEVEL 2//

function Enter(){
  swal({
    title: `GREAT JOB!`,
    text: "YOU HAVE REACHED THE AXIOM SHIP!",
    imageUrl: 
    "https://i.pinimg.com/originals/04/e2/66/04e266bbdb0e0d1fe3033bf20ad59a3f.jpg",
    imageSize: "100x100",
    confirmButtonText: "Ok"
    })
}

function w_Control(){
  canvas = createCanvas(windowWidth,windowHeight);

  axi.visible = true;
  c1.visible = false;
  c2.visible = false;
  c3.visible = false;
  c4.visible = false;
  c5.visible = false;
  c6.visible = false;
  c7.visible = false;
  c8.visible = false;
  c9.visible = false;
  c10.visible = false;

   if(keyDown("UP_ARROW")){
     w.y = w.y - 0.2;
     k = k+1;
   }

     if(k === 1){
       axi.changeAnimation("a_2") ;
     }
     if(k === 8){
       axi.changeAnimation("a_3") ;
     }
     if(k === 15){
       axi.changeAnimation("a_4") ;
     }
     if(k === 25){
       axi.changeAnimation("a_5") ;
     }
     if(k === 38){
       axi.changeAnimation("a_6") ;
     }
     if(k === 46){
       axi.changeAnimation("a_7") ;
     }
     if(k === 59){
       axi.changeAnimation("a_8") ;
     }
     if(k === 67){
       axi.changeAnimation("a_9") ;
      // swal("MISSION PLANT!","Let's find the installation place of plant","warning");  
       k = 68;
       axi.visible === false;
       p.visible = true;
     }
  
    if(k === 74){
      p.changeAnimation("p_1") ; 
    }
    if(k === 83){
      p.changeAnimation("p_2") ; 
    }
    if(k === 95){
      p.changeAnimation("p_3") ; 
    }
    if(k === 104){
      p.changeAnimation("p_4") ; 
    }
    if(k === 119){
      p.changeAnimation("p_5") ; 
    }
   
    if(k === 127){
      p.changeAnimation("p_6") ; 
    }
    if(k === 138){
      p.changeAnimation("p_7") ; 
    }
    if(k === 149){
      p.changeAnimation("p_8") ; 
      
    }
    if(k === 153){
      p.changeAnimation("p_10") ; 
      
    }
    if(k === 165){
      p.changeAnimation("p_9") ; 
      
    }
    if(k === 174){
      p.changeAnimation("p_11") ;  
     // swal("Great!","You are now entering the working system of the Axiom","success");
      k = k+1;
    }
  
    if(k === 176){
      p.visible = false;
      axi.visible = false;
      i.visible = true;
    }

    // INNER VIEW OF SHIP //

    if(k === 186){
      i.changeAnimation("i1") ;     
    }
    if(k === 195){
      i.changeAnimation("i2") ;     
    }
    if(k === 206){
      i.changeAnimation("i3") ;     
    }
    if(k === 217){
      i.changeAnimation("i4") ;     
    }
    if(k === 225){
      i.changeAnimation("i5") ; 
      box_1.visible = true;  
      box_1.scale = 0.1;  
      box_2.visible = true;
      box_2.scale = 0.5;  
      
    }
  // INSTALLATION BOX IS COMING NEAR - EFFECT// 
    if(keyDown("UP_ARROW")&&k >= 122&&k <= 244){
      box_1.scale = box_1.scale+0.001;  
      box_2.scale = box_2.scale+0.003;  
    }   
 // INSTALLATION BOX IS COMING NEAR - EFFECT// 
    if(k === 239){
      i.changeAnimation("i6") ;     
    }
    if(k === 248){
      i.changeAnimation("i7") ;     
    }
    if(k === 257){
      i.changeAnimation("i8") ;     
    }
    if(k === 277){
      i.changeAnimation("i9") ;     
    }
    if(k === 289){
      i.changeAnimation("i10") ;     
    }
    if(k === 312){
      i.changeAnimation("i11") ;     
    }
    if(k === 329){
      i.changeAnimation("i12") ;     
    }
    if(k === 338){
      i.changeAnimation("i13") ;     
    }
    if(k === 346){
      i.changeAnimation("i14") ;     
    }
    if(k === 358){
      i.changeAnimation("i15");  
      k = 360;
     if(w.isTouching(box_2)){
      background("white");
      box_1.destroy();
      box_2.destroy();
      axi.destroy();
      i.destroy();
      w.destroy();
      planted.y = 720;
      sound.play();
      sound.loop();
      k = 365;
      gameState = "Finish";// Completed the entire task/Game //
      swal({
        title: `Excellent!`,
        text: "You have done it. You have completed the Mission!",
        confirmButtonText: "Ok"
        })    
     }
    }

    // INNER VIEW OF SHIP //
  }
  
function EndGame(){
  swal("Oh no!","You have been hit by the asteroid! Sorry the Game is Over","error");
} 

function Cube(){
  if(cube === 1){
    c1.visible = true;
  }
  if(cube === 2){
    c2.visible = true;
  }
  if(cube === 3){
    c3.visible= true;
  }
  if(cube === 4){
    c4.visible = true;
  }
  if(cube === 5){
    c5.visible = true;
  }
  if(cube === 6){
    c6.visible = true;
  }
  if(cube === 7){
    c7.visible = true;
  }
  if(cube === 8){
    c8.visible = true;
  }
  if(cube === 9){
    c9.visible = true;
  }
  if(cube === 10){
    c10.visible = true;
  }
  if(cube === 11){
    c1.destroy();
    c2.destroy();
    c3.destroy();
    c4.destroy();
    c5.destroy();
    c6.destroy();
    c7.destroy();
    c8.destroy();
    c9.destroy();
    c10.destroy();
    
  }
}
