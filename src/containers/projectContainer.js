import {default as updateStorage} from "../storage/storeTasksProj.js"

function Projects(){
    const projects = (!updateStorage.getStoredProjects()) ? {0: "Default"} : updateStorage.getStoredProjects(); 

    function addProject(projectName){
        let id = crypto.randomUUID()
        projects[id] = projectName;
        updateStorage.updateProject(projects);
    }

    function deleteProject(projectId){
        delete projects[projectId];
        updateStorage.updateProject(projects);
    
    }

    function getProjects(){
        return structuredClone(projects);
    }

    

    return {addProject, deleteProject, getProjects};
}

export default Projects();