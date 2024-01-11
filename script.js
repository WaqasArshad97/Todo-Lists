document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(taskItem);

            // Clear input
            taskInput.value = '';

            // Add event listener to delete button
            const deleteBtn = taskItem.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => {
                taskItem.remove();
            });
        }
    }
});
