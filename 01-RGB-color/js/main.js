/*
 * Project Requirements:
 * - Change the background color by generating random rbg color by clicking a button
 */

// Step 1 - create onload handler
// step 2 - random color generator function
// step 3 - collect all necessary references
// step 4 - handle the click event

const root = document.getElementById('root');
const button = document.getElementById('changeBtn');

window.onload = () => {
	main();
};

const main = () => {
	button.addEventListener('click', function () {
		const backgroundColor = colorGenerateRGB();
		root.style.backgroundColor = backgroundColor;
	});
};

const colorGenerateRGB = () => {
	const red = Math.round(Math.random() * 255);
	const green = Math.round(Math.random() * 255);
	const blue = Math.round(Math.random() * 255);

	return `rgb(${red}, ${green}, ${blue})`;
};
