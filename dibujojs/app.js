const lienzo = document.querySelector("#lienzo");
const ctx = lienzo.getContext("2d");

/* fillRect(x, y, width, height)
strokeRect(x, y, width, height)
Arc(x, y, radio, ini, fin, sentidoHorario) */

/* ctx.strokeRect(0,0,200,200)
ctx.fillRect(20, 20, 160, 160)

ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.arc(100, 100, 60, 0, 2 * Math.PI, true);
ctx.fill();
*/
//backgroung
ctx.fillStyle = "rgb(15, 15, 97)";
ctx.beginPath();
ctx.fillRect(0,0,600,400);
ctx.fill();
/* //cara feliz
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(300, 200, 60, 0, 2 * Math.PI, true);
ctx.fill();

ctx.fillStyle = "black";
ctx.fillRect(270, 180, 20, 5);
ctx.fillRect(310, 180, 20, 5);

ctx.beginPath();
ctx.arc(280, 190, 5, 0, 2 * Math.PI, true);
ctx.fill();

ctx.beginPath();
ctx.arc(320, 190, 5, 0, 2 * Math.PI, true);
ctx.fill();

ctx.beginPath();
ctx.arc(300, 210, 20, 0, Math.PI, false);
ctx.fill();

//rextangulos redondeados
ctx.fillStyle = "green"; 

ctx.beginPath();
ctx.roundRect(300, 100, 50, 20, [0, 20, 0, 20]);
ctx.fill();
ctx.stroke();*/

ctx.fillStyle = "black";
//cuerpo y cara
ctx.beginPath();
ctx.roundRect(50, 300, 100, 300, [50, 50, 0, 0]);
ctx.fill();
ctx.beginPath();
ctx.roundRect(50, 235, 100, 75, [45, 45, 30, 30]);
ctx.fill();
//orejas
/* ctx.beginPath();
ctx.moveTo(55, 255)
ctx.lineTo(95, 255)
ctx.lineTo(75, 180);
ctx.fill(); 
ctx.beginPath();
ctx.moveTo(100, 255)
ctx.lineTo(140, 255)
ctx.lineTo(120, 180);
ctx.fill();  */

//nariz y orejas
ctx.fillStyle = "orange";
ctx.beginPath();
ctx.moveTo(90, 270);
ctx.lineTo(110, 270);
ctx.lineTo(100, 285);
ctx.fill();
/* ctx.beginPath();
ctx.moveTo(65, 230)
ctx.lineTo(85, 230)
ctx.lineTo(75, 200);
ctx.fill(); 
ctx.beginPath();
ctx.moveTo(110, 230)
ctx.lineTo(130, 230)
ctx.lineTo(120, 200);
ctx.fill();  */

//rextangulos redondeados
ctx.fillStyle = "red";

ctx.beginPath();
ctx.roundRect(70, 250, 20, 10, [0, 20, 0, 20]);
ctx.roundRect(110, 250, 20, 10, [20, 0, 20, 0]);
ctx.fill();
ctx.stroke();
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(80, 250, 2, 0, 2 * Math.PI, true);
ctx.fill();
ctx.beginPath();
ctx.arc(120, 250, 2, 0, 2 * Math.PI, true);
ctx.fill();

//plumas blancas
ctx.fillStyle = "white";
ctx.beginPath();
ctx.roundRect(75, 325, 50, 250, [40, 40, 0, 0]);
ctx.fill();
//patas
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.roundRect(65, 385, 25, 250, [40, 40, 0, 0]);
ctx.roundRect(115, 385, 25, 250, [40, 40, 0, 0]);
ctx.stroke();
ctx.fill();
//brazos
ctx.fillStyle = "gray";
ctx.beginPath();

ctx.roundRect(45, 275, 25, 60, [100, 0, 40, 40]);
ctx.roundRect(125, 275, 25, 60, [0, 100, 40, 40]);
ctx.stroke();
ctx.fill();
//estrella
ctx.fillStyle = "red";

ctx.beginPath();
ctx.moveTo(80, 100);
ctx.lineTo(120, 100);
ctx.lineTo(100, 115);
ctx.stroke();
ctx.fill();
ctx.fillStyle = "red";

ctx.beginPath();
ctx.moveTo(80, 125);
ctx.lineTo(120, 125);
ctx.lineTo(100, 90);
ctx.fill();
ctx.fillStyle = "rgb(15, 15, 97)";
ctx.beginPath();
ctx.moveTo(80, 125);
ctx.lineTo(120, 125);
ctx.lineTo(100, 110);
ctx.fill();

