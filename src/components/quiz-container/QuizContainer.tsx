import './QuizContainer.css';
import ToggleInput from '../toggle-input/ToggleInput';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { goToNextQuestion } from '../../features/quiz/quizSlice';

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

    const getBgColor = (count: number, options: Array<object>): string => {

        if (percentCorrect === 0) return "none-correct";
        if (percentCorrect <= 0.3) return "few-correct";
        if (percentCorrect <= 0.6) return "some-correct";
        if (percentCorrect <= 0.99) return "mostly-correct";
        if (percentCorrect === 1) return "all-correct";

        return "none-correct";
    };

    const handleNextQuestionBtn = () => {dispatch(goToNextQuestion())};

    const buttonText = allQuestionsCompleted ? "Quiz completed!" : "Next question";

    return (
        <div className="quiz-wrapper">
            <div 
                className={"quiz-container"}
                style={{
                    background: 
                        `${ isComplete ? 
                            "linear-gradient(180deg, #76E0C2 0%, #59CADA 100%)" :       
                            `linear-gradient(180deg, rgb(250, 213, 78) 0%,       
                                rgba(244,223,40,${percentCorrect}) 30%), 
                                rgb(238,107,45)`
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
                            getBgColor= {getBgColor}
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
