const lienzo = document.querySelector("#lienzo");
const ctx = lienzo.getContext("2d");
ctx.font = "24px Arial";
const topScore = document.querySelector("#bestScore");
const scoreNew = document.querySelector("#score");
const resetGame = document.querySelector("#reset");

const snake = [
    {
        x: 2,
        y: 1,
        sowh: function () {
            ctx.fillText("🐤", this.x * 20, this.y * 20);
        },
    },
    {
        x: 1,
        y: 1,
        sowh: function () {
            ctx.fillText("🐣", this.x * 20, this.y * 20);
        },
    },
    {
        x: 0,
        y: 1,
        sowh: function () {
            ctx.fillText("🐣", this.x * 20, this.y * 20);
        },
    },
];

const food = {
    x: 0,
    y: 0,
    sowh: function () {
        ctx.fillText("🥚", this.x * 20, this.y * 20);
    },
    fadeIn: function () {
        this.x = Math.floor(Math.random() * 29);
        this.y = Math.floor(Math.random() * 19) + 1;
    },
};

let score = 0;
let bestScore = [];
bestScore = localStorage.getItem("score") ? localStorage.getItem("score") : [];
topScore.innerText = `Mejor Puntuación: ${bestScore}`;

function eat() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
        food.fadeIn();
        snake.push({ ...snake[1] });
        score++;
        scoreNew.innerText = `Tu puntuación: ${score}`;
        if (score > bestScore) {
            bestScore = score;
            localStorage.setItem("score", bestScore);
        }
    }
}

if (score > bestScore[0]) {
}

function nextMove(x, y) {
    for (let i = snake.length - 1; i > 0; i--) {
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
    }
    snake[0].x = x;
    snake[0].y = y;
}

let gameOver = false;

function checkLimits(x, y) {
    if (x > 29 || x < 0 || y > 20 || y < 1) {
        gameOver = true;
        alert("Game Over saliste de los limites");
    }
}

function checkColision() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            gameOver = true;
            alert("Game Over chocaste con tu cuerpo");
            break;
        }
    }
}
let x = 0;
let y = 1;
let direction = 1;
let previusDirection = direction;

food.fadeIn();
setInterval(() => {
    if (!gameOver) {
        ctx.clearRect(0, 0, 600, 400);
        nextMove(x, y);
        food.sowh();
        snake.forEach((s) => s.sowh());
        eat();
        checkLimits(snake[0].x, snake[0].y);
        checkColision();
        if (direction === 1 && previusDirection !== 3) x++;
        else if (direction === 2 && previusDirection !== 4) y++;
        else if (direction === 3 && previusDirection !== 1) x--;
        else if (direction === 4 && previusDirection !== 2) y--;
        previusDirection = direction;
    }
}, 100);

document.querySelector("body").addEventListener("keydown", (e) => {
    console.log(e.key);
    if ((e.key === "ArrowRight" || e.key === "d") && direction !== 3)
        direction = 1;
    else if ((e.key === "ArrowDown" || e.key === "s") && direction !== 4)
        direction = 2;
    else if ((e.key === "ArrowLeft" || e.key === "a") && direction !== 1)
        direction = 3;
    else if ((e.key === "ArrowUp" || e.key === "w") && direction !== 2)
        direction = 4;
});

document.getElementById("reset").addEventListener("click", function () {
    location.reload(); // Recarga la página actual
});

// food.fadeIn();
// setInterval(() => {
//     ctx.clearRect(0, 0, 600, 400);
//     nextMove(x,y);
//     food.sowh();
//     snake.forEach(s => s.sowh());

//     eat();
//     if (direction === 1) x++;
//     else if (direction === 2) y++;
//     else if (direction === 3) x--;
//     else y--;
//     //Validar Limites de x & y
//     /* if (x > 29) x = 0;
//     else if (x < 0) x = 29;
//     if (y > 20) y = 1;
//     else if (y < 1) y = 20;
//  */
// }, 100)
