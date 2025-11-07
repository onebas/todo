function createTask(id, taskName, taskDate, priority){
    const container = document.createElement("div");
    container.setAttribute("id", id);
    container.classList.add(priority);
    container.classList.add("task")
    const name = document.createElement("h3");
    const date = document.createElement("input");


    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const showDetail = document.createElement("button");
    showDetail.setAttribute("id", "view-more");
    showDetail.classList.add("view");

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "delete-task");
    deleteButton.classList.add("delete");

    name.textContent = taskName;
    date.setAttribute("type", "date");
    date.setAttribute("readonly", true);
    date.setAttribute("value", taskDate);
    buttons.append(showDetail, deleteButton)

    container.append(name, date, buttons);
    return container;
}

export default createTask;
