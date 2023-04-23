const container = document.getElementById("container");

const squares = document.querySelectorAll(".square");

const colorPicker = document.getElementById("colorPicker");
const eraserBtn = document.getElementById("eraserBtn");
const resetBtn = document.getElementById("resetBtn");
const downloadBtn = document.getElementById("downloadBtn");

let isMouseDown = false;

document.addEventListener("mousedown", () => (isMouseDown = true));
document.addEventListener("mouseup", () => (isMouseDown = false));

let currentColor = "#F6B73C";

function updateCurrentColor(event) {
	currentColor = event.target.value;
}

colorPicker.addEventListener("input", updateCurrentColor);
colorPicker.addEventListener("change", updateCurrentColor);

eraserBtn.addEventListener("click", function () {
	currentColor = "#FFF";
});

resetBtn.addEventListener("click", function () {
	const squares = document.querySelectorAll(".square");

	squares.forEach((square) => {
		square.style.backgroundColor = "#FFF";
	});
});

function drawSquares(numberOfRows = 32, numberOfColumns = 32) {
	for (let i = 0; i < numberOfRows; i++) {
		let row = document.createElement("div");
		row.classList.add("row");

		container.append(row);
		for (let j = 0; j < numberOfColumns; j++) {
			let square = document.createElement("div");
			square.classList.add("square");

			square.addEventListener("click", function () {
				square.style.backgroundColor = currentColor;
			});

			square.addEventListener("mouseover", function () {
				if (isMouseDown) square.style.backgroundColor = currentColor;
			});

			row.append(square);
		}
	}
}

drawSquares();
