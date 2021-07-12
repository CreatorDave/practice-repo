const createTaskHtml = (id, name, description, assignedTo, dueDate) => {
    `
    <li class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge badge-danger">TODO</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned to: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>${description}</p>
    </li>
`};

class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask(name, description, assignedTo, dueDate) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };
        this.tasks.push(task);

    }

    deleteTask(taskId) {

        const newTasks = [];
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            if (task.id !== taskId) {
                newTasks.push(task);
            }
        }
        this.tasks = newTasks;
    }

    getTaskById(taskId) {
        let foundTask; {

            for (let i = 0; i < this.tasks.length; i++); {
                const task = this.tasks[i];
            }
            if (task.id === taskId) {
                foundTask = task;
            }
        }
    }


    // In js/taskManager.js, in the TaskManager class, create a save method. This method doesn't require any parameters. DONE

    //In the save method, create a JSON string of the tasks using JSON.stringify() and store it to a new variable, tasksJson. DONE

    //Store the JSON string in localStorage under the key tasks using localStorage.setItem(). DONE?

    //Convert the this.currentId to a string and store it in a new variable, currentId. DONE?

    //Store the currentId variable in localStorage under the key currentId using localStorage.setItem(). DONE?

    //In js/index.js, after both adding a new task and updating a task's status to done, call taskManager.save() to save the tasks to localSorage. WHAT?

    save() {
        let tasksJson = JSON.stringify(tasks);
        localStorage.setItem(tasksJson);
        let currentId = JSON.stringify(this.currentId);
        localStorage.setItem(currentId);
    }
}