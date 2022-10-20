class Form{

  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your Name"); 
    this.playButton = createButton("Play");
    this.text = createElement("h2");
    this.goButton = createButton("GO!");
    this.startButton = createButton("Start");
    this.settingButton = createButton("Setting");
    this.setting2Button = createButton("Setting")
    this.musicButton = createButton("Music");
    this.muteButton = createButton("Mute");
    this.convertButton = createButton("Convert");
    this.collectButton = createButton("Collect Plant");
    this.nextLevel = createButton("Next Level");
    this.insideView = createButton("View Map")
    this.outsideView = createButton("View Ship");
    this.go1Button = createButton("GO!");
    // IN LEVEL - 2 //
    this.play2Button = createButton("Play"); 
  // this.camera1Button = createButton("Camera-1");
  // this.camera2Button = createButton("Camera-2");
    this.restartButton = createButton("Restart");
    // IN LEVEL - 2 //
    //FOR OPENING LINKS //
    this.about = createButton("About");
    //FOR OPENING LINKS //
    this.credits = createButton("Credits");
  }

  setElementsPosition() {   
    this.input.position(width / 2 - 110, height / 2 - 20);
    this.playButton.position(width / 2 - 90, height / 2 + 40);   
    this.text.position(width / 2 - 340, height / 2 - 230);
    this.goButton.position(width / 2 - 900, height / 2 + 240);
    this.startButton.position(width / 2 - 9000, height / 2 + 240);  
    this.settingButton.position(width / 2 - 530, height / 2 - 320);
    this.setting2Button.position(width / 2 - 530, height / 2 - 32000);
    this.musicButton.position(width / 2 - 530, height / 2 - 32000);
    this.muteButton.position(width / 2 - 530, height / 2 - 32000);
    this.convertButton.position(width / 2 + 230, height / 2 - 2900);
    this.collectButton.position(width / 2 + 280, height / 2 + 3000);
    this.nextLevel.position(width / 2 - 1000, height / 2 );
    this.insideView.position(width / 2 + 90, height / 2 - 28000);
    this.outsideView.position(width / 2 + 90, height / 2 - 28000);
    this.go1Button.position(width / 2 + 24000, height / 2 + 50);
    this.play2Button.position(width / 2 - 9000, height / 2 - 100 );
   // this.camera1Button.position(width / 2 + 34000, height / 2 + 140);
   // this.camera2Button.position(width / 2 + 34000, height / 2 + 140);
    this.restartButton .position(width / 2 + 24000, height / 2 - 50);
    //FOR OPENING LINKS //
    this.about.position(width / 2 - 530, height / 2 - 240);
   //FOR OPENING LINKS //
   this.credits.position(width / 2 - 530, height / 2 - 160);

  }

  setElementsStyle() {
    
    this.input.class("customInput");
    this.playButton.class("customButton_4");
    this.text.class("greeting");
    this.goButton.class("customButton");
    this.startButton.class("customButton");
    this.settingButton.class("resetButton");
    this.setting2Button.class("resetButton");
    this.musicButton.class("resetButton");
    this.muteButton.class("resetButton");
    this.convertButton.class("customButton");
    this.collectButton.class("customButton_2");
    this.nextLevel.class("customButton");
    this.insideView.class("customButton"); 
    this.outsideView.class("customButton"); 
    this.go1Button.class("customButton_3");
    this.play2Button.class("customButton_3");
   // this.camera1Button.class("resetButton_2");
   // this.camera2Button.class("resetButton_2");
    this.restartButton.class("customButton_3");
    //FOR OPENING LINKS //
    this.about.class("resetButton");
    //FOR OPENING LINKS //
    this.credits.class("resetButton");

  }

 handleMousePressed(){


  //FOR OPENING LINKS //
   this.about.mousePressed(()=>{
    open("https://www.pixar.com/feature-films/walle");
   })

   this.credits.mousePressed(()=>{
    open("https://editor.p5js.org/philipwaidande/full/D9xqtDdNd");
   })
  
  //FOR OPENING LINKS //

    this.playButton.mousePressed(()=>{
        this.input.hide();
        this.playButton.hide();
        this.goButton.position(width / 2 - 90, height / 2 + 10);
        gameState = 1;
        var message = `
        Hello I am WALL - E
        </br> Will you help me cleaning up the trash ?  `
        this.text.html(message);
    
    })

    this.goButton.mousePressed(()=>{   
        this.text.hide();
        this.goButton.hide();
        this.settingButton.hide();
        this.setting2Button.hide();
        this.muteButton.hide();
        this.musicButton.hide();
        this.credits.hide();
        this.about.hide();
        gameState = 2;
        this.convertButton.position(width / 2 + 230, height / 2 - 290);
        sound.stop();
        this.Rules();

    })
   
   //// BUTTONS FOR MUSIC,STOP ETC.////
    this.settingButton.mousePressed(()=>{ 
      this.setting2Button.position(width / 2 - 530, height / 2 - 320);
      this.musicButton.position(width / 2 - 530, height / 2 - 240);
      this.about.position(width / 2 - 530, height / 2 - 170);
      this.credits.position(width / 2 - 530, height / 2 - 100);
    })  
    this.setting2Button.mousePressed(()=>{ 
      this.settingButton.position(width / 2 - 530, height / 2 - 320);
      this.setting2Button.position(width / 2 - 530, height / 2 - 3200);
      this.musicButton.position(width / 2 - 530, height / 2 - 2400);
      this.muteButton.position(width / 2 - 530, height / 2 - 2400);
      this.about.position(width / 2 - 530, height / 2 - 240);
      this.credits.position(width / 2 - 530, height / 2 - 160);

      // TO ADJUST THE SETTINGS ; MUSIC PLAY AND MUTE//
      this.settingButton.mousePressed(()=>{
        this.muteButton.position(width / 2 - 530, height / 2 - 240);
        this.musicButton.position(width / 2 - 530, height / 2 - 240);
        this.about.position(width / 2 - 530, height / 2 - 170);
        this.credits.position(width / 2 - 530, height / 2 - 100);
        this.settingButton.position(width / 2 - 530, height / 2 - 32000);
        this.setting2Button.position(width / 2 - 530, height / 2 - 320);
      })
      // TO ADJUST THE SETTINGS ; MUSIC PLAY AND MUTE//
    })
    this.musicButton.mousePressed(()=>{ 
      this.muteButton.position(width / 2 - 530, height / 2 - 240);
        sound.play();
        sound.loop();
      
    })
    this.muteButton.mousePressed(()=>{
      this.musicButton.position(width / 2 - 530, height / 2 - 240);
      this.muteButton.position(width / 2 - 530, height / 2 - 24000);
      sound.stop();
    })

   //// BUTTONS FOR MUSIC,STOP ETC.////


    this.convertButton.mousePressed(()=>{  
     if(Tscore>0){
      cube = cube+1;
      Tscore = Tscore-10;
     } 
   if(cube === 10){ 
    this.convertButton.position(width / 2 + 230, height / 2 - 2900); 
    this.collectButton.position(width / 2 + 280, height / 2 + 30);
   }
  
  
    })

    this.collectButton.mousePressed(()=>{  
      this.collectButton.position(width / 2 + 2800, height / 2 + 30);
      this.nextLevel.position(width / 2 - 100, height / 2 );
      this.Allert();
      plant.visible = false;
      this.nextLevel.mousePressed(()=>{ 
      gameState = 3;
      this.nextLevel.position(width / 2 - 1000, height / 2 );
      this.insideView.position(width / 2 + 90, height / 2 - 280);
      this.go1Button.position(width / 2 + 240, height / 2 + 50);
    }) 
  })

    //// VIEWS OF AXIOM////
    this.insideView.mousePressed(()=>{   
      axiom_m.x = 430;
      this.outsideView.position(width / 2 + 90, height / 2 - 280);
      this.insideView.position(width / 2 + 90, height / 2 - 2000);

      this.outsideView.mousePressed(()=>{
        axiom_m.x = 43000;
        this.outsideView.position(width / 2 + 90, height / 2 - 2000);
        this.insideView.position(width / 2 + 90, height / 2 - 280);
      })
    })
    //// VIEWS OF AXIOM////

    this.go1Button.mousePressed(()=>{
      swal("Let's Ride The Rocket!", "Press the arrow keys to control the rocket! If you get hit by the satellite 10 times or hit by the asteroid then GAME OVER", "success");
      gameState = "serve";
      this.outsideView.hide();
      this.insideView.hide();
      this.go1Button.hide();
      this.play2Button.position(width / 2 - 90, height / 2 - 100 );

    })

    this.play2Button.mousePressed(()=>{ 
      // to ensure these buttons is not there//
    /*  this.collectButton.position(width / 2 + 280000, height / 2 + 30);
      this.camera2Button.position(width / 2 + 340000, height / 2 + 140);
      this.camera1Button.position(width / 2 + 340000, height / 2 + 140);
      // to ensure these buttons is not there//
      this.play2Button.position(width / 2 - 9000, height / 2 - 100 ); 
      gameState = "c_1";
      this.camera2Button.position(width / 2 + 340, height / 2 + 140);

      this.camera1Button.mousePressed(()=>{ 
        gameState = "c_1";
       this.camera2Button.position(width / 2 + 340, height / 2 + 140);
      })

      this.camera2Button.mousePressed(()=>{
        gameState = "c_2";
        this.camera2Button.position(width / 2 + 3400, height / 2 + 140);
        this.camera1Button.position(width / 2 + 340, height / 2 + 140);
      })*/
      gameState = "c_1";
      this.play2Button.position(width / 2 - 9000, height / 2 - 100 );
    })

  }
 

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
   
  Allert(){
    ok = 1;
    swal({
      title: `Awesome!`,
      text: "You Have Collected The Plant! ",
      imageUrl:
      "https://www.pngkey.com/png/detail/160-1609764_wall-e-eve-symbol.png",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    });
  }

  Rules(){
    swal({
      title: `Rules!`,
      text: "Press Left and Right Arrow keys to control Wall-e and press 'Convert' to make the trash into cubes",
      imageUrl:
      "https://th.bing.com/th/id/R.bce3583185907dc05fd233fc5abcd02d?rik=v3P7ShrOz7WhuQ&riu=http%3a%2f%2fthepixartheory.weebly.com%2fuploads%2f6%2f0%2f6%2f2%2f60623351%2f213129218.jpg&ehk=VF8Wm6an0pnufOU4NqLGxzwREUqajkEn4KM73GzzAao%3d&risl=&pid=ImgRaw&r=0",
      imageSize: "200x200",
      confirmButtonText: "Let's Go"  
    }); 
  }
   
}