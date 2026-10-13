import { displayMessage } from "./export.js";

const showMessage = () => {

    document.getElementById("output").innerHTML =
        displayMessage();
};

document
    .getElementById("showBtn")
    .addEventListener("click", showMessage);