import {default as updateStorage} from "../storage/storeTasksProj.js";


function Tasks(){
    
    const tasks = !(updateStorage.getStoredTasks()) ? {} : updateStorage.getStoredTasks();
    function addTask(name, description, duedate, project, priority){
        const id = crypto.randomUUID();
        tasks[id] = {name, description, duedate, project, priority};
        updateStorage.updateTasks(tasks);
    }

    function deleteTask(id){
        delete tasks[id];
        updateStorage.updateTasks(tasks)
    }

    function deleteTaskOnProject(project){
        for(let task in tasks){
            if (tasks[task]["project"] == project){
                delete tasks[task];
            } 
        }
        updateStorage.updateTasks(tasks)
    }

    function getTasks(){
        return structuredClone(tasks);
    }

    function getTasksOnProject(project){
        if(project=="Default"){
            return structuredClone(tasks);
        }
        const tasksProject = {};
        for(let task in tasks){
            if(tasks[task]["project"] == project){
                tasksProject[task] = tasks[task];
            }
        }
        return tasksProject;
    }

    return {addTask, deleteTask, deleteTaskOnProject, getTasks, getTasksOnProject};
}

export default Tasks();