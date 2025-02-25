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
    getBgColor: (count: number, options: Array<object>) => string,
}

export default function ToggleInput({ id, options, isComplete, correctCount, answerOptions, getBgColor }: ToggleInputProps) {
    const [ isActiveId, setIsActiveId ] = useState<number|null>(null)
    const dispatch = useDispatch()

    const updateToggleCss = getBgColor(correctCount, answerOptions);

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
        setIsActiveId(index)
        dispatch(updateSelectedAnswer({toggleId: id, selectedAnswer: event.currentTarget.value}))
    }


    return (
        <div className="toggle-wrapper">  
            <div className="toggle-container">
                {options.map((option, index) => 
                    <button
                        key={`${option}-${index}`}
                        type="button"
                        name={option}
                        aria-label="Answer Option"
                        value={option}
                        className={`toggle ${index === isActiveId ? 
                                `active ${updateToggleCss}`         //when btn is clicked(active) -> .active and updateToggleCss is added
                                : null }`}                                  
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
