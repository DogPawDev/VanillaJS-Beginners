const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos =[];


function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}


function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function loadToDos(){
    const loadToDos = localStorage.getItem(TODOS_LS);
    if(loadToDos !==null){
        const parsedToDos = JSON.parse(loadToDos);
        parsedToDos.forEach(function(toDo){
            //불러올대마다 함수 실행
        paintToDo(toDo.text);
        });
    }
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId =toDos.length + 1;



    delBtn.innerText = "X";

    delBtn.addEventListener("click",deleteToDo);


    span.innerText=text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;

    toDoList.appendChild(li);

    const toDoObj={
        text:text,
        id: newId
    };

    toDos.push(toDoObj);
    saveToDos();
}

function handlSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handlSubmit);
}

init();
