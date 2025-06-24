const startPage = document.getElementById('start'); // Стартовая страница
const startButton = document.getElementById('start-button'); // Кнопка "Начать"
const restartButton = document.getElementById('restart-button'); // Кнопка "Перезапустить тест"
const checkButtons = document.querySelectorAll('.answer__check'); // Кнопки проверки правильности открытых вопросов

const questions = document.querySelectorAll('.question'); // Секция вопроса с ответами или полем ввода
const result = document.getElementById('result'); // Страница результатов
const namePage = document.getElementById('name-page'); // Заголовок стартовой страницы
const correctCount = document.getElementById('correct-count'); // Количество правильных ответов пользователя

const question1 = document.getElementById('question1'); // Номер вопроса
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const question4 = document.getElementById('question4');
const question5 = document.getElementById('question5');
const question6 = document.getElementById('question6');
const question7 = document.getElementById('question7');
const question8 = document.getElementById('question8');
const question9 = document.getElementById('question9');
const question10 = document.getElementById('question10');

let correctAnswersCount = 0; // Переменная, отвечающая за подсчет правильных ответов пользователя
const correctAnswers = { // Правильные ответы на открытые вопросы
  userAnswer8: "===",
  userAnswer9: "join",
  userAnswer10: "undefined"
};

startButton.addEventListener('click', () => { // Обработчик кнопки "Начать"
  startPage.classList.add('hidden'); // Скрытие стартовой страницы
  question1.classList.remove('hidden'); // Показ первого вопроса
  correctAnswersCount = 0; // Обнуление правильных ответов
});

restartButton.addEventListener('click', () => { // Обработчик кнопки "Перезапустить"
  result.classList.add('hidden'); // Скрытие страницы с результатами
  namePage.classList.remove('hidden'); // Показ заголовка
  location.reload(); // Перезагрузка страницы (Добавлена для обнуления примененных стилей к выбранным ответам)
  startPage.classList.remove('hidden'); // Показ стартовой страницы
  correctAnswersCount = 0; // Обнуление правильных ответов
})

questions.forEach((question, index) => { // Цикл, проходящий по всем вопросам
  const answer = question.querySelectorAll('.question__item'); // Вариант ответа или кнопка проверки ввода

  answer.forEach(button => { // Цикл для каждого варианта ответа
    button.addEventListener('click', function() { // При нажатии на вариант ответа ...
      if (this.classList.contains('question__item--true')) { // Если ответ правильный, то ...
        this.style.backgroundColor = 'var(--color-green)'; // Изменение цвета фона на зеленый
        correctAnswersCount++; // Увеличение количества правильных ответов пользователя
      } else { // Если ответ неправильный, то ...
        this.style.backgroundColor = 'var(--color-red)'; // Изменение цвета фона на красный
      }

      if (this.classList.contains('answer__check')) { // Проверка для кнопок правильности открытых вопросов
        this.style.backgroundColor = 'var(--color-yellow)'; // Изменение цвета фона на желтый при нажатии на кнопку
      }

      setTimeout(() => { // Ожидание переключения вопроса
        question.classList.add('hidden'); // Скрытие вопроса
        if (index < questions.length - 1) { // Проход по всем вопросам
          questions[index + 1].classList.remove('hidden'); // Показ следующего вопроса
        }
        else { // Когда вопросы закончились ...
          correctCount.textContent = correctAnswersCount; // Обновление на странице количества правильных ответов
          result.classList.remove('hidden'); // Показ страницы с результатами
          namePage.classList.add('hidden'); // Скрытие заголовка
        }
      }, 1000);
    });
  });
});

checkButtons.forEach(button => { // Обработчик кнопок проверки открытых вопросов
  button.addEventListener('click', () => { // Для каждой кнопки ...
    const inputElement = button.previousElementSibling; // Поле ввода (previousElementSibling - предыдущий элемент на том же уровне дерева)
    const inputId = inputElement.id; // ID поле ввода
    const userAnswer = inputElement.value.trim().toLowerCase(); // Преобразование строки в нижний регистр
    const correctAnswer = correctAnswers[inputId]; // Связь между номером вопроса и ответа

    if (userAnswer === correctAnswer) { // Если ответ пользователя правильный, то ...
      inputElement.style.backgroundColor = 'var(--color-green)'; // Изменение цвета фона поля ввода на зеленый
      correctAnswersCount++; // Увеличение количества правильных ответов пользователя
    } else { // Если ответ пользователя неправильный, то ...
      inputElement.style.backgroundColor = 'var(--color-red)'; // Изменение цвета фона поля ввода на красный
    }
  });
});
