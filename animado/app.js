const lienzo = document.querySelector("#lienzo");
const ctx = lienzo.getContext("2d");
let x = 296;
let y = 198;
let width = 6;
let height = 4;
let radio = 1;
let crece = true;


/* setInterval(() => {
    ctx.clearRect(0 , 0, 600, 400);
    ctx.fillStyle = `hsl( ${radio} , 50%, 50%)`;
    ctx.beginPath();
    ctx.arc(x , y , radio, 0, Math.PI * 2);
    ctx.fill();
    if (crece) radio++;
    else radio--;
    crece = radio >300? !crece: crece;
    crece = radio <1? !crece:crece;
},5) */


setInterval(() => {
    //ctx.clearRect(0, 0, 600, 400);
    ctx.fillStyle = `hsl( ${width} , 50%, 50%)`;
    ctx.beginPath();
    ctx.fillRect(x, y, width, height);
    ctx.fill();

    if (crece) {
        width += 6;
        x -= 3;
        height += 4;
        y -= 2;
    }
    else {
        width -= 6;
        x += 3;
        height -= 4;
        y += 2;
    }
    /* crece = width >600? !crece: crece;
    crece = width<1? !crece:crece; */
    crece = width > 600 ? !crece : crece;
    crece = width < 3 ? !crece : crece;
}, 10);

/* fillRect(x, y, width, height)*/

/* ctx.strokeRect(0,0,200,200)
ctx.fillRect(20, 20, 160, 160)*/