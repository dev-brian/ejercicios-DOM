const body = document.querySelector('body');
const btnChange = document.querySelector('#btnChange'); 
const textColors = document.querySelector('#textColors');
const btnRed = document.querySelector('#btnRed');
const btnBlue = document.querySelector('#btnBlue');
const btnGreen = document.querySelector('#btnGreen');

const optionsColor = ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const changeColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += optionsColor[Math.floor(Math.random() * optionsColor.length)];
    }
    body.style.backgroundColor = color;
    textColors.innerText = color;
};
//changeColor();
btnChange.addEventListener('click', changeColor);



/* const redColor = () => {
    body.style.backgroundColor = '';
};
btnRed.addEventListener('click', redColor);


const blueColor = () => {
    body.style.backgroundColor = '';
};
btnBlue.addEventListener('click', blueColor);


const greenColor = () => {
    body.style.backgroundColor = '';
};
btnGreen.addEventListener('click', greenColor); */


const rgbColor = () => {
    const red = btnRed.value;
    const blue = btnBlue.value;
    const green = btnGreen.value;
    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color;
    textColors.innerText = color;
};

btnRed.addEventListener('input', rgbColor);
btnBlue.addEventListener('input', rgbColor);
btnGreen.addEventListener('input', rgbColor);





/* const changeColor = () => {
    const color = prompt ('Ingresa un color:')
    
    const randomColor = ['A','B,','C','D,','E','F','1','2','3','4','5','6','7','8','9'];
    const color =  Math.floor(Math.random()*16);
    console.log(randomColor);
    body.style.backgroundColor = color; 
}




btnChange.addEventListener('click', changeColor) */
// const optionsColor = ['A','B,','C','D,','E','F','1','2','3','4','5','6','7','8','9'];
//     console.log(optionsColor);

//     const changeColor = () => {
//         let newColor =  Math.floor(Math.random()*optionsColor.length);
//         console.log(newColor);
//     }
//     changeColor();


