let belly;
let chest;
let head;
let left_arm;
let right_arm;
let left_leg;
let right_leg;
let x = 0;
let x_2 = 0;
let char_array;
let inp;
let osc;
let xoff = 0.0;

function preload() {
    belly = loadModel('assets/belly.obj');
    chest = loadModel('assets/chest.obj');
    head = loadModel('assets/head.obj');
    left_arm = loadModel('assets/left_arm.obj');
    right_arm = loadModel('assets/right_arm.obj');
    left_leg = loadModel('assets/left_leg.obj');
    right_leg = loadModel('assets/right_leg.obj');
    fontB = loadFont('assets/poppins.ttf');
    mySound = loadSound('assets/beat.mp3');
  }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight, WEBGL);
  
}

function setup(){
    frameRate(60);
    createCanvas(windowWidth, windowHeight, WEBGL);
    inp = createInput('');
    playBtn = createButton('play!');
    osc = new p5.Oscillator('square');
    osc.amp(0.1);
    delay = new p5.Delay();
    delay.process(osc, 0.12, .7, 2300);
}


function draw() {
    colorMode(HSB, 360, 100, 100, 100);
    
    playBtn.show();
    playBtn.position(width/2-100, 220);
    playBtn.mousePressed(play);

    inp.position(width/2-130, 150);

    if (mySound.isPlaying() == true){
        xoff = xoff + 0.01;
    }

    
    if (x > radians(1) || x < -radians(1)) {
        if (x > 0) {
            x = x - radians(1);
        } else {
            x = x + radians(1);
        }
    }
    
    background(abs(x*70));
    noStroke();
    normalMaterial();
    rotateX(PI);
    push();
    rotateX(PI);
    textAlign(CENTER);
    textFont(fontB);
    textSize(40);
    fill(255-abs(x*70));
    text("Type your Dance.",0,-height/2+100);
    pop();

    Robot(noise(xoff)*100);

    push();
    rotateX(PI+radians(80));
    translate(0,-420,-250);
    plane(2000,2000);
    pop();

    push();
    rotateX(PI);
    noStroke();
    textAlign(CENTER);
    textFont(fontB);
    translate(0,0,-4000);
    textSize(1700);
    
    if (x > radians(1) || x < -radians(1)) {
        fill(255-abs(x*70),50);
    } else {
        fill(255,60)
    }
    text(char_array,0,0);
    pop();


}


  function play() {
    if (mySound.isPlaying() == false) {
        mySound.loop();
      }

    char_array = inp.value().split('');
    inp.value('');
    for (let i = 0; i < char_array.length; i++) {
        recognize_char(char_array[i]);
        
      }

  }

  function sleep (delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
 }

  function keyPressed() {
    if (keyCode === ENTER) {
      play();
    }
  }



  function recognize_char(C){
    switch(C) {
        case ('a') :
            sleep(100);
            x += radians(31);
            osc.freq(100);
            osc.start();
            osc.stop(1,1);
            break;
        case ('b') :
            sleep(100);
            x += radians(-20);
            osc.freq(800);
            osc.start();
            osc.stop(1,1);
            break;
        case ('c') :
            sleep(100);
            x += radians(20);
            osc.freq(700);
            osc.start();
            osc.stop(1,1);
            break;
        case ('d') :
            sleep(100);
            x += radians(-21);
            osc.freq(600);
            osc.start();
            osc.stop(1,1);
            break;
        case ('e') :
            sleep(100);
            x += radians(28);
            osc.freq(500);
            osc.start();
            osc.stop(1,1);
            break;
        case ('f') :
            sleep(100);
            x += radians(-29);
            osc.freq(400);
            osc.start();
            osc.stop(1,1);
            break;
        case ('g') :
            sleep(100);
            x += radians(-29);
            osc.freq(300);
            osc.start();
            osc.stop(1,1);
            break;
        case ('h') :
            sleep(100);
            x += radians(-29);
            osc.freq(200);
            osc.start();
            osc.stop(1,1);
            break;
        case ('i') :
            sleep(100);
            x += radians(-29);
            osc.freq(100);
            osc.start();
            osc.stop(1,1);
            break;
        case ('j') :
            sleep(100);
            x += radians(-29);
            osc.freq(1000);
            osc.start();
            osc.stop(1,1);
            break;
        case ('k') :
            sleep(100);
            x += radians(-29);
            osc.freq(1100);
            osc.start();
            osc.stop(1,1);
            break;
        case ('l') :
            sleep(100);
            x += radians(-29);
            osc.freq(1200);
            osc.start();
            osc.stop(1,1);
            break;
        case ('m') :
            sleep(100);
            x += radians(-29);
            osc.freq(1300);
            osc.start();
            osc.stop(1,1);
            break;
        case ('n') :
            sleep(100);
            x += radians(-29);
            osc.freq(1400);
            osc.start();
            osc.stop(1,1);
            break;
        case ('o') :
            sleep(100);
            x += radians(-29);
            osc.freq(1500);
            osc.start();
            osc.stop(1,1);
            break;
        case ('p') :
            sleep(100);
            x += radians(-29);
            osc.freq(1600);
            osc.start();
            osc.stop(1,1);
            break;
        case ('q') :
            sleep(100);
            x += radians(-29);
            osc.freq(1700);
            osc.start();
            osc.stop(1,1);
            break;
        case ('r') :
            sleep(100);
            x += radians(-29);
            osc.freq(1800);
            osc.start();
            osc.stop(1,1);
            break;
        case ('s') :
            sleep(100);
            x += radians(-29);
            osc.freq(1900);
            osc.start();
            osc.stop(1,1);
            break;
        case ('t') :
            sleep(100);
            x += radians(-29);
            osc.freq(2000);
            osc.start();
            osc.stop(1,1);
            break;
        case ('u') :
            sleep(100);
            x += radians(-29);
            osc.freq(2100);
            osc.start();
            osc.stop(1,1);
            break;
        case ('w') :
            sleep(100);
            x += radians(-29);
            osc.freq(2200);
            osc.start();
            osc.stop(1,1);
            break;
        case ('y') :
            sleep(100);
            x += radians(-29);
            osc.freq(2300);
            osc.start();
            osc.stop(1,1);
            break;
        case ('x') :
            sleep(100);
            x += radians(-29);
            osc.freq(2400);
            osc.start();
            osc.stop(1,1);
            break;
        case ('z') :
            sleep(100);
            x += radians(-29);
            osc.freq(2500);
            osc.start();
            osc.stop(1,1);
            break;

        default :
            sleep(100);
            x += radians(-29);
            osc.freq(500);
            osc.start();
            osc.stop(1,1);
            break;
}
  }

  function Robot(N) {
    push()
    translate(0,-70+N,0);
    model(belly);
    pop();
    push();
    translate(0,18+N,0);
    model(chest);
    pop();
    push();
    translate(0,115+N,0);
    rotateY(x);
    model(head);
    pop();
    push();
    translate(-76,56+N,0);
    rotateZ(x);
    model(left_arm);
    pop();
    push();
    translate(68,60+N,0);
    rotateZ(x);
    model(right_arm);
    pop();
    push();
    translate(-25,-73+N,0);
    rotateY(x);
    model(left_leg);
    pop();
    push();
    translate(32,-74+N,0);
    rotateY(x_2);
    model(right_leg);
    pop();
  }