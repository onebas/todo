import {default as createProject} from "../components/createProject.js";


function ProjectController(projects, projectsObj){
    const heading = document.createElement("h1");
    heading.textContent = "Projects";
    projects.appendChild(heading);

    for(let project in projectsObj){
        const projectContainer = createProject(project, projectsObj[project]);
        projects.appendChild(projectContainer);
    }

    const addProject = document.createElement("button");
    addProject.classList.add("add");
    addProject.setAttribute("id", "add-project");
    projects.appendChild(addProject);
}

export default ProjectController;