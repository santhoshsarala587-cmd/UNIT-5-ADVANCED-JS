const student = {
    name: "Priya",
    course: "Web Development",
    year: 2
};

const showJsonData = () => {

    const jsonData = JSON.stringify(student);

    const convertedObject = JSON.parse(jsonData);

    document.getElementById("output").innerHTML = `
        JSON: ${jsonData}<br><br>
        Name: ${convertedObject.name}<br>
        Course: ${convertedObject.course}
    `;
};

document
    .getElementById("showBtn")
    .addEventListener("click", showJsonData);
