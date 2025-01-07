//your JS code here. If required.
const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add = "container";
const range = document.createElement("div");
range.className = "range";

for(let i = 1; i <= 5; i++){
	const circle = document.createElement("div");
	circle.className = "circle";
	circle.id = `circle-${i}`;
	circle.textContent = `${i}`;
	// if(circle.id === "circle-1"){
	// 	circle.classList.add("active");
	// }
	range.append(circle);
	if(i <= 4){
		const line = document.createElement("div");
		line.className = "line";
		range.append(line);
	}
}

const prev = document.createElement("button");
prev.id = "prev";
prev.textContent = "Prev";
const next = document.createElement("button");
next.id = "next";
next.textContent = "Next";

container.append(range);
container.append(prev);
container.append(next);
body.append(container);


const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const lines = document.querySelectorAll(".line");

let currentActive = 1;

nextButton.addEventListener("click", () => {
  if (currentActive < circles.length) {
    currentActive++;
  }
  updateUI();
});

prevButton.addEventListener("click", () => {
  if (currentActive > 1) {
    currentActive--;
  }
  updateUI();
});

function updateUI() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  lines.forEach((line, index) => {
    if (index < currentActive - 1) {
      line.classList.add("active");
    } else {
      line.classList.remove("active");
    }
  });

  prevButton.disabled = currentActive === 1;
  nextButton.disabled = currentActive === circles.length;
}

// Initialize the UI
updateUI();











