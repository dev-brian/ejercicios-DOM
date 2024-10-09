const container = document.querySelector(".container");
const widthInput = document.querySelector("#width");
const heightInput = document.querySelector("#height");
const radiusInput = document.querySelector("#radius");
const shadowInput = document.querySelector("#shadow");
const colorInput = document.querySelector("#color");
const opacityInput = document.querySelector("#opacity");
const shadowXInput = document.querySelector("#shadowX");
const shadowYInput = document.querySelector("#shadowY");
const shadowOpacityInput = document.querySelector("#shadowOpacity");
const shadowColorInput = document.querySelector("#shadowColor");

let height = 500;
let width = 500;
let radius = 0;
let color = 0;
let opacity = 1;
let shadowX = 0;
let shadowY = 0;
let shadowOpacity = 0;
let shadowColor = 0;

const changeContainer = () => {
    container.style.width = `${width}px`;
    container.style.height = `${height}px`;
    container.style.borderRadius = `${radius}px`;
    container.style.opacity = `${opacity}`;
    container.style.backgroundColor = `hsl(${color}, 100%, 50%)`;
    container.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowOpacity}px hsl(${shadowColor}, 100%, 50%)`;
};

colorInput.addEventListener("input", (e) => {
    changeContainer();
    color = e.target.value;
});
widthInput.addEventListener("input", (e) => {
    changeContainer();
    width = e.target.value;
});
heightInput.addEventListener("input", (e) => {
    changeContainer();
    height = e.target.value;
});
radiusInput.addEventListener("input", (e) => {
    changeContainer();
    radius = e.target.value;
});
radiusInput.addEventListener("input", (e) => {
    changeContainer();
    radius = e.target.value;
});
opacityInput.addEventListener("input", (e) => {
    changeContainer();
    opacity = e.target.value;
});
shadowXInput.addEventListener("input", (e) => {
    changeContainer();
    shadowX = e.target.value;
});
shadowYInput.addEventListener("input", (e) => {
    changeContainer();
    shadowY = e.target.value;
});
shadowOpacityInput.addEventListener("input", (e) => {
    changeContainer();
    shadowOpacity = e.target.value;
});

shadowColorInput.addEventListener("input", (e) => {
    changeContainer();
    shadowColor = e.target.value;
});

/* widthInput.addEventListener('input', changeContainer);
heightInput.addEventListener('input', changeContainer);
radiusInput.addEventListener('input', changeContainer);
shadowInput.addEventListener('input', changeContainer); */

colorInput.addEventListener("input", changeContainer);
