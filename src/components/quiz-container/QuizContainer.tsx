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
    } = useSelector((state: RootState) => state.quiz.currentQuestion);
    const { currentIndex, questions } = useSelector((state: RootState) => state.quiz);
    const dispatch = useDispatch();
    
    const percentCorrect = parseFloat((correctCount / answerOptions.length).toFixed(2));
    const isLastQuestion = currentIndex === questions.length - 1
    const isQuizComplete = isComplete && isLastQuestion
    const buttonText = isQuizComplete ? "Quiz completed!" : "Next question";

    const handleNextQuestionBtn = () => {dispatch(updateCurrentQuestion())};

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
                        }`  //change background-color based on percentageCorrect
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
                    { isComplete && 
                        <button 
                            type="button"
                            name={buttonText}
                            aria-label={buttonText}
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
