// console.log("Check");
const canvas = document.getElementById('canvas');
// console.dir(canvas)
// Canvas by itself is something just to draw on
// In js we need a "context" which is like our brush
let context = canvas.getContext('2d');

// THIS IS A RECTANGLE!!!!

// .rect() takes 4 args:
// 1. upper X 
// 2. upper y
// 3. lower X
// 4. lower Y
// context.rect(100,100,300,300);
// context.stroke();

// context.moveTo(100,100);
// context.lineTo(400,400);
// context.lineTo(100,400);
// context.lineTo(400,100);
// context.lineTo(100,400);

// context.stroke();

// THIS IS A CIRCLE!!!!!

// context.beginPath();
// 1. x coord for center
// 2. y coord for center
// 3. radius in pixels
// 4. place to start (0 = 3:00)
// 5. place to end (every 90 deg is a half PI)
// 6. optional, true/false for counterclockwise
// context.arc(100, 75, 50, 0, 2 * Math.PI)
// context.stroke();
// context.fillStyle = '#0044ff';
// context.fill();
// context.strokeStyle = '#ff0';
// context.lineWidth = 10;
// context.stroke();
function Ball(x,y,r){
    // inside of  a constructor, we get the keyword: "this"
    this.x = x;
    this.y = y;
    // sr = starting radians
    this.sr = 0;
    // er = ending radians
    this.er = Math.PI * 2;
    // r = radius
    this.r = r;
    this.xDirection = 1;
    this.yDirection = 1;
}

Ball.prototype.drawBall = function(){
    context.beginPath();
    context.arc(this.x,this.y,this.r,this.sr,this.er);
    context.fill();
}

Ball.prototype.updateBallPosition = function(){
    // clearRect takes 4 args, topx, topy, botx, boty... wipe!
    context.clearRect(0,0,500,500);
    if(this.x >= 500){
        this.xDirection = -this.xDirection;
    }else if(this.x <= 0){
        this.xDirection = -this.xDirection;
    }
    if(this.y >= 500){
        this.yDirection = -this.xDirection;
    }else if(this.y <= 0){
        this.yDirection = -this.xDirection;
    }
 
    this.drawBall();
    this.x += 5 * this.xDirection;
    this.y += 5 * this.yDirection;
 }

aBall = new Ball(100,100,50);
anotherBall = new Ball(400,400,50);
thirdBall = new Ball(90,200,50);

let bouncyBalls = [aBall,anotherBall,thirdBall];

bouncyBalls.forEach((currBall)=>{
    setInterval(()=>{
        currBall.updateBallPosition();
    },33)

});

aBall.drawBall();
anotherBall.drawBall();
thirdBall.drawBall();