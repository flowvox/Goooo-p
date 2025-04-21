let moon = document.getElementById("moon")
let text = document.getElementById("text")
let train = document.getElementById("train")
let d_moon = document.getElementById("d-moon")
let man = document.getElementById("man")



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
        {text: "Family", value: "family"},
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