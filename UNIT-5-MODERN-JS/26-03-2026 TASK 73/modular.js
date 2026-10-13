import { addNumbers } from "./helper.js";

const showResult = () => {

    const result =
        addNumbers(12, 8);

    document.getElementById("output").innerHTML =
        `Result: ${result}`;
};

document
    .getElementById("showBtn")
    .addEventListener("click", showResult);
