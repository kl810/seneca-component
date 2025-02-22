import { useState, useEffect } from 'react';
import './ToggleInput.css';


interface ToggleInputProps {
    options: string[],
    selected: string,
    answer: string
}

export default function ToggleInput({ options, selected, answer}: ToggleInputProps) {

    const [ isActiveId, setIsActiveId ] = useState<number>()

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
        setIsActiveId(id)
        // console.log(event.currentTarget.value)
    }

    useEffect(() => {
        console.log("isActiveId: ", isActiveId);
    }, [isActiveId]);


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
