const studentMarks = [72, 90, 81, 67, 98, 85];

const calculateAverage = (...marksList) => {
    const totalMarks = marksList.reduce(
        (sum, currentMark) => sum + currentMark,
        0
    );

    return (totalMarks / marksList.length).toFixed(2);
};

const findHighestMark = (...marksList) =>
    Math.max(...marksList);

const findLowestMark = (...marksList) =>
    Math.min(...marksList);

const showResult = () => {
    const averageMark = calculateAverage(...studentMarks);
    const highestMark = findHighestMark(...studentMarks);
    const lowestMark = findLowestMark(...studentMarks);

    const resultArea = document.getElementById("result");

    resultArea.innerHTML = `
        <h3>Student Marks Report</h3>

        <p><strong>Marks:</strong>
        ${studentMarks.join(", ")}</p>

        <p><strong>Average:</strong>
        ${averageMark}</p>

        <p><strong>Highest Mark:</strong>
        ${highestMark}</p>

        <p><strong>Lowest Mark:</strong>
        ${lowestMark}</p>
    `;

    console.log("Average:", averageMark);
    console.log("Highest:", highestMark);
    console.log("Lowest:", lowestMark);
};

document
    .getElementById("generateReport")
    .addEventListener("click", showResult);
