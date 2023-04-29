'use strict';
console.log('quiz2.js is working!');

// *************************************** Questions ***************************************

let questions = [];

// Constructor
const Question = function (quote, author, authors) {
	this.quote = quote;
	this.author = author;
	this.authors = authors;
};

// Generate Questions
function generateQuestions() {
	let question1 = new Question(
		"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dagma - which is living with the results of other people's thinking.",
		'Steve Jobs',
		['Steve Jobs', 'Elon Musk', 'John Lennon', 'Walt Disney']
	);

	let question2 = new Question(
		'People who are right most of the time are people who change their minds often.',
		'Jeff Bezos',
		['Jeff Bezos', 'Elon Musk', 'John Lennon', 'Walt Disney']
	);

	let question3 = new Question(
		'When something is import enough, you do it even if the odds are not in your favor',
		'Elon Musk',
		['Elon Musk', 'Jeff Bezos', 'John Lennon', 'Walt Disney']
	);

	let question4 = new Question(
		"In the end, it's not the years in your life that count. It's the life in your years.",
		'Abraham Lincoln',
		['Abraham Lincoln', 'Elon Musk', 'John Lennon', 'Walt Disney']
	);

	let question5 = new Question(
		"Life is what happens when you're busy making other plans.",
		'John Lennon'[('John Lennon', 'Elon Musk', 'Nelson Mandela', 'Walt Disney')]
	);

	let question6 = new Question(
		'Love the life you live. Live the life you love.',
		'Bob Marley'[('Bob Marley', 'Elon Musk', 'Nelson Mandela', 'Steve Jobs')]
	);

	let question7 = new Question(
		'Success is not final; failure is not fatal: It is the courage to continue that counts.',
		'Winston S. Churchill',
		['Winston S. Churchill', 'Elon Musk', 'Nelson Mandela', 'Steve Jobs']
	);

	let question8 = new Question(
		'Success usually comes to those who are too busy to be looking for it.',
		'Henry David Thoreau',
		['Henry David Thoreau', 'Elon Musk', 'Nelson Mandela', 'Steve Jobs']
	);

	let question9 = new Question(
		"Don't compare yourself with anyone in this world ... if you do so, you are insulting yourself.",
		'Bill Gates',
		['Bill Gates', 'Elon Musk', 'Nelson Mandela', 'Steve Jobs']
	);

	let question10 = new Question(
		'Never invest in a business you cannot understand.',
		'Warren Buffett',
		['Warren Buffett', 'Elon Musk', 'Nelson Mandela', 'Steve Jobs']
	);

	questions.push(
		question1,
		question2,
		question3,
		question4,
		question5,
		question6,
		question7,
		question8,
		question9,
		question10
	);
	// console.log(questions);
}

generateQuestions();

// ******************************************** DOM ********************************************
// Selectors
const container = document.getElementById('victor-container');
const number = document.getElementById('title');
const quote = document.getElementById('quote');
const answer1Label = document.getElementById('answer1-label');
const answer1 = document.getElementById('answer1');
const answer2Label = document.getElementById('answer2-label');
const answer2 = document.getElementById('answer2');
const answer3Label = document.getElementById('answer3-label');
const answer3 = document.getElementById('answer3');
const answer4Label = document.getElementById('answer4-label');
const answer4 = document.getElementById('answer4');

const submitButton = document.getElementById('next-btn');
const startButton = document.getElementById('start-btn');

const caption = document.getElementById('caption');
const table = document.getElementById('results-table');
const tableHeadTitle = document.getElementById('table-head');
const tableBody = document.getElementById('table-body');

const formValue = document.getElementById('form');

// ***************************************** Functions *****************************************
let count = 1;
let maxQuestions = questions.length;
let answers = [];
let answersCheck = [];
let total = 0;

// Submit function
formValue.addEventListener('submit', function (event) {
	event.preventDefault(); // Stop refresh page`
	const name = event.target.author.value;
	if (!name) {
		alert('You need to select an author');
	} else {
		// console.log(name);
		answers.push(name);
		// Check answer
		if (name === questions[count - 1].author) {
			answersCheck.push(1);
			total = total + 1;
		} else {
			answersCheck.push(0);
		}
		// Check last question
		if (count === maxQuestions - 1) {
			submitButton.innerHTML = 'Submit';
		}
		// Check question number
		if (count < maxQuestions) {
			count = count + 1;
			mainQuiz();
		} else {
			console.log('You finished!');
			// console.log(answers);
			// console.log(answersCheck);
			// console.log(total);
			container.classList.add('hidden');
			startButton.classList.remove('hidden');
			tableHead();
			// tableRows();
		}
	}
});

// Quiz render function
function renderFunction(i, question) {
	form.reset();

	number.innerHTML = i;

	quote.innerHTML = question.quote;

	answer1Label.innerHTML = question.authors[0];
	answer1.setAttribute('value', question.authors[0]);

	answer2Label.innerHTML = question.authors[1];
	answer2.setAttribute('value', question.authors[1]);

	answer3Label.innerHTML = question.authors[2];
	answer3.setAttribute('value', question.authors[2]);

	answer4Label.innerHTML = question.authors[3];
	answer4.setAttribute('value', question.authors[3]);
}

// Quiz main function
function mainQuiz() {
	renderFunction(count, questions[count - 1]);
	startButton.classList.add('hidden');
}

mainQuiz();

// New Attempt
startButton.addEventListener('click', function () {
	count = 1;
	mainQuiz();
	container.classList.remove('hidden');
	answers = [];
	answersCheck = [];
	submitButton.innerHTML = 'Next';
	table.innerHTML = '';
});

// ******************************  TABLE  ******************************

const tableTitles = ['Quote', 'Author', 'Check'];

function tableHead() {
	caption.innerHTML = `Result: ${total} out of ${maxQuestions} points`;
	for (let i = 0; i < tableTitles.length; i++) {
		const title = document.createElement('th');
		title.textContent = tableTitles[i];
		tableHeadTitle.appendChild(title);
	}
	for (let i = 0; i < questions.length; i++) {
		// Rows
		const row = document.createElement('tr');
		tableBody.appendChild(row);

		// Column1
		const child1 = document.createElement('td');
		child1.textContent = `"${questions[i].quote}"`;
		row.appendChild(child1);

		// Column2
		const child2 = document.createElement('td');
		child2.textContent = answers[i];
		row.appendChild(child2);

		// Column3
		let check = true;
		const child3 = document.createElement('td');
		child3.style.color = 'green';
		if (answersCheck[i] !== 1) {
			check = false;
			child3.style.color = 'red';
		}
		child3.textContent = check;
		row.appendChild(child3);
	}
}
