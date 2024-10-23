const tareasDiv = document.querySelector(".tareas");
const myForm = document.querySelector("#form");
const inputTarea = document.querySelector("#inputTarea");

let arrayTareas = [];



const addTarea = () => {
    const tarea = inputTarea.value;
    arrayTareas.push({
        tarea: tarea,
        estado: 'red',
        id: Math.floor(Math.random() * 1000)
    });
    localStorage.setItem("tarea", JSON.stringify(arrayTareas));
    //creaomos un objeto nuevo e insertamos en el div
    //tareasDiv.appendChild(crearObjeto(tarea));
    creaDivs();
    inputTarea.value = "";
};

const creaDivs = () => {
    tareasDiv.innerHTML = "";
    arrayTareas.forEach(tarea => {
        tareasDiv.appendChild(crearObjeto(tarea))
    })
};

const eliminaObjeto = (e) => {
    const button = e.target;
    const papa = button.parentElement;
    const id = papa.getAttribute('data-id');
    arrayTareas = arrayTareas.filter(t => t.id !== Number(id));
    localStorage.setItem('tarea', JSON.stringify(arrayTareas));
    papa.remove();
};

const changeColor = e => {
    const myDiv = e.target;
    const id = myDiv.getAttribute('data-id');
    const idTarea = arrayTareas.findIndex(t => t.id === Number(id));
    if (myDiv.classList.contains('red')) {
        myDiv.classList.remove('red');
        myDiv.classList.add('yellow');
        arrayTareas[idTarea].estado = 'yellow';
    } else if (myDiv.classList.contains('yellow')) {
        myDiv.classList.remove('yellow');
        myDiv.classList.add('green');
        arrayTareas[idTarea].estado = 'green';
    }
    localStorage.setItem("tarea", JSON.stringify(arrayTareas));
}

const crearObjeto = (tarea) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.innerText = tarea.tarea;
    const button = document.createElement("button");
    button.innerText = "Eliminar";
    button.addEventListener('click', eliminaObjeto)
    div.appendChild(p);
    div.appendChild(button);
    div.classList.add('alert');
    div.classList.add(tarea.estado);
    div.setAttribute('data-id', tarea.id);
    div.addEventListener('click', changeColor);
    return div;
};

arrayTareas = localStorage.getItem('tarea')
    ? JSON.parse(localStorage.getItem('tarea'))
    : [];
creaDivs();

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTarea();
});
