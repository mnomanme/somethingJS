/*
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 */

// Step 1 - create onload handler
// step 2 - random color generator function
// step 3 - collect all necessary references
// step 4 - handle the click event

const root = document.getElementById('root');
const button = document.getElementById('changeBtn');
const output = document.getElementById('output');

window.onload = () => {
	main();
};

const main = () => {
	button.addEventListener('click', function () {
		const backgroundColor = colorGenerateHEX();
		root.style.backgroundColor = backgroundColor;
		output.value = backgroundColor;
	});
};

const colorGenerateHEX = () => {
	const red = Math.round(Math.random() * 255);
	const green = Math.round(Math.random() * 255);
	const blue = Math.round(Math.random() * 255);

	return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
};
