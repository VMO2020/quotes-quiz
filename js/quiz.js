'use strict';
console.log('quiz.js is working!');

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
		' If you can not explain it to a six year old, you do not understand it yourself.',
		'Albert Einstein',
		['Albert Einstein', 'Abraham Lincoln', 'Bruce Lee', 'Elon Musk']
	);
	let question2 = new Question(
		'The best way to predict your future is to create it.',
		'Abraham Lincoln',
		['Albert Einstein', 'Abraham Lincoln', 'Bruce Lee', 'Elon Musk']
	);
	let question3 = new Question(
		'Persistence is very important. You should not give up unless you are forced to give up.',
		'Elon Musk',
		['Albert Einstein', 'Jimi Hendrix', 'Elon Musk', 'Muhammad Ali']
	);
	let question4 = new Question('I never thought of losing.', 'Muhammad Ali', [
		'Albert Einstein',
		'Elon Musk',
		'Muhammad Ali',
		'Jimi Hendrix',
	]);
	let question5 = new Question(
		'Your time is limited, so don’t waste it living someone else’s life.',
		'Steve Jobs',
		['Steve Jobs', 'Elon Musk', 'Muhammad Ali', 'Jimi Hendrix']
	);
	let question6 = new Question(
		'I have not failed, I have just found 10.000 ways that will not work. 1% Inspiration and 99% Persistence.',
		'Thomas Edison',
		['Muhammad Ali', 'Steve Jobs', 'Elon Musk', 'Thomas Edison']
	);
	let question7 = new Question(
		'I want the world to be better because I was here.',
		'Will Smith',
		['Muhammad Ali', 'Steve Jobs', 'Will Smith', 'Thomas Edison']
	);
	let question8 = new Question(
		'Never, never, never give up.',
		'Winston Churchill',
		['Muhammad Ali', 'Steve Jobs', 'Will Smith', 'Winston Churchill']
	);
	let question9 = new Question(
		'If everything is under control, you are going too slow!.',
		'Mario Andretti',
		['Thomas Edison', 'Mario Andretti', 'Will Smith', 'Winston Churchill']
	);
	let question10 = new Question(
		'History is written by the victors.',
		'Winston Churchill',
		['Winston Churchill', 'Steve Jobs', 'Will Smith', 'Warren Buffett']
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

const table = document.getElementById('results-table');
const tableHeadTitle = document.getElementById('table-head');

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
			console.log(answers);
			console.log(answersCheck);
			console.log(total);
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
});

// ******************************  TABLE  ******************************

const tableTitles = ['Quote', 'Answer', 'Check', 'Points'];

function tableHead() {
	for (let i = 0; i < tableTitles.length; i++) {
		const title = document.createElement('th');
		title.textContent = tableTitles[i];
		tableHeadTitle.appendChild(title);
	}
}
