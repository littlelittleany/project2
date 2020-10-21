//animation, DOGGO

let counter = 0;
let dogX = 100, dogY = 100; //initial position for doggo
const numImg = 7;
const doggoArray = Array.from({ length: numImg});
let speed = 5; 
let doggo = doggoArray; 

/* OR sprait sheet but FAIL
let doggoSpSheet;
let doggoAnim;
let doggo;
let doggoSprite;
*/

//asset
let bone;
let boneY = 150, boneX = 350; //initial position for bone 

//backgrounnd and foreground//
let bgX = 0, bgY = 0; //initial position for background and foreground 

function preload (){

//asset ˇˇˇˇˇˇˇˇ asset 
    background = loadImage('img/background.jpg');
    foreground = loadImage('img/foreground.png');
    bone = loadImage('img/bone.png');

//ˇˇDog running animation ˇˇˇˇ dog running animationˇˇˇˇ

    //array FAILED
    doggoArray.forEach((item,i) => {
        loadImage(`img/dong${i}.png`);
    }) 
    
    for (let i = 0; i < numImg; i++){  //FAILED
        doggoArray[i] = (loadImage(`img/dong${i}.png`));  
       }
        console.log(doggoArray);
  
  
    /*sprait sheet, FAILED
    doggoSpSheet = loadSpriteSheet('img/spriteSheet.png',716 ,500, 12);
    doggoAnim = loadAnimation(doggoSpSheet);
    doggoSprite = createSprite(doggoAnim);  */
}


function setup() {
    createCanvas(1600, 900); //it works 
    //doggoSprite.scale = 3.0;
}


function draw () {
    image(background, bgX, bgY);
    image(foreground, bgX, bgY);
    image(bone, boneX, boneY);
    moveDoggo();
    drawSprites();

    image(imageArray[counter%numImg], dogX, dogY, 250, 250); //250 = size, calling for array animation 
    //FAILED   
    counter++

}

function moveDoggo (){ //let him run 
    if (keyCode === SPACEBAR) {  
        //jump!
        dogY-=20; 
    } else { //or keeps running 
            dogX += speed;
    }
}


///ˇˇˇ infinite scrollong of the bgˇˇ  so far FAILED
(function() {
    window.requestAnimationFrame = window.requestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.mozRequestAnimationFrame
            || function(callback) { window.setTimeout(callback, 1000 / 60); };

    var canvas = document.getElementById('bg');
    //var context = canvas.getContext('2d'); //error 
    var looping = false;
    var totalSeconds = 0;

    var img = new Image();
    img.onload = imageLoaded;
    img.src = 'img/background.jpg';

    function imageLoaded() {
        draw(0);

        var btn = document.getElementById('btnStart');
        btn.addEventListener('click', function() {
            startStop();
        });
    }

    var lastFrameTime = 0;

    function startStop() {
        looping = !looping;

        if (looping) {
            lastFrameTime = Date.now();
            requestAnimationFrame(loop);
        }
    }

    function loop() {
        if (!looping) {
            return;
        }

        requestAnimationFrame(loop);

        var now = Date.now();
        var deltaSeconds = (now - lastFrameTime) / 1000;
        lastFrameTime = now;
        draw(deltaSeconds);
    }

//http://bdadam.com/blog/panning-and-scrolling-background-images-using-the-canvas-element.html
function draw(delta) { //can I have more than 1 draw functions?
    totalSeconds += delta; 

    const bgSpeed = 100; //background rolling speed
    const numBgs = Math.ceil(canvas.width / background.width) + 1;
    let xpos = totalSeconds * bgSpeed % background.width;

    context.save();
    context.translate(-xpos, 0);

 for (var i = 0; i < numBgs; i++) {
     context.drawImage(background, i * background.width, 0);
 }
 context.restore();
}

}());
//how to bring foreground to the front?
//how to make the backgrod rolling infinitlely? call... background function 
