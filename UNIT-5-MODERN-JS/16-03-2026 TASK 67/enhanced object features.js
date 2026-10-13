const bookTitle = "Atomic Habits";
const author = "James Clear";

const book = {
    bookTitle,
    author,

    showInfo() {
        document.getElementById("output").innerHTML =
            `Title: ${this.bookTitle}<br>Author: ${this.author}`;
    }
};

document
    .getElementById("showBtn")
    .addEventListener("click", () => book.showInfo());
