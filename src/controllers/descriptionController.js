import {default as createDescription} from "../components/createDescription.js";

function DescriptionController(details, task){
    const heading = document.createElement("h1");
    heading.textContent = "Details";
    const description = createDescription(task["name"], task["duedate"], task["description"], task["project"], task["priority"]);
    details.append(heading, description);
}

export default DescriptionController;