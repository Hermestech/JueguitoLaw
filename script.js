const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
('answer-buttons')

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document. createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: '¿Los no ciudadanos tienen que mostrar documentos migratorios si un policía se los pide?',
        answers: [
            { text: 'No', correct: true},
            { text: 'Sí', correct: false},
        ]
    },

    {
        question: 'Si un policía toca a tu puerta ¿Qué deberías hacer?',
        answers: [
            { text: 'Abrir la puerta y pedir un abogado', correct: false},
            { text: ' Pedir que se muestre una orden judicial', correct: true},
        ]
    },

    {
        question: '¿Qué artículo de la constitución garantiza tu libertad de tránsito?',
        answers: [
            { text: 'Art. 3', correct: false},
            { text: 'Art. 27', correct: false},
            { text: 'Art. 11', correct: true},
            { text: 'Art. 4', correct: false}

        ]
    },

    {
        question: '¿Qué artículo de la constitución garantiza tu libertad de expresión?',
        answers: [
            { text: 'Art. 3', correct: false},
            { text: 'Art. 27', correct: false},
            { text: 'Art. 11', correct: false},
            { text: 'Art. 6', correct: true}

        ]
    },

    {
        question: '¿Qué artículo de la constitución garantiza tu libertad de reunión ?',
        answers: [
            { text: 'Art. 3', correct: false},
            { text: 'Art. 9', correct: false},
            { text: 'Art. 11', correct: true},
            { text: 'Art. 6', correct: false}

        ]
    },

    {
        question: '¿Qué autoridad puede ordenar que seas arrestado?',
        answers: [
            { text: 'Presidente municipal', correct: false},
            { text: 'Diputado local', correct: false},
            { text: 'Comandante de la policía', correct: false},
            { text: 'Juez', correct: true}

        ]
    },





]