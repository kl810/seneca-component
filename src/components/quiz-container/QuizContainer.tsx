import './QuizContainer.css';
import ToggleInput from '../toggle-input/ToggleInput';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function QuizContainer() {
    const { question, answerOptions, isComplete } = useSelector((state: RootState) => state.quiz)

    return (
        <div className="quiz-wrapper">
            <div className="quiz-content">
                <h4 className="question">{question}:</h4>
                {answerOptions.map(({id, options}, index) => 
                    <ToggleInput 
                        key={`${options}-${index}`} 
                        id={id}
                        options={options}
                        isComplete={isComplete}
                    />)
                } 
                <p className="answer-statement">The answer is {isComplete ? "correct!" : "incorrect"}</p>
            </div>
        </div>
    )
}
