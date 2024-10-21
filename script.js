const quizData = [
  {
    question: "Vad är huvudstaden i Sverige?",
    options: ["Stockholm", "Göteborg", "Malmö", "Uppsala"],
    clues: [
      "Ligger vid en stor skärgård",
      "Gamla Stan är en sevärdhet",
      "Kallas Nordens Venedig",
      "Här ligger kungliga slottet",
    ],
    answer: "Stockholm",
  },
  {
    question: "Vilket är världens största hav?",
    options: [
      "Atlanten",
      "Indiska oceanen",
      "Stilla havet",
      "Arktiska oceanen",
    ],
    clues: [
      "Täcker ungefär en tredjedel av jordens yta",
      "Är beläget mellan Asien och Amerika",
      "Det är världens djupaste hav",
      "Är hem till Marianergraven",
    ],
    answer: "Stilla havet",
  },
  {
    question: "Vilket djur är världens snabbaste på land?",
    options: ["Lejon", "Gepard", "Antilop", "Varg"],
    clues: [
      "Kan springa upp till 120 km/h",
      "Är ett stort kattdjur",
      "Lever på savanner i Afrika",
      "Har svarta tårar under ögonen som hjälper mot bländning",
    ],
    answer: "Gepard",
  },
  {
    question: "Vilken är den största planeten i solsystemet?",
    options: ["Jorden", "Mars", "Saturnus", "Jupiter"],
    clues: [
      "Den har en stor röd fläck",
      "Det är den femte planeten från solen",
      "Den har många månar, inklusive Ganymedes",
      "Den består mestadels av gas",
    ],
    answer: "Jupiter",
  },
  {
    question: "Vad heter världens högsta berg?",
    options: ["Kilimanjaro", "Mount Everest", "K2", "Mont Blanc"],
    clues: [
      "Ligger i Himalaya",
      "Bestegs först 1953 av Edmund Hillary",
      "Är över 8 848 meter högt",
      "Kallas också Sagarmatha i Nepal",
    ],
    answer: "Mount Everest",
  },
  {
    question: "Vilken metall leder elektricitet bäst?",
    options: ["Koppar", "Silver", "Guld", "Aluminium"],
    clues: [
      "Det är en ädelmetall",
      "Används ofta i smycken",
      "Har den högsta elektriska ledningsförmågan",
      "Dyr och sällsynt",
    ],
    answer: "Silver",
  },
  {
    question: "Vad heter den största sjön i Sverige?",
    options: ["Vänern", "Vättern", "Mälaren", "Hjälmaren"],
    clues: [
      "Ligger i Västergötland och Dalsland",
      "Det är Europas tredje största insjö",
      "Har över 22 000 öar och skär",
      "Tillhör Göta älv-systemet",
    ],
    answer: "Vänern",
  },
  {
    question: "Vilket år startade andra världskriget?",
    options: ["1937", "1939", "1941", "1945"],
    clues: [
      "Det började med invasionen av Polen",
      "Adolf Hitler var en av huvudaktörerna",
      "Storbritannien och Frankrike förklarade krig mot Tyskland kort därefter",
      "Kriget pågick i sex år",
    ],
    answer: "1939",
  },
  {
    question: "Vilket land är känt för sin känguru?",
    options: ["Australien", "Kanada", "Sydafrika", "Argentina"],
    clues: [
      "Landet är en kontinent",
      "Stora barriärrevet ligger här",
      "Känd för sin Outback och Ayers Rock",
      "Hem för koalor och dingos",
    ],
    answer: "Australien",
  },
  {
    question: "Vilket språk talas i Brasilien?",
    options: ["Spanska", "Portugisiska", "Franska", "Italienska"],
    clues: [
      "Detta språk talas i Portugal",
      "Det är det största landet i Sydamerika",
      "Fotbollslegender som Pelé och Neymar kommer härifrån",
      "Detta land är värd för karnevalen i Rio",
    ],
    answer: "Portugisiska",
  },
];
class Quiz {
  constructor(quizData) {
    this.quizData = quizData;
    this.currentQuestion = 0;
    this.totScore = 0;
    this.clueNumber = 0;
    this.scoreForCurrentQuestion = 4;
  }

  resetAllData() {
    this.currentQuestion = 0;
    this.totScore = 0;
    this.clueNumber = 0;
    this.scoreForCurrentQuestion = 4;
  }

  getCurrentQuestion() {
    return this.quizData[this.currentQuestion];
  }

  nextQuestion() {
    this.currentQuestion++;

    if (!this.isDone()) {
      this.scoreForCurrentQuestion = 4;
      this.clueNumber = 0;
    }
  }

  isDone() {
    return this.currentQuestion >= this.quizData.length;
  }
}
class HtmlTransfer {
  constructor() {
    this.quizWindowElement = document.getElementById("quiz-window");
    this.questionElement = document.getElementById("question");
    this.cluesElement = document.getElementById("clues");
    this.optionsElement = document.getElementById("options");
    this.totScoreElement = document.getElementById("totScore");
  }

  clearElements() {
    this.optionsElement.innerHTML = "";
    this.cluesElement.innerHTML = "";
    this.totScoreElement.innerHTML = "";
  }
}

function renderQuestion(quiz) {
  htmlTransfer.clearElements();
  const question = quiz.getCurrentQuestion();
  htmlTransfer.questionElement.innerText = question.question;

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    htmlTransfer.optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });

  htmlTransfer.totScoreElement.innerHTML = `<p>Din poäng: ${quiz.totScore}</p>`;
}

function renderClues(quiz) {
  const question = quiz.getCurrentQuestion();
  let clueDiv = document.createElement("div");

  clueDiv.textContent = question.clues[quiz.clueNumber - 1];
  htmlTransfer.cluesElement.appendChild(clueDiv);
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quiz.getCurrentQuestion().answer;

  // Check if the selected answer is correct or the user reached max clues
  if (selectedButton.innerText === answer || quiz.clueNumber === 4) {
    quiz.totScore += quiz.scoreForCurrentQuestion;
    quiz.nextQuestion();

    // Check if the quiz is finished
    if (quiz.isDone()) {
      showResult(); // Show result if quiz is done
    } else {
      renderQuestion(quiz); // Render the next question if quiz is not done
    }
  } else {
    quiz.clueNumber++;
    renderClues(quiz);
    quiz.scoreForCurrentQuestion--;
    if (quiz.scoreForCurrentQuestion == 0) quiz.scoreForCurrentQuestion = -2;
  }
}

function showResult() {
  htmlTransfer.clearElements();
  htmlTransfer.quizWindowElement.innerHTML = `
      <h1>Frågesport avklarad!</h1>
      <p>Din poäng: ${quiz.totScore} </p>
    `;
}

const quiz = new Quiz(quizData);
const htmlTransfer = new HtmlTransfer();
renderQuestion(quiz);
