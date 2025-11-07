function createDescription(taskName, dueDate, description, project, priority){
    const container = document.createElement("div");
    container.classList.add("task-details");

    const name = document.createElement("p");
    name.textContent = taskName;
    container.appendChild(name);

    const dateContainer = document.createElement("div");
    dateContainer.classList.add("due-date");
    const label = document.createElement("label");
    label.setAttribute("for", "due-date");
    label.textContent = "Due Date";
    const date = document.createElement("input");
    date.setAttribute("type", "date");
    date.setAttribute("value", dueDate);
    date.setAttribute("name", "due-date");
    date.setAttribute("id", "due-date");
    date.setAttribute("readonly", true);
    dateContainer.append(label, date);
    container.appendChild(dateContainer)

    const desc = document.createElement("p");
    desc.textContent = `Description: ${description}`;
    container.append(desc);

    const projectName = document.createElement("p");
    projectName.textContent = `Project: ${project}`;
    container.appendChild(projectName);

    const prioritySpan = document.createElement("span");
    const priorityText = document.createElement("p");
    priorityText.textContent = "Priority: ";
    switch(priority){
        case "high":
            prioritySpan.classList.add("high-priority");
            prioritySpan.textContent = "High";
            break;
        case "medium":
            prioritySpan.classList.add("medium-priority");
            prioritySpan.textContent = "Medium";
            break;
        case "low":
            prioritySpan.classList.add("low-priority");
            prioritySpan.textContent = "Low";
            break;
    }
    priorityText.append(prioritySpan);
    container.appendChild(priorityText);

    return container;
}

export default createDescription;