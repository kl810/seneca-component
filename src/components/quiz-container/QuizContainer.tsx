import './QuizContainer.css';
import ToggleInput from '../toggle-input/ToggleInput';

const quizData = [
    {
        options: ["Cell Wall", "Ribosomes"],
        selectedAnswer: "",
        correctAnswer: "Ribosomes"
    },
    {
        options: ["Cytoplasm", "Chloroplast"],
        selectedAnswer: "",
        correctAnswer: "Cytoplasm"
    },
    {
        options: ["Cellulose", "Mitochondria"],
        selectedAnswer: "",
        correctAnswer: "Mitochondria"
    },
    {
        options: ["Cell Wall", "Ribosomes"],
        selectedAnswer: "",
        correctAnswer: "Ribosomes"
    },
]

export default function QuizContainer() {
    return (
        <div className="quiz-wrapper">
            <div className="quiz-content">
                <h4 className="question">An animal cell contains:</h4>
                {quizData.map(({options, selectedAnswer, correctAnswer}, index) => 
                    <ToggleInput key={`${correctAnswer}-${index}`} options={options} selected={selectedAnswer} answer={correctAnswer}/>)
                }
                <p className="answer-statement">The answer is incorrect</p>
            </div>
        </div>
    )
}
