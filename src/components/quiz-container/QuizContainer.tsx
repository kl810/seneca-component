import './QuizContainer.css';
import ToggleInput from '../toggle-input/ToggleInput';

export default function QuizContainer() {
    return (
        <div className="quiz-wrapper">
            <div className="quiz-content">
                <h4 className="question-heading">An animal cell contains:</h4>
                <ToggleInput options={["Cell Wall", "Ribosomes"]}/>
                <ToggleInput options={["Cytoplasm", "Choloplast"]}/>
                <ToggleInput options={["Cell Wall", "Ribosomes"]}/>
                <ToggleInput options={["Cellulose", "Mitochondria"]}/>
                <p className="answer-statement">The answer is incorrect</p>
            </div>
        </div>
    )
}
