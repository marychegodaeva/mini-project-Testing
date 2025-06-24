const startPage = document.getElementById('start');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const checkButtons = document.querySelectorAll('.answer__check');

const questions = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.question__item');
const result = document.getElementById('result');
const namePage = document.getElementById('name-page');
const correctCount = document.getElementById('correct-count');

const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const question4 = document.getElementById('question4');
const question5 = document.getElementById('question5');
const question6 = document.getElementById('question6');
const question7 = document.getElementById('question7');
const question8 = document.getElementById('question8');
const question9 = document.getElementById('question9');
const question10 = document.getElementById('question10');

let correctAnswersCount = 0;
const correctAnswers = {
  userAnswer8: "===",
  userAnswer9: "join",
  userAnswer10: "undefined"
};

startButton.addEventListener('click', () => {
  startPage.classList.add('hidden');
  question1.classList.remove('hidden');
  correctAnswersCount = 0;
});

restartButton.addEventListener('click', () => {
  result.classList.add('hidden');
  namePage.classList.remove('hidden');
  location.reload();
  startPage.classList.remove('hidden');
  correctAnswersCount = 0;
})

questions.forEach((question, index) => {
  const answer = question.querySelectorAll('.question__item');

  answer.forEach(button => {
    button.addEventListener('click', function() {
      if (this.classList.contains('question__item--true')) {
        this.style.backgroundColor = 'var(--color-green)';
        correctAnswersCount++;
      } else {
        this.style.backgroundColor = 'var(--color-red)';
      }

      if (this.classList.contains('answer__check')) {
        this.style.backgroundColor = 'var(--color-yellow)';
      }

      setTimeout(() => {
        question.classList.add('hidden');
        if (index < questions.length - 1) {
          questions[index + 1].classList.remove('hidden');
        }
        else {
          correctCount.textContent = correctAnswersCount;
          result.classList.remove('hidden');
          namePage.classList.add('hidden');
        }
      }, 1000);
    });
  });
});

checkButtons.forEach(button => {
  button.addEventListener('click', () => {
    const inputElement = button.previousElementSibling; 
    const inputId = inputElement.id;
    const userAnswer = inputElement.value.trim();
    const correctAnswer = correctAnswers[inputId];

    if (userAnswer === correctAnswer) {
      inputElement.style.backgroundColor = 'var(--color-green)';
      correctAnswersCount++;
    } else {
      inputElement.style.backgroundColor = 'var(--color-red)';
    }
  });
});
