const getPostData = async () => {

    document.getElementById("output").innerHTML = "Loading...";

    try {
        const response =
            await fetch("https://jsonplaceholder.typicode.com/posts/4");

        const postData = await response.json();

        document.getElementById("output").innerHTML = `
            <h3>${postData.title}</h3>
            <p>${postData.body}</p>
        `;
    } catch (error) {
        document.getElementById("output").innerHTML =
            "Error: " + error.message;
    }
};

document
    .getElementById("loadBtn")
    .addEventListener("click", getPostData);
