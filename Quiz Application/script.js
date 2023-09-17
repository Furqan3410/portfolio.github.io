const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const nextButton = document.querySelector('button');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: 'What is the capital of France?',
    choices: ['Paris', 'Berlin', 'London', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    question: 'Which planet is closest to the sun?',
    choices: ['Venus', 'Mars', 'Mercury', 'Jupiter'],
    correctAnswer: 'Mercury'
  },
  {
    question: 'Who painted the Mona Lisa?',
    choices: ['Pablo Picasso', 'Leonardo da Vinci', 'Vincent van Gogh', 'Michelangelo'],
    correctAnswer: 'Leonardo da Vinci'
  },
  {
    question: 'Who discover America?',
    choices: ['vasco de gama', 'Willem Janszoon', 'Columbus', 'M. Bin Qasim'],
    correctAnswer: 'Columbus'
  },
];

function displayQuestion() {
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;
  choicesElement.innerHTML = '';

  question.choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.addEventListener('click', () => checkAnswer(choice));
    choicesElement.appendChild(button);
  });
}

function checkAnswer(choice) {
  const question = questions[currentQuestionIndex];
  if (choice === question.correctAnswer) {
    score++;
  }
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.textContent = 'Quiz completed!';
  choicesElement.innerHTML = '';
  nextButton.style.display = 'none';
  scoreElement.textContent = `Your Score: ${score} / ${questions.length}`;
}

nextButton.addEventListener('click', displayQuestion);

displayQuestion();
