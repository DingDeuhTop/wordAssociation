const scoreDisplay = document.getElementById("score-display");
const questionDisplay = document.getElementById("question-display");

const questions = [
  {
    quiz: ["value", "estimate", "evaluate"],
    options: ["jury", "assess"],
    correct: 1,
  },
  {
    quiz: ["close", "near", "next"],
    options: ["trace", "adjacent"],
    correct: 1,
  },
  {
    quiz: ["foreign", "nation", "ethnic"],
    options: ["mad", "exotic"],
    correct: 1,
  },
  {
    quiz: ["assume", "insight", "weather"],
    options: ["forecast", "sustainable"],
    correct: 1,
  },
  {
    quiz: ["fast", "quick", "prompt"],
    options: ["charity", "rapid"],
    correct: 1,
  },
  {
    quiz: ["vlaue", "estimate", "evaluate"],
    options: ["jury", "assess"],
    correct: 1,
  },
];

let score = 0;
scoreDisplay.textContent = score;

let clicked = [];

populationQuestions();

function populationQuestions() {
  questions.forEach((question) => {
    const questionBox = document.createElement("div");
    questionBox.classList.add("question-box");

    question.quiz.forEach((quiz) => {
      const quizText = document.createElement("p");
      quizText.textContent = quiz;
      questionBox.append(quizText);
    });

    const questionButtons = document.createElement("div");
    questionButtons.classList.add("question-buttons");
    questionBox.append(questionButtons);

    question.options.forEach((option, optionIndex) => {
      const questionButton = document.createElement("button");
      questionButton.classList.add("question-button");
      questionButton.textContent = option;
      questionButton.addEventListener("click", () =>
        checkAnswer(questionButton, option, optionIndex, question.correct)
      );

      questionButtons.append(questionButton);
    });

    const answerDisplay = document.createElement("div");
    answerDisplay.classList.add("answer-display");

    questionBox.append(answerDisplay);

    questionDisplay.append(questionBox);
  });
}

function checkAnswer(questionButton, option, optionIndex, correctAnswer) {
  if (optionIndex === correctAnswer) {
    score++;
    scoreDisplay.textContent = score;
  } else {
    score--;
    scoreDisplay.textContent = score;
  }
  clicked.push(option);
  questionButton.disabled = clicked.includes(option);
}
