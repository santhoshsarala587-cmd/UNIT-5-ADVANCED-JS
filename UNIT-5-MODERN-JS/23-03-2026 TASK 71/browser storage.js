const saveData = () => {

    const userName =
        document.getElementById("nameInput").value;

    localStorage.setItem("studentName", userName);

    alert("Name saved in Local Storage");
};

const showData = () => {

    const storedName =
        localStorage.getItem("studentName");

    document.getElementById("output").innerHTML =
        storedName
            ? `Stored Name: ${storedName}`
            : "No data found";
};

document
    .getElementById("saveBtn")
    .addEventListener("click", saveData);

document
    .getElementById("showBtn")
    .addEventListener("click", showData);
