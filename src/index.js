var questions = [
  {
    picture: `<img class="question-image" src="src/pictures/regnum1.jpeg"/>`,
    topic: "При каком князе было принято христианство на Руси?",
    answers: [
      {
        text: "Святослав",
        points: 0
      },
      {
        text: "Игорь",
        points: 0
      },
      {
        text: "Владимир",
        points: 1
      },
      {
        text: "Рюрик",
        points: 0
      }
    ]
  },
  {
    picture: `<img class="question-image" src="src/pictures/igo.jpg"/>`,
    topic: "С каким сражением связывают окончание татаро-монгольского ига?",
    answers: [
      {
        text: "Куликовская битва",
        points: 0
      },
      {
        text: "Стояние на р. Угре",
        points: 1
      },
      {
        text: "Ледовое побоище",
        points: 0
      },
      {
        text: "Битва на Калке",
        points: 0
      }
    ]
  },
  {
    picture: `<img class="question-image" src="src/pictures/uglich.jpg"/>`,
    topic: "Имя царевича, убитого в 1591 г. в г. Угличе?",
    answers: [
      {
        text: "Федор",
        points: 0
      },
      {
        text: "Иван",
        points: 0
      },
      {
        text: "Дмитрий",
        points: 1
      },
      {
        text: "Петр",
        points: 0
      }
    ]
  },
  {
    picture: `<img class="question-image" src="src/pictures/crimea.jpg"/>`,
    topic: "Присоединение Крыма к России произошло при?",
    answers: [
      {
        text: "Петре I",
        points: 0
      },
      {
        text: "Анне Иоановне",
        points: 0
      },
      {
        text: "Екатерине II",
        points: 1
      },
      {
        text: "Александре II",
        points: 0
      }
    ]
  },
  {
    picture: `<img class="question-image" src="src/pictures/meshane.jpg"/>`,
    topic: "К сословию мещан не относились ...",
    answers: [
      {
        text: "Ремесленнки",
        points: 0
      },
      {
        text: "Работные люди",
        points: 0
      },
      {
        text: "Казаки",
        points: 1
      },
      {
        text: "Мелкие торговцы",
        points: 0
      }
    ]
  },
  {
    picture: `<img class="question-image" src="src/pictures/krepostnie.jpg"/>`,
    topic: "В каком году было отменено крепостное право в России?",
    answers: [
      {
        text: "1789 г.",
        points: 0
      },
      {
        text: "1861 г.",
        points: 1
      },
      {
        text: "1901 г.",
        points: 0
      },
      {
        text: "1854 г.",
        points: 0
      }
    ]
  },
  {
    picture: `<img class="question-image" src="src/pictures/voina.jpg"/>`,
    topic: "Какая битва Великой Отечественной войны была раньше остальных?",
    answers: [
      {
        text: "Курская битва",
        points: 0
      },
      {
        text: "Сталининградская битва",
        points: 0
      },
      {
        text: "Битва за Москву",
        points: 1
      },
      {
        text: "Битва за Кавказ",
        points: 0
      }
    ]
  },

  {
    picture: `<img class="question-image" src="src/pictures/partizan.jpg"/>`,
    topic:
      "Роман Александра Фадеева, названный по имени молодежной подпольной организации?",
    answers: [
      {
        text: "Юные подпольщики",
        points: 0
      },
      {
        text: "Молодая гвардия",
        points: 1
      },
      {
        text: "Молодые герои",
        points: 0
      },
      {
        text: "Юные мстители",
        points: 0
      }
    ]
  },

  {
    picture: `<img class="question-image" src="src/pictures/perestroika.jpg"/>`,
    topic: "В  СССР перестройка  проходила  по  инициативе… ",
    answers: [
      {
        text: "Н.С.  Хрущева",
        points: 0
      },
      {
        text: "М.С.Горбачева",
        points: 1
      },
      {
        text: "Л.И.Брежнева",
        points: 0
      },
      {
        text: "Ю.В.Андропова",
        points: 0
      }
    ]
  },

  {
    picture: `<img class="question-image" src="src/pictures/constitution.jpeg"/>`,
    topic: "Конституция РФ принята 12 декабря 1993 г.... ",
    answers: [
      {
        text: "Президентом РФ",
        points: 0
      },
      {
        text: "Верховным Советом РФ",
        points: 0
      },
      {
        text: "Советом Федерации РФ",
        points: 0
      },
      {
        text: "Всенародным голосованием",
        points: 1
      }
    ]
  }
];

