import "./styles.css"
import loadScreen, {default as LoadScreen} from "./view/loadScreen.js";
import {default as projectContainer} from "./containers/projectContainer.js";
import {default as taskContainer} from "./containers/taskContainer.js";



//Add default project
let projectObj = projectContainer.getProjects();
let taskObj = taskContainer.getTasks();
LoadScreen.reloadProjects(projectObj);
LoadScreen.reloadTasks(taskObj);

//Buttons for addding project/task
const addProjectButton = document.querySelector("#add-project");
const addTaskButton = document.querySelector("#add-task");


//Events for delete/view for tasks/projects bubble up to containers
const projectDiv = document.querySelector("#projects");
const taskDiv = document.querySelector("#tasks");

//dialog box and form for adding project/task
const addTaskDialog = document.querySelector("#create-task");
const addProjectDialog = document.querySelector("#create-project");
const taskForm = addTaskDialog.querySelector("form");
const projectForm = addProjectDialog.querySelector("form");


//showing dialog
addProjectButton.addEventListener("click", () => addProjectDialog.showModal());
addTaskButton.addEventListener("click", taskInput);

//getting details for new task/project
projectForm.addEventListener("submit", projectDetails);
taskForm.addEventListener("submit", taskDetails);


//check whether bubbled event is for viewing/deleting
projectDiv.addEventListener("click", projectEvent);
taskDiv.addEventListener("click", taskEvent);

function taskInput(){
    const options = taskForm.querySelector("#project-input");
    while(options.firstChild){
        options.removeChild(options.firstChild);
    }
    const availableProjects = projectContainer.getProjects();
    for(let project in availableProjects){
        const option = document.createElement("option");
        option.setAttribute("value", availableProjects[project]);
        option.textContent = availableProjects[project];
        options.appendChild(option);
    }
    addTaskDialog.showModal();
}



function projectDetails(event){
    event.preventDefault();
    addProjectDialog.close();
    const formData = new FormData(projectForm);
    const projectName = formData.get("project-name");

    projectContainer.addProject(projectName);
    const projects = projectContainer.getProjects();
    LoadScreen.reloadProjects(projects);

    //it was a mistake to clear every child in project every time cause the buttons event listener is also lost, this fix is ugly but I'm too tired to rewrite the ProjectController
    let addButton = document.querySelector("#add-project");
    addButton.addEventListener("click", () => addProjectDialog.showModal());
}

function taskDetails(event){
    event.preventDefault();
    addTaskDialog.close();
    const formData = new FormData(taskForm);

    taskContainer.addTask(formData.get("name"), formData.get("description"), formData.get("date"), formData.get("project-input"), formData.get("priority"));
    const tasks = taskContainer.getTasks();
    LoadScreen.reloadTasks(tasks);
}


function projectEvent(event){
    if(event.target.id == "view-project"){
        const projectName = event.target.parentElement.previousSibling.querySelector("p").textContent;
        filterProject(projectName);
    }
    else if(event.target.id == "delete-project"){
        const projectName = event.target.parentElement.previousSibling.querySelector("p").textContent;
        const project = event.target.parentElement.parentElement.id;
        deleteProject(project, projectName);
    }
}

function taskEvent(event){
    const task = event.target.parentElement.parentElement.id;
    if(event.target.id === "view-more"){
        const taskObj = taskContainer.getTasks()[task];
        LoadScreen.reloadDetails(taskObj);
    }
    else if(event.target.id === "delete-task"){
            taskContainer.deleteTask(task);

            const tasks = taskContainer.getTasks();
            LoadScreen.reloadTasks(tasks);

        }
}

function filterProject(project){
    const tasks = taskContainer.getTasksOnProject(project);
    LoadScreen.reloadTasks(tasks);
}

function deleteProject(project, projectName){
    if(projectName === "Default"){
        alert("Default Project cannot be deleted");
        return;
    }
    projectContainer.deleteProject(project);
    const projects = projectContainer.getProjects();
    LoadScreen.reloadProjects(projects);

    const tasks = taskContainer.getTasksOnProject(projectName);
    for(let task in tasks){
        taskContainer.deleteTask(task);
    }

    const newTasks = taskContainer.getTasks();
    loadScreen.reloadTasks(newTasks);
    //it was a mistake to clear every child in project every time cause the buttons event listener is also lost, this fix is ugly but I'm too tired to rewrite the ProjectController
    let addButton = document.querySelector("#add-project");
    addButton.addEventListener("click", () => addProjectDialog.showModal());
}