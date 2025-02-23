import './QuizContainer.css';
import ToggleInput from '../toggle-input/ToggleInput';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function QuizContainer() {
    const { question, answerOptions } = useSelector((state: RootState) => state.quiz)

    return (
        <div className="quiz-wrapper">
            <div className="quiz-content">
                <h4 className="question">{question}:</h4>
                {answerOptions.map(({options, selectedAnswer, correctAnswer}, index) => 
                    <ToggleInput 
                        key={`${correctAnswer}-${index}`} 
                        options={options} 
                        selected={selectedAnswer} 
                        answer={correctAnswer}
                    />)
                } 
                <p className="answer-statement">The answer is incorrect</p>
            </div>
        </div>
    )
}
