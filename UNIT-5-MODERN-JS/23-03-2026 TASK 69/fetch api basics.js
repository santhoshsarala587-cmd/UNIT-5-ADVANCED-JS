const loadPost = () => {

    fetch("https://jsonplaceholder.typicode.com/posts/3")
        .then(response => response.json())
        .then(post => {

            document.getElementById("output").innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;

        })
        .catch(error => {
            document.getElementById("output").innerHTML =
                "Error: " + error.message;
        });

};

document
    .getElementById("fetchBtn")
    .addEventListener("click", loadPost);
