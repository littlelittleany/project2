//animation, DOGGO

let counter = 0;
let speed = 5; 
// const numImg = 7;
// const doggoArray = Array.from({ length: numImg});

let doggo, doggoAnimation, doggoImg;
let doggoJumping = false;
let bgImg, fgImg;
// let doggo = doggoArray; 

/* OR sprait sheet but FAIL
let doggoSpSheet;
let doggoAnim;
let doggo;
let doggoSprite;
*/

//asset
let bone;
let boneY = 450, boneX = 950; //initial position for bone 

let dogX = 100, dogY = -500; //initial position for doggo

//backgrounnd and foreground//
let bgX = 0, bgY = 0; //initial position for background and foreground 

function preload(){

//asset ˇˇˇˇˇˇˇˇ asset 
    bgImg = loadImage('img/background.jpg');
    fgImg = loadImage('img/foreground.png');
    bone = loadImage('img/bone0.png');
    boneAnimation = loadAnimation('img/bone0.png');
    doggoAnimation = loadAnimation('img/dong0.png', 'img/dong6.png');


    doggoImg = loadImage('img/dong0.png');

//ˇˇDog running animation ˇˇˇˇ dog running animationˇˇˇˇ

    //array FAILED
    // doggoArray.forEach((item,i) => {
    //     loadImage(`img/dong${i}.png`);
    // }) 
    
    // for (let i = 0; i < numImg; i++){  //FAILED
    //     doggoArray[i] = (loadImage(`img/dong${i}.png`));  
    //    }
    //     console.log(doggoArray);
  
  
    /*sprait sheet, FAILED
    doggoSpSheet = loadSpriteSheet('img/spriteSheet.png',716 ,500, 12);
    doggoAnim = loadAnimation(doggoSpSheet);
    doggoSprite = createSprite(doggoAnim);  */
}


function setup() {
    createCanvas(1600, 850); //it works 
    doggo = createSprite(200, height/2, 400, 400);
    bone = createSprite(boneX, boneY, 100, 100);
    // boneBuffer = image(bone, boneX, boneY, 200, 200).get(0, 0, 200, 200);
   
    bone.addAnimation('bone', boneAnimation);
    doggo.addAnimation('doggo', doggoAnimation);
    doggo.scale = 1.3;


}


function draw () {
    image(bgImg, bgX, bgY);
   
        if(!doggoJumping){
        moveDoggo();
    }
    
    doggo.collide(bone);


    drawSprites();
    image(fgImg, bgX, bgY);

    counter++
    bgX--

}

function keyPressed(){
    if (key === ' ') {  
            doggoJumping = true;
            dogY -= 200; 
            setTimeout(resetJumping, 500);
        } 
}

function resetJumping(){
    doggoJumping = false;
}

function moveDoggo(){
    doggo.setSpeed(1, 0);
}

//function doggoJumping(){}





///ˇˇˇ infinite scrollong of the bgˇˇ  so far FAILED
// (function() {
//     window.requestAnimationFrame = window.requestAnimationFrame
//             || window.webkitRequestAnimationFrame
//             || window.mozRequestAnimationFrame
//             || function(callback) { window.setTimeout(callback, 1000 / 60); };

//     var canvas = document.getElementById('bg');
//     //var context = canvas.getContext('2d'); //error 
//     var looping = false;
//     var totalSeconds = 0;

//     var img = new Image();
//     img.onload = imageLoaded;
//     img.src = 'img/background.jpg';

//     function imageLoaded() {
//         draw(0);

//         var btn = document.getElementById('btnStart');
//         btn.addEventListener('click', function() {
//             startStop();
//         });
//     }

//     var lastFrameTime = 0;

//     function startStop() {
//         looping = !looping;

//         if (looping) {
//             lastFrameTime = Date.now();
//             requestAnimationFrame(loop);
//         }
//     }

//     function loop() {
//         if (!looping) {
//             return;
//         }

//         requestAnimationFrame(loop);

//         var now = Date.now();
//         var deltaSeconds = (now - lastFrameTime) / 1000;
//         lastFrameTime = now;
//         draw(deltaSeconds);
//     }

//http://bdadam.com/blog/panning-and-scrolling-background-images-using-the-canvas-element.html
// function draw(delta) { //can I have more than 1 draw functions?
//     totalSeconds += delta; 

//     const bgSpeed = 100; //background rolling speed
//     const numBgs = Math.ceil(width / background.width) + 1;
//     let xpos = totalSeconds * bgSpeed % background.width;

//     context.save();
//     context.translate(-xpos, 0);

//  for (var i = 0; i < numBgs; i++) {
//      context.drawImage(background, i * background.width, 0);
//  }
//  context.restore();
// }

// }());
//how to bring foreground to the front?
//how to make the backgrod rolling infinitlely? call... background function 