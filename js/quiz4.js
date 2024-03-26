'use strict';
console.log('quiz4.js is working!');

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
		'If you dont like something change it,if you cant change it change your attitude. Do not complain',
		'Maya Angelou',
		['Albert Einstein', 'Maya Angelou', 'Bruce Lee', 'Elon Musk']
	);
	let question2 = new Question(
		'We cannot change anything until we accept it',
		'Carl Jung',
		['Albert Einstein', 'Carl Jung', 'Bruce Lee', 'Elon Musk']
	);
	let question3 = new Question(
		'It always seems impossible until its done.',
		'Nelson Mandela',
		['Albert Einstein', 'Jimi Hendrix', 'Elon Musk', 'Nelson Mandela']
	);
	let question4 = new Question(
		'I never lose. I either win or I learn.',
		'Nelson Mandela',
		['Maurice Switzer ', 'Nelson Mandela', 'Elon Musk', 'Muhammad Ali']
	);
	let question5 = new Question(
		'Knowing yourself is the beginning of all wisdom.',
		'Aristotle',
		['Steve Jobs', 'Elon Musk', 'Muhammad Ali', 'Aristotle']
	);
	let question6 = new Question(
		'Count your age by friends, not years. Count your life by smiles not tears.',
		'John Lennon',
		['Muhammad Ali', 'Steve Jobs', 'John Lennon', 'Thomas Edison']
	);
	let question7 = new Question(
		'It is the mark of an educated mind to be able to entertain a thought without having to accept it.',
		'Aristotle',
		['Muhammad Ali', 'Steve Jobs', 'Aristotle', 'Thomas Edison']
	);
	let question8 = new Question(
		'The secret to life is to fall seven times and get up eight times.',
		'Paul Coelho',
		['Muhammad Ali', 'Paul Coelho', 'Steve Jobs', 'Winston Churchill']
	);
	let question9 = new Question(
		'The things that have been most valuable to me I did not learn in school.',
		'Will Smith',
		['Thomas Edison', 'Mario Andretti', 'Will Smith', 'Winston Churchill']
	);
	let question10 = new Question(
		'The only true wisdom is knowing you know nothing.',
		'Socrates',
		['Socrates', 'Winston Churchill', 'Steve Jobs', 'Warren Buffett']
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
