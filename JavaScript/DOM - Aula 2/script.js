var inputElement = document.querySelector('.new-task-input')
var addTaskButton = document.querySelector('.task-button')
var taskContainer = document.querySelector('.task-container')

function validarBotao(){
    const texto = document.createElement('p')
    taskContainer.appendChild(texto)
    texto.innerText = inputElement.value
}

addTaskButton.addEventListener('click', validarBotao);
