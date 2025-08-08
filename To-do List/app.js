


const addInput = document.querySelector('#addTodo');
const addBtn = document.querySelector('#newTodo');
const todoBox = document.querySelector('#todo-box');

addBtn.addEventListener('click', () => {
    const task = addInput.value.trim();
    if (task === '') return;

    const divEle = document.createElement('div');
    const inputTodo = document.createElement('input');
    const labelTodo = document.createElement('label');
    const closeBtn = document.createElement('span');

    // Unique ID
    const uniqueId = `check-${Date.now()}`;

    // Styling and structure
    divEle.setAttribute('class', 'form-check');


    inputTodo.setAttribute('class', 'form-check-input');
    inputTodo.setAttribute('type', 'checkbox');
    inputTodo.setAttribute('id', uniqueId);

    labelTodo.setAttribute('class', 'form-check-label');
    labelTodo.setAttribute('for', uniqueId);
    labelTodo.textContent = task;

    closeBtn.textContent = 'X';
    closeBtn.setAttribute('class', 'close-btn');
    closeBtn.style.cursor = 'pointer';

    // Append elements

    divEle.append(inputTodo, labelTodo, closeBtn);
    todo.append(divEle);

    // Reset input
    addInput.value = '';

    // Event Listeners
    closeBtn.addEventListener('click', () => {
        divEle.classList.add('removed');
        setTimeout(() => (divEle.remove()), 1000)
    });
    inputTodo.addEventListener('click', () => labelTodo.classList.toggle('strike'));
});