var myPoints = 0;
var currentIndex = 0;
var myTest = document.getElementById("test");
var currentQuestion = questions[currentIndex];

startGame();

function startGame() {
  myPoints = 0;
  currentIndex = 0;
  askQuestion();
}

function save(value) {
  //Суммируем очки
  myPoints = myPoints + value;

  //Если добрались до последнего вопроса - выводим result.
  //Дальше не идем
  if (currentIndex === questions.length - 1) {
    showResult();
    return;
  }

  //Переходим на новый вопрос и показываем его.
  currentIndex = currentIndex + 1;
  askQuestion();
}

function askQuestion() {
  currentQuestion = questions[currentIndex];
  if (myTest && currentQuestion) {
    myTest.innerHTML = `
    <h1 class="title" style ="display: block"> Хорошо ли вы знаете историю России?
      <br />
      Давайте проверим!</h1>
    ${currentQuestion.picture}

      <h2 class="title2">${currentQuestion.topic}</h2>
      <button class="button1" onclick="save(${currentQuestion.answers[0].points})"> 
        ${currentQuestion.answers[0].text}
      </button>
      <button class="button2"onclick="save(${currentQuestion.answers[1].points})"> 
        ${currentQuestion.answers[1].text}
      </button> <br />
      <button class="button3" onclick="save(${currentQuestion.answers[2].points})"> 
        ${currentQuestion.answers[2].text}
      </button>
      <button class="button4"  onclick="save(${currentQuestion.answers[3].points})">
        ${currentQuestion.answers[3].text}
      </button>
    `;
  }
}

function showResult() {
  var pictureUrl = "";
  var text = "";
  switch (true) {
    case myPoints <= 3:
      pictureUrl = `<img class="end-image" src="src/pictures/2.jpg"/>`;
      text =
        "<span class='final-result'>Все очень плохо.</span></br>Похоже вы саботировали школьную программу. Рекомендуем расширить кругозор, чтобы не попасть в неприятную ситуацию. ";
      break;
    case myPoints >= 4 && myPoints <= 5:
      pictureUrl = `<img class="end-image" src="src/pictures/3.jpg"/>`;
      text =
        "<span class='final-result'>История России - не ваш конёк.</span></br>Чтобы не ударить в грязь лицом, возможно, стоит уделить ей больше внимания.";
      break;
    case myPoints >= 6 && myPoints <= 8:
      pictureUrl = `<img class="end-image" src="src/pictures/4.jpg"/>`;
      text =
        "<span class='final-result'>Вы - молодец!</span></br>Вас не поймать на многих вопросах, но кое-что необходимо повторить.";
      break;
    default:
      pictureUrl = `<img class="end-image" src="src/pictures/5.jpg"/>`;
      text =
        "<span class='final-result'>Вы профи российской истории!</span></br>Мы в восхищении! Так держать! ";
      break;
  }
  myTest.innerHTML = `
  <h1 class="title" style ="display: none"> Хорошо ли вы знаете историю России?
      <br />
      Давайте проверим!</h1>
     ${pictureUrl}
      
    <div class="chek">Ваш результат: ${myPoints} 
      ${num_word(myPoints, ["балл", "балла", "баллов"])}
    </div>

    <div class="result">${text}</div>

    <button class="button5" onclick="startGame()">
      Начать сначала
    </button>
  `;
}
// Функция первого экрана
function first() {
  myPoints = 0;
  currentIndex = 0;
}

myTest.innerHTML = `<img class="result-image" src="src/pictures/main1.jpg"/>
  <h1 class="title" style ="display: block"> Хорошо ли вы знаете историю России?
      <br />
      Давайте проверим!</h1>
      <button class="button5" onclick="startGame()">
      Начать тест
    </button>
  `;

first();

//Функция подбора окончения числительных
function num_word(value, words) {
  value = Math.abs(value) % 100;
  var num = value % 10;
  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num == 1) return words[0];
  return words[2];
}
