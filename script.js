// Getting the DOM elements
let colorPicker1 = document.querySelectorAll("input")[0];
let colorPicker2 = document.querySelectorAll("input")[1];

let h3 = document.querySelector("h3");
let body = document.getElementById("background");


let setColor = () => {
	let background = `linear-gradient(to right, ${colorPicker1.value}, ${colorPicker2.value})`;
	body.style.background = background; 
	h3.textContent = `${background};`;
}

colorPicker1.addEventListener("input", setColor); 
colorPicker2.addEventListener("input", setColor);
