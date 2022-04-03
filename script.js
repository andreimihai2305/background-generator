// Getting the DOM elements
const colorPicker1 = document.querySelectorAll("input")[0];
const colorPicker2 = document.querySelectorAll("input")[1];
const hexColorInput1 = document.querySelectorAll("input")[2];
const hexColorInput2 = document.querySelectorAll("input")[3];
const h3 = document.querySelector("h3");
const body = document.getElementById("background");
const button = document.getElementById("button-random");


const setColorWithPicker = () => {
	const background = `linear-gradient(to right, ${colorPicker1.value}, ${colorPicker2.value})`;
	body.style.background = background; 
	h3.textContent = `${background};`;
}

const setPickerValues = (picker1, picker2) => {
	colorPicker1.value = `#${picker1}`;
	colorPicker2.value = `#${picker2}`;
}

const setColorWithHex = () => {
	const color1 = hexColorInput1.value;
	const color2 = hexColorInput2.value;
	if (color1.length === 6 && color2.length === 6)
	{
		setPickerValues(color1, color2);
		setColorWithPicker();
	}
}

const setRandomColor = () => {
	const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	setPickerValues(randomColor1, randomColor2);
	setColorWithPicker();

}	

setRandomColor();
colorPicker1.addEventListener("input", setColorWithPicker); 
colorPicker2.addEventListener("input", setColorWithPicker);
hexColorInput1.addEventListener("input", setColorWithHex);
hexColorInput2.addEventListener("input", setColorWithHex);

button.addEventListener("click", setRandomColor);

