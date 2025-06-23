const startPage = document.getElementById('start');
const startButton = document.getElementById('start-button');

const questions = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.question__item');

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

startButton.addEventListener('click', () => {
  startPage.classList.add('hidden');
  question1.classList.remove('hidden');
});

questions.forEach((question, index) => {
  const answer = question.querySelectorAll('.question__item');

  answer.forEach(button => {
    button.addEventListener('click', function() {
      if (this.classList.contains('question__item--true')) {
        this.style.backgroundColor = 'var(--color-green)';
      } else {
        this.style.backgroundColor = 'var(--color-red)';
      }

      setTimeout(() => {
        question.classList.add('hidden');
        if (index < questions.length - 1) {
          questions[index + 1].classList.remove('hidden');
        }
      }, 1000);
    });
  });
});