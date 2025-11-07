import ProjectIcon from "../img/folder.svg";


function createProject(id, name){
    const icon = document.createElement("img");
    icon.setAttribute("src", ProjectIcon);
    icon.setAttribute("alt", "Project Icon");

    const projectName = document.createElement("p");
    projectName.textContent = name;

    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");
    projectContainer.append(icon, projectName);


    const viewProject = document.createElement("button");
    viewProject.setAttribute("id", "view-project");
    viewProject.classList.add("view");

    const deleteProject = document.createElement("button");
    deleteProject.setAttribute("id", "delete-project");
    deleteProject.classList.add("delete");

    const buttonsContainer = document.createElement("div");
    buttonsContainer.append(viewProject, deleteProject);

    const container = document.createElement("div");
    container.setAttribute("id", id);
    container.classList.add("project");
    container.append(projectContainer, buttonsContainer);

    return container;
}

export default createProject;
