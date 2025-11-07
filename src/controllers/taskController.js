import {default as createTask} from "../components/createTask.js";

function TaskController(tasks, tasksObj){
    for(let task in tasksObj){
        const newTask = createTask(task, tasksObj[task]["name"], tasksObj[task]["duedate"], tasksObj[task]["priority"]);
        tasks.appendChild(newTask);
    }

}

export default TaskController;