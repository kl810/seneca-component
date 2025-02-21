import './QuizContainer.css';
import ToggleInput from '../toggle-input/ToggleInput';

const quizData = [
    {
        id: 1,
        options: ["Cell Wall", "Ribosomes"],
        answer: "Ribosomes"
    },
    {
        id: 2,
        options: ["Cytoplasm", "Chloroplast"],
        answer: "Cytoplasm"
    },
    {
        id: 3,
        options: ["Cellulose", "Mitochondria"],
        answer: "Mitochondria"
    }
]

export default function QuizContainer() {
    return (
        <div className="quiz-wrapper">
            <div className="quiz-content">
                <h4 className="question-heading">An animal cell contains:</h4>
                {quizData.map(({id, options}) => 
                    <ToggleInput key={id} options={[options[0], options[1]]}/>)
                }
                <p className="answer-statement">The answer is incorrect</p>
            </div>
        </div>
    )
}
