// Getting the DOM elements
const colorPicker1 = document.querySelectorAll("input")[0];
const colorPicker2 = document.querySelectorAll("input")[1];
const h3 = document.querySelector("h3");
const body = document.getElementById("background");
const button = document.getElementById("button-random");


let setColor = () => {
	const background = `linear-gradient(to right, ${colorPicker1.value}, ${colorPicker2.value})`;
	body.style.background = background; 
	h3.textContent = `${background};`;
}

let setRandomColor = () => {
	const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	colorPicker1.value = `#${randomColor1}`;
	colorPicker2.value = `#${randomColor2}`;
	setColor();

}	


body.addEventListener("load", setRandomColor);
colorPicker1.addEventListener("input", setColor); 
colorPicker2.addEventListener("input", setColor);
button.addEventListener("click", setRandomColor);
