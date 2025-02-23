import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './ToggleInput.css';
import { updateSelectedAnswer } from '../../features/quiz/quizSlice';


interface ToggleInputProps {
    id: number,
    options: string[],
}

export default function ToggleInput({ id, options }: ToggleInputProps) {
    const [ isActiveId, setIsActiveId ] = useState<number|null>(null)
    const dispatch = useDispatch()

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
        setIsActiveId(index)
        dispatch(updateSelectedAnswer({toggleId: id, selectedAnswer: event.currentTarget.value}))
    }


    return (
        <>  
            <div className="toggle-container">
                {options.map((option, index) => 
                    <button
                        key={`${option}-${index}`}
                        type="button"
                        name={option}
                        aria-label="Answer Option"
                        value={option}
                        className={ index === isActiveId ? "toggle active" : "toggle" }
                        onClick={(event) => handleButtonClick(event, index)}
                    >
                        <h5 className="text">{option}</h5>
                    </button>
                )}
            </div>
        </>
    )
}
