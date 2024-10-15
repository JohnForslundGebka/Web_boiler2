
const quizData = [
    {
      question: "Vad är huvudstaden i Sverige?",
      options: ["Stockholm", "Göteborg", "Malmö", "Uppsala"],
      clues: ["Ligger vid en stor skärgård", "Gamla Stan är en sevärdhet", "Kallas Nordens Venedig", "Här ligger kungliga slottet"],
      answer: "Stockholm"
    },
    {
      question: "Vilket är världens största hav?",
      options: ["Atlanten", "Indiska oceanen", "Stilla havet", "Arktiska oceanen"],
      clues: ["Täcker ungefär en tredjedel av jordens yta", "Är beläget mellan Asien och Amerika", "Det är världens djupaste hav", "Är hem till Marianergraven"],
      answer: "Stilla havet"
    },
    {
      question: "Vilket djur är världens snabbaste på land?",
      options: ["Lejon", "Gepard", "Antilop", "Varg"],
      clues: ["Kan springa upp till 120 km/h", "Är ett stort kattdjur", "Lever på savanner i Afrika", "Har svarta tårar under ögonen som hjälper mot bländning"],
      answer: "Gepard"
    },
    {
      question: "Vilken är den största planeten i solsystemet?",
      options: ["Jorden", "Mars", "Saturnus", "Jupiter"],
      clues: ["Den har en stor röd fläck", "Det är den femte planeten från solen", "Den har många månar, inklusive Ganymedes", "Den består mestadels av gas"],
      answer: "Jupiter"
    },
    {
      question: "Vad heter världens högsta berg?",
      options: ["Kilimanjaro", "Mount Everest", "K2", "Mont Blanc"],
      clues: ["Ligger i Himalaya", "Bestegs först 1953 av Edmund Hillary", "Är över 8 848 meter högt", "Kallas också Sagarmatha i Nepal"],
      answer: "Mount Everest"
    },
    {
      question: "Vilken metall leder elektricitet bäst?",
      options: ["Koppar", "Silver", "Guld", "Aluminium"],
      clues: ["Det är en ädelmetall", "Används ofta i smycken", "Har den högsta elektriska ledningsförmågan", "Dyr och sällsynt"],
      answer: "Silver"
    },
    {
      question: "Vad heter den största sjön i Sverige?",
      options: ["Vänern", "Vättern", "Mälaren", "Hjälmaren"],
      clues: ["Ligger i Västergötland och Dalsland", "Det är Europas tredje största insjö", "Har över 22 000 öar och skär", "Tillhör Göta älv-systemet"],
      answer: "Vänern"
    },
    {
      question: "Vilket år startade andra världskriget?",
      options: ["1937", "1939", "1941", "1945"],
      clues: ["Det började med invasionen av Polen", "Adolf Hitler var en av huvudaktörerna", "Storbritannien och Frankrike förklarade krig mot Tyskland kort därefter", "Kriget pågick i sex år"],
      answer: "1939"
    },
    {
      question: "Vilket land är känt för sin känguru?",
      options: ["Australien", "Kanada", "Sydafrika", "Argentina"],
      clues: ["Landet är en kontinent", "Stora barriärrevet ligger här", "Känd för sin Outback och Ayers Rock", "Hem för koalor och dingos"],
      answer: "Australien"
    },
    {
      question: "Vilket språk talas i Brasilien?",
      options: ["Spanska", "Portugisiska", "Franska", "Italienska"],
      clues: ["Detta språk talas i Portugal", "Det är det största landet i Sydamerika", "Fotbollslegender som Pelé och Neymar kommer härifrån", "Detta land är värd för karnevalen i Rio"],
      answer: "Portugisiska"
    },
];

class Quiz {
    constructor(quizData){
        this.quizData = quizData;
        this.currentQuestion = 0;
        this.totScore = 0;
        this.clueNumber = 0;
        this.scoreForCurrentQuestion = 4;
    }

    reset(){
        this.currentQuestion = 0;
        this.totScore = 0;
        this.clueNumber = 0;
        this.scoreForCurrentQuestion = 4;
    }

     getCurrentQuestion() {
        return this.quizData[this.currentQuestion];
    }
}

function renderQuestion(quiz){

    htmlTransfer.clearElements();

    const question = quiz.getCurrentQuestion();
    htmlTransfer.questionElement.innerText = question.question;

     question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      htmlTransfer.optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
    
    totScoreElement.innerHTML = `<p>Your score: ${quiz.totScore}</p>`;
} 

class HtmlTransfer {
    constructor(){
        const quizWindowElement = document.getElementById("quiz-window");
        const questionElement = document.getElementById("question");
        const cluesElement = document.getElementById("clues");
        const optionsElement = document.getElementById("options");
        const totScoreElement = document.getElementById("totScore");
    }

    clearElements(){
    optionsElement.innerHTML = "";
    cluesElement.innerHTML = "";
    totScoreElement.innerHTML = "";
    }
}


function showQuestion() {
    if (clueNumber > 0){
        for (let i = 0; i < clueNumber; i++){
            let clueDiv = document.createElement("div");
            clueDiv.textContent = question.clues[i];
            cluesElement.appendChild(clueDiv);
        }
    }
  }

  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer || clueNumber == 4) {
      totScore += scoreForCurrentQuestion;
      currentQuestion++;
      clueNumber = 0;
      scoreForCurrentQuestion = 4;
    } else {
       clueNumber++;
       scoreForCurrentQuestion--;
    }
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    quizWindowElement.innerHTML = `
      <h1>Frågesport avklarad!</h1>
      <p>Din poäng: ${totScore} på ${quizData.length} frågor</p>
    `;
  }
  
const quiz = new Quiz(quizData);
const htmlTransfer = new HtmlTransfer;