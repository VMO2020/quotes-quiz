'use strict';
console.log('quiz3.js is working!');

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
		' Success is not final, failure is not fatal: it is the courage to continue that counts.',
		'Winston Churchill',
		['Albert Einstein', 'Abraham Lincoln', 'Bruce Lee', 'Winston Churchill']
	);
	let question2 = new Question(
		'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.',
		'Christian D. Larson',
		['Albert Einstein', 'Christian D. Larson', 'Bruce Lee', 'Elon Musk']
	);
	let question3 = new Question(
		'The only way to do great work is to love what you do.',
		'Steve Jobs',
		['Steve Jobs', 'Eleanor Roosevelt', 'Elon Musk', 'Muhammad Ali']
	);
	let question4 = new Question(
		'The best way to predict the future is to create it.',
		'Abraham Lincoln',
		['Albert Einstein', 'Abraham Lincoln', 'Muhammad Ali', 'Jimi Hendrix']
	);
	let question5 = new Question(
		'Life is 10% what happens to us and 90% how we react to it.',
		'Charles R. Swindoll',
		['Steve Jobs', 'Chris Grosser', 'Charles R. Swindoll', 'Jimi Hendrix']
	);
	let question6 = new Question(
		'The journey of a thousand miles begin with one step.',
		'Lao Tzu',
		['Muhammad Ali', 'Steve Jobs', 'Lao Tzu', 'Charles R. Swindoll']
	);
	let question7 = new Question(
		"Opportunities don't happen. You create them.",
		'Chris Grosser',
		['Muhammad Ali', 'Nelson Mandela', 'Will Smith', 'Chris Grosser']
	);
	let question8 = new Question(
		'Strive not to be a success, rather to be of value.',
		'Albert Einstein',
		['Albert Einstein', 'Steve Jobs', 'Will Smith', 'Winston Churchill']
	);
	let question9 = new Question(
		'The greatest glory in living lies not in never falling, but rising every time we fall.',
		'Nelson Mandela',
		['Thomas Edison', 'Mario Andretti', 'Nelson Mandela', 'Winston Churchill']
	);
	let question10 = new Question(
		'The future belongs to those who believe in the beauty of their dreams.',
		'Eleanor Roosevelt',
		['Winston Churchill', 'Eleanor Roosevelt', 'Will Smith', 'Warren Buffett']
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
const container = document.getElementById('tunde-container');
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

// const previousButton = document.getElementById('previous-btn');
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

// previousButton.addEventListener('click', function () {
// 	if (count > 1) {
// 		count = count - 1;
// 		mainQuiz();
// 	}
// });

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

// previousBtn.addEventListener("click", function () {
//   count = 1;
//   mainQuiz();
//   previousButton.innerHTML = "Back";
// });

// ******************************  TABLE  ******************************

const tableTitles = ['Quote', 'Answer', 'Check'];

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
