const quizData = [

{
    question: 'what is CSS?',
    a: 'Cascade Styling Subject',
    b: 'Cascade Style Sheet',
    c: 'Casandra Style Sheet',
    d: 'Cascading Style Sheet',
    correct: 'd',

},

{
    question: 'what is HTML?',
    a: 'Hyper Text Markup Language',
    b: 'Hyper Texture Marking Language',
    c: 'High Level Language',
    d: 'Higher Markus Language',
    correct: 'a',

},

{
    question: 'who is PrimeMinister of India?',
    a: 'Ram Nath Kovind',
    b: 'Narendra Modi',
    c: 'Smriti Irani',
    d: 'Amit shah',
    correct: 'b',

},

{
    question: 'What is the most used Programming Language?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'Javascript',
    correct: 'd',

},

{
    question: 'When was Javascript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'None of the above',
    correct: 'b',

}

];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById("question");


const a_text= document.getElementById("a_text");
const b_text= document.getElementById("b_text");
const c_text= document.getElementById("c_text");
const d_text= document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz(){
    deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

    // currentQuiz++;
}

function getSelected(){
    
    let answer = undefined;
    // console.log(answer);
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
   return answer;
}


function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //check to see the answer
   const answer = getSelected();
 
  if(answer) {
      if(answer === quizData[currentQuiz].correct){
          score++;
      }

    currentQuiz++;

      if(currentQuiz < quizData.length){
           loadQuiz();
        }else{
           quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2><button onclick = "location.reload()">Reaload</button>`
        }
   }

});