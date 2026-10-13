let score = 100;

const updateScore = () => {

    debugger;

    score += 10;

    document.getElementById("output").innerHTML =
        `Updated Score: ${score}`;

    console.log("Current score:", score);
};

document
    .getElementById("updateBtn")
    .addEventListener("click", updateScore);
