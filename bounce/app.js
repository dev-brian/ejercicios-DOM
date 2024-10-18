const lienzo = document.querySelector("#lienzo");
const ctx = lienzo.getContext("2d");
const ball = {
    x: 0,
    y: 0,
    show: function () {
        
        ctx.fillStyle = `hsl(${this.x},50%,50%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, true);
        ctx.fill();
    }
};

let x = 10;
let y = 10;
let right = true;
let down = true;

setInterval(() => {
    ctx.clearRect(0,0,600,400);
    ball.x = x;
    ball.y = y;
    ball.show();    
//validar right para x
if (right) x+=2;
else x-=2;
//validar down para y
if (down)y+=2;
else y-=2;
//validar x para cambiar right
right = x>600? !right: right;
right = x<1? !right: right;
//validar y para cambiar down
down = y>400? !down: down;
down = y<1? !down: down;    
},0)