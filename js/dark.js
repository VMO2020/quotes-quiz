'use strict';
// console.log('store.js works!');

// Selectors
const modeButton = document.querySelector('#dark');
const mainContainer = document.querySelector('.main-container');

// Initial content
modeButton.textContent = '🌒';

let settings = {
	mode: 'light',
	results: '',
};

// localStorage
function loadSettings() {
	let getSettings = localStorage.getItem('settings');
	if (getSettings) {
		settings = JSON.parse(getSettings);
		// console.log(settings);
		setMode();
	}
}

function saveSettings() {
	let stringify = JSON.stringify(settings);
	localStorage.setItem('settings', stringify);
	console.log(stringify);
}

// Button toggle mode
modeButton.addEventListener('click', toggleMode);

function toggleMode() {
	if (settings.mode === 'light') {
		settings.mode = 'dark';
		modeButton.textContent = '🌞';
		mainContainer.style.color = 'white';
		mainContainer.style.backgroundColor = 'black';
		// console.log(settings);
		saveSettings();
	} else {
		settings.mode = 'light';
		modeButton.textContent = '🌒';

		mainContainer.style.color = 'black';
		mainContainer.style.backgroundColor = 'white';
		// console.log(settings);
		saveSettings();
	}
}

// Local store set mode
function setMode() {
	if (settings.mode === 'light') {
		modeButton.textContent = '🌒';
		mainContainer.style.color = 'black';
		mainContainer.style.backgroundColor = 'white';
	} else {
		modeButton.textContent = '🌞';
		mainContainer.style.color = 'white';
		mainContainer.style.backgroundColor = 'black';
	}
}

// Load settings and update
loadSettings();
