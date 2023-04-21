'use strict';
console.log('quiz.js is working!');

// *************************************** Questions ***************************************

let questions = [];

// Constructor
const Question = function (quote, author, authors) {
	this.quote = quote;
	this.author = author;
	this.authors = [];
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
	console.log(questions);
}

// **************************************** Initialize ****************************************
generateQuestions();

// ******************************************** DOM ********************************************
// Selectors
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

const formValue = document.getElementById('form');

// Test
number.innerHTML = '2';
quote.innerHTML = 'New quote';
submitButton.innerHTML = 'Submit';

answer1Label.innerHTML = 'Author Tunde';
answer1.setAttribute('value', 'Tunde');

answer2Label.innerHTML = 'Author Victor';
answer2.setAttribute('value', 'author Victor');

answer3Label.innerHTML = 'Winston Churchill';
answer3.setAttribute('value', 'Winston Churchill');

answer4Label.innerHTML = 'Author 4..';
answer4.setAttribute('value', 'author4');

// Quiz function
formValue.addEventListener('submit', function (event) {
	event.preventDefault(); // Stop refresh page`
	const name = event.target.author.value;
	// const name2 = event.target.author;
	console.log(name);
});
