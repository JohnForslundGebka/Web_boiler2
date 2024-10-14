
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Rome", "Berlin"],
      clues: ["ledtråd1","ledtråd2","ledtråd3","ledtråd4"],
      answer: "Paris"
    },
];

const questionElement = document.getElementById("question");
const cluesElement = document.getElementById("clues");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let clueNumber = 0;
let score = 0;

