const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = input.value.trim();

    if (todoText !== '') {
        addTodoItem(todoText);
        input.value = '';
    }
});

function addTodoItem(todoText) {
    const todoItem = document.createElement('li');
    todoItem.textContent = todoText;

    const actions = document.createElement('div');
    actions.classList.add('actions');

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete');
    completeButton.addEventListener('click', function() {
        todoItem.classList.toggle('completed');
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.addEventListener('click', function() {
        const newText = prompt('Enter new text for this task:', todoItem.textContent);
        if (newText !== null) {
            todoItem.textContent = newText;
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        todoItem.remove();
    });

    actions.appendChild(completeButton);
    actions.appendChild(editButton);
    actions.appendChild(deleteButton);

    todoItem.appendChild(actions);
    todoList.appendChild(todoItem);
}