function storageAvailable() {
  let storage;
  try {
    storage = window["localStorage"];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function updateStorage(){

    function updateTasks(taskObj){
        if(storageAvailable()){
            const taskJson = JSON.stringify(taskObj);
            localStorage.setItem("tasks", taskJson);
        }
        else{
            console.log("no storage available");
        }
    }

    function updateProject(projectObj){
        if(storageAvailable()){
            const projectJson = JSON.stringify(projectObj);
            localStorage.setItem("projects", projectJson);
        }
        else{
            console.log("no storage");
        }
    }

    function getStoredTasks(){
        return JSON.parse(localStorage.getItem("tasks"));
    }

    function getStoredProjects(){
        return JSON.parse(localStorage.getItem("projects"));
    }

    return {updateTasks, updateProject, getStoredTasks, getStoredProjects};
}

export default updateStorage();