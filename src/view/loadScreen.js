import {default as DescriptionController} from "../controllers/descriptionController";
import {default as ProjectController} from "../controllers/projectController";
import {default as TaskController} from "../controllers/taskController";


function LoadScreen(){
    const projects = document.querySelector("#projects");
    const tasks = document.querySelector("#tasks");
    const details = document.querySelector("#details");

    function reloadProjects(projectsObj){
        while(projects.firstChild){
            projects.removeChild(projects.firstChild);
        }
        ProjectController(projects, projectsObj);
    }

    function reloadTasks(tasksObj){
        while(tasks.firstChild){
            tasks.removeChild(tasks.firstChild);
        }
        TaskController(tasks, tasksObj);
    }

    function reloadDetails(task){
        while(details.firstChild){
            details.removeChild(details.firstChild);
        }
        DescriptionController(details, task);
    }

    return {reloadProjects, reloadTasks, reloadDetails};
}

export default LoadScreen();