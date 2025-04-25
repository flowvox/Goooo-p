let moon = document.getElementById("moon")
let text = document.getElementById("text")
let train = document.getElementById("train")
let d_moon = document.getElementById("d-moon")
let man = document.getElementById("man")

let answers = [];    // will hold user answers


window.addEventListener("scroll" ,()=>{
    let value = window.scrollY;
    moon.style.top = value * 1.1 + "px";
    moon.style.left = value * 1.6 + "px";
    text.style.top = 80 + value * -0.2 +"%";
    train.style.left = value *3 +"px";
    d_moon.style.left = value * 16 + "px";
    d_moon.style.left=0+value*0.2 +"px";
    man.style.right =-value*0.4+"px";

}
);

// Reccomendation system logic

const questions = [
{
    question:"Who are you going with?",
    answers:[
        {text: "Solo", value: "solo"},
        {text: "Family", value: "couple"},
        {text: "Group", value: "group"},
    ]
},
{
    question:"Which region would you like to visit?",
    answers:[
        {text: "Beaches (Kovalam, Varkala, Marari, Bekal, Cherai)", value: "beach"},
        {text: "Hill Stations (Munnar, Thekkady, Wayanad, Vagamon)", value: "hill"},
        {text: "Backwaters (Alleppey, Kumarakom, Kottayam, Kuttanad)", value: "backwater"},
    ]
},
{
    question:"What’s your budget per person, per day?",
    answers:[
        {text: "Budget (up to ₹3 000)", value: "low"},
        {text: "Moderate (₹3 000–7 000)", value: "medium"},
        {text: "Luxury (above ₹7 000)", value: "high"},
    ]
},
{
    question:"How many days will you stay?",
    answers:[
        {text: "Short (2–3 days)", value: "three"},
        {text: "Medium (4–6 days)", value: "six"},
        {text: "Long (7+ days)", value: "seven"},
    ]
},
]

const questionContainer = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")


let currentQuestionIndex = 0;


function startSystem(){
    currentQuestionIndex = 0;
    

    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let curerntQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionContainer.innerHTML = questionNo + ". " + curerntQuestion.question;

    curerntQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("a-btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButtons.appendChild(button);
        if(answer.value){
            button.dataset.value = answer.value;
        }
        
    })
}
nextButton.addEventListener("click", () => {
    // move to next or finish
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      // all done → run recommendation
      runRecommendation();
    }
  });
  

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(answer){
    answers[currentQuestionIndex] = answer.value;
    const selectedButton = document.querySelector(`button[data-value="${answer.value}"]`);
    selectedButton.classList.add("selected");
    const selectedValue = selectedButton.dataset.value;
    Array.from(answerButtons.children).forEach(button => {
        if(button !== selectedButton){
            button.disabled=true;
        }
    });
    nextButton.style.display = "block";
   
}
function runRecommendation() {
    const [tripType, region, budget, duration] = answers;
  
    const output = recommendWasm(region, budget, duration, tripType);
    const lines = output.trim().split('\n');
  
    document.getElementById("quiz-container").style.display = "none";
    renderCards(lines);
    document.getElementById("results").style.display = "flex";

  }

// render cards in the results div
  function renderCards(lines) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";       // clear old
  
    lines.forEach(line => {
      const [title, desc] = line.split('|');
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${title}</h3>
        <p>${desc}</p>
      `;
      resultsDiv.appendChild(card);
    });
  }
    


startSystem();