//creeper
ctx.fillStyle = "green";
ctx.beginPath();
ctx.fillRect(375, 20, 200, 200);
ctx.fill();
ctx.fillStyle = "black";
ctx.beginPath();
ctx.fillRect(400, 60, 50, 50);
ctx.fillRect(500, 60, 50, 50);
ctx.fillRect(450, 110, 50, 65);
ctx.fillRect(500, 130, 30, 65);
ctx.fillRect(420, 130, 30, 65);
ctx.fill();

//calabaza
//full
ctx.fillStyle = "orange";
ctx.beginPath();
ctx.fillRect(440, 240, 160, 160);
ctx.fill();
//detalles
ctx.fillStyle =" rgb(255, 106, 0)";
ctx.beginPath();
ctx.fillRect(460, 240, 10, 10);
ctx.fillRect(490, 240, 20, 10);
ctx.fillRect(530, 240, 10, 10);
ctx.fillRect(560, 240, 20, 10);
ctx.fillRect(450, 260, 10, 30);
ctx.fillRect(450, 310, 10, 20);
ctx.fillRect(570, 280, 10, 30);
ctx.fillRect(510, 320, 10, 10);
ctx.fillRect(580, 320, 10, 20);
ctx.fillRect(460, 390, 20, 10);
ctx.fillRect(550, 390, 20, 10);
ctx.fillRect(500, 380, 10, 20);
ctx.fillRect(590, 380, 10, 20);
ctx.fillRect(590, 250, 10, 30);
ctx.fill();
//boca
ctx.fillStyle = "black";
ctx.beginPath();
ctx.fillRect(460, 340, 10, 20);
ctx.fillRect(470, 340, 30, 10);
ctx.fillRect(470, 340, 30, 10);
ctx.fillRect(510, 340, 20, 10);
ctx.fillRect(540, 340, 20, 10);
ctx.fillRect(570, 330, 10, 20);
ctx.fillRect(470, 360, 10, 20);
ctx.fillRect(470, 330, 10, 20);
ctx.fillRect(490, 330, 10, 20);
ctx.fillRect(490, 340, 10, 10);
ctx.fillRect(550, 330, 10, 20);
ctx.fillRect(520, 330, 10, 20);
ctx.fillStyle = "brown";
ctx.beginPath();
ctx.fillRect(470, 350, 120, 10);
ctx.fillRect(500, 340, 10, 10);
ctx.fillRect(530, 340, 10, 10);
ctx.fillRect(560, 340, 10, 10);
ctx.fillRect(570, 350, 10, 20);
ctx.fillRect(580, 350, 10, 20);
ctx.fillRect(550, 350, 10, 30);
ctx.fillRect(530, 350, 20, 20);
ctx.fillRect(500, 350, 20, 20);
ctx.fillRect(500, 370, 10, 10);
ctx.fillRect(480, 360, 10, 10);
//ojos
//izquierdo
ctx.fillStyle = "brown";
ctx.beginPath();
ctx.fillRect(480, 280, 30, 30);
ctx.fillRect(480, 280, 20, 40);
ctx.fillRect(490, 270, 10, 10);
ctx.fillStyle = "black";
ctx.beginPath();
ctx.fillRect(470, 280, 10, 30);
ctx.fillRect(480, 260, 10, 20);
ctx.fillRect(480, 260, 20, 10);
ctx.fillRect(500, 270, 10, 10);
//derecho
ctx.fillStyle = "brown";
ctx.beginPath();
ctx.fillRect(530, 280, 20, 40);
ctx.fillRect(530, 300, 40, 20);
ctx.fillRect(550, 290, 10, 10);
ctx.fillStyle = "black";
ctx.beginPath();
ctx.fillRect(520, 280, 10, 30);
ctx.fillRect(520, 270, 30, 10);
ctx.fillRect(530, 260, 10, 10);
ctx.fillRect(550, 280, 10, 10);





