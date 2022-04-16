const quizData = [
    {
        sual: "Basketbolda bir kamandada neçə idmançı olur?",
        a : "4",
        b : "5",
        c : "6",
        d : "3",
        correct: "b"
    },
    {
        sual: "Futbolda oyunun davam etmesi ucun bir kamandada en az neçe oyunçu qalmalidir?",
        a :"6",
        b: "7",
        c: "8",
        d: "9",
        correct: "c",
    },
    {
        sual: "Resmi oyunlarda 'Goal Line' texnologiyasi ilk defe necenci ilde istifade olunub?",
        a : "2015",
        b : "2016",
        c : "2019",
        d : "2014",
        correct: "d",
    },
    {
        sual: "Basketbolda bir kamandada neçə idmançı olur?",
        a : "4",
        b : "5",
        c : "6",
        d : "3",
        correct: "b"
    },
    {
        sual: "Futbolda oyunun davam etmesi ucun bir kamandada en az neçe oyunçu qalmalidir?",
        a :"6",
        b: "7",
        c: "8",
        d: "9",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const skipBtn = document.getElementById("skip");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    console.log(currentQuizData)
    questionEl.innerText = currentQuizData.sual;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}


function deselectAnswers() {
    
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Siz suaların ${score}/${quizData.length} düzgün cavablandırmısınız</h2>

                <button onclick="location.reload()"> Yenidən başlad</button>
            `
        }
        
    }
})

skipBtn.addEventListener("click", () => {
    const skip = deselectAnswers();
    
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Siz suaların ${score}/${quizData.length} düzgün cavablandırmısınız</h2>

                <button onclick="location.reload()"> Reload</button>
            `
        }

})

