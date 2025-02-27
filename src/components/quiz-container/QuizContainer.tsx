import './QuizContainer.css';
import ToggleInput from '../toggle-input/ToggleInput';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { updateCurrentQuestion } from '../../features/quiz/quizSlice';

export default function QuizContainer() {
    const { 
        question, 
        answerOptions, 
        isComplete,
        correctCount, 
        showNextButton, 
        allQuestionsCompleted
    } = useSelector((state: RootState) => state.quiz);
    const dispatch = useDispatch();
    
    const percentCorrect = parseFloat((correctCount / answerOptions.length).toFixed(2));

    const handleNextQuestionBtn = () => {dispatch(updateCurrentQuestion())};

    const buttonText = allQuestionsCompleted ? "Quiz completed!" : "Next question";

    return (
        <div className="quiz-wrapper">
            <div 
                className={"quiz-container"}
                style={{
                    background: 
                        `${ isComplete ? 
                            "linear-gradient(180deg, var(--complete-bg-primary) 0%, var(--complete-bg-secondary) 100%)" :       
                            `linear-gradient(180deg, var(--default-bg-primary) 0%,       
                                rgba(244,223,40,${percentCorrect}) 30%), 
                                var(--default-bg-secondary)`
                        }`  //change background-color based on percentageLeft 
                }}
            >
                <div className="quiz-content">
                    <h4 className="question">{question}</h4>
                    {answerOptions.map(({id, options}, index) => 
                        <ToggleInput 
                            key={`${options}-${index}`} 
                            id={id}
                            options={options}
                            isComplete={isComplete}
                            correctCount={correctCount}
                            answerOptions={answerOptions}
                            />)
                    } 
                    <p className="answer-statement">The answer is {isComplete ? "correct!" : "incorrect"}</p>
                    { showNextButton && 
                        <button 
                            type="button"
                            name={buttonText}
                            aria-label="Next question"
                            value={buttonText}
                            className="next-btn" 
                            onClick={handleNextQuestionBtn}
                        >
                            {buttonText}
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}