//tumba
ctx.fillStyle = "gray";
ctx.beginPath();
ctx.roundRect(263, 270, 75, 130, [40, 40, 0, 0]);
ctx.stroke();
ctx.fill();
//tierra
ctx.fillStyle = "rgb(71, 45, 27)";
ctx.beginPath();
ctx.arc(300, 430, 60, 0, 2 * Math.PI, true);
ctx.stroke();
ctx.fill();
ctx.fillStyle = "black";
ctx.beginPath();
ctx.fillRect(295,280, 10, 40);
ctx.fillRect(285,300, 30, 10);



//luna
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(0, 0, 110, 0, 2 * Math.PI, true);
ctx.fill();
ctx.fillStyle = "rgba(255, 246, 240, 0.447)";
ctx.beginPath();
ctx.arc(50, 10, 10, 0, 2 * Math.PI, true);
ctx.arc(32, 60, 15, 0, 2 * Math.PI, true);
ctx.fill();
ctx.beginPath();
ctx.arc(75, 40, 10, 0, 2 * Math.PI, true);
ctx.fill();
//sangre de la luna
ctx.fillStyle = "rgba(239, 13, 13, 0.447)";
ctx.beginPath();
ctx.roundRect(0, 109, 15, 55, [10, 0, 40, 40]);
ctx.roundRect(30, 80, 10, 55, [10, 0, 40, 40]);
ctx.roundRect(55, 80, 15, 45, [10, 0, 40, 40]);
ctx.fill();


//araña
//telaraña
ctx.fillStyle= "rgba(255, 246, 240"
ctx.beginPath();
ctx.fillRect(200,0, 10, 100);
ctx.stroke();
ctx.fill();
//cuerpo de la araña
ctx.fillStyle= "black"
ctx.beginPath();
ctx.fillRect(200,100, 10, 150);
ctx.fillRect(180,110, 50, 50);
ctx.fillRect(190,160, 30, 30);
ctx.fillRect(175,190, 60, 70);
ctx.stroke();
ctx.fill();
ctx.fillStyle= "red"
ctx.beginPath();
ctx.moveTo(181, 255)
ctx.lineTo(230, 255)
ctx.lineTo(205, 230);
ctx.fill();
ctx.fillStyle= "red"
ctx.beginPath();
ctx.moveTo(190, 220)
ctx.lineTo(220, 220)
ctx.lineTo(205, 230);
ctx.fill();
//patas
//1derecha
ctx.fillStyle= "black"
ctx.beginPath();
ctx.fillRect(230,130, 30, 10);
ctx.fillRect(250,110, 10, 30);
ctx.fillRect(240,100, 10, 10);
ctx.stroke();
ctx.fill();
//2derecha
ctx.fillStyle= "black"
ctx.beginPath();
ctx.fillRect(220,170, 60, 10);
ctx.fillRect(280,140, 10, 30);
ctx.fillRect(270,130, 10, 10);
ctx.stroke();
ctx.fill();
//3derecha
ctx.fillStyle= "black"
ctx.beginPath();
ctx.fillRect(230,200, 60, 10);
ctx.fillRect(290,210, 10, 40);
ctx.fillRect(280,250, 10, 10);
ctx.stroke();
ctx.fill();
//4derecha
ctx.fillStyle= "black"
ctx.beginPath();
ctx.fillRect(230,240, 30, 10);
ctx.fillRect(260,250, 10, 20);
ctx.fillRect(250,270, 10, 10);
ctx.stroke();
ctx.fill();
//1izquierda
ctx.fillStyle= "black"
ctx.beginPath();
ctx.fillRect(160,120, 20, 10);
ctx.fillRect(150,90, 10, 30);
ctx.fillRect(160,80, 10, 10);
ctx.stroke();
ctx.fill();
//2izquierda
ctx.fillStyle= "black"
ctx.beginPath();
ctx.fillRect(150,170, 40, 10);
ctx.fillRect(140,140, 10, 30);
ctx.stroke();
ctx.fill();
//3izquierda
ctx.fillStyle= "black"
ctx.beginPath();
ctx.fillRect(130,200, 50, 10);
ctx.fillRect(120,170, 10, 30);
ctx.stroke();
ctx.fill();
//4izquierda
ctx.fillStyle= "black"
ctx.beginPath();
ctx.fillRect(150,240, 30, 10);
ctx.fillRect(140,250, 10, 10);
ctx.stroke();
ctx.fill();
//ojo izquierdo
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(195, 130, 5, 4.5, 2 * Math.PI, true);
ctx.fill();
//ojo derecha
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(215, 130, 5, 4, 2 * Math.PI, true);
ctx.fill();