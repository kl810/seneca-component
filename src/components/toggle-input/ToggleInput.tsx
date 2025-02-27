import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './ToggleInput.css';
import { updateSelectedAnswer } from '../../features/quiz/quizSlice';


interface ToggleInputProps {
    id: number,
    options: string[],
    isComplete: boolean,
    correctCount: number,
    answerOptions: Array<object>,
}

export default function ToggleInput({ id, options, isComplete, correctCount, answerOptions }: ToggleInputProps) {
    const [ isActiveId, setIsActiveId ] = useState<number | null>(null)

    const dispatch = useDispatch()

    const getBgColor = (): string => {
        const percentCorrect = parseFloat((correctCount / answerOptions.length).toFixed(2));

        if (percentCorrect === 0) return "none-correct";
        if (percentCorrect <= 0.3) return "few-correct";
        if (percentCorrect <= 0.6) return "some-correct";
        if (percentCorrect <= 0.99) return "most-correct";
        if (percentCorrect === 1) return "complete-correct";

        return "none-correct";
    };

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
        setIsActiveId(index)
        dispatch(updateSelectedAnswer({toggleId: id, selectedAnswer: event.currentTarget.value}))
    }

    return (
        <div className="toggle-wrapper">  
            <div className={"toggle-container"}>
                {options.map((option, index) => 
                    <button
                        key={`${option}-${index}`}
                        type="button"
                        name={option}
                        aria-label="Answer Option"
                        value={option}
                        className={`toggle ${index === isActiveId ? 
                                `active ${getBgColor()}`         
                                : "" }`}                                  
                        onClick={(event) => handleButtonClick(event, index)}
                        disabled={isComplete}
                    >
                        <h5 className="text">{option}</h5>
                    </button>
                )}
            </div>
        </div>
    )
}
