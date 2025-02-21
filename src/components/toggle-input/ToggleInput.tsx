import { useState } from 'react';
import './ToggleInput.css';


interface ToggleInputProps {
    options: [string, string]
}

export default function ToggleInput({options}: ToggleInputProps) {
    const [isToggled, setIsToggled] = useState(false)
    const handleToggle = () => {
        setIsToggled(isToggled => !isToggled);
    };

    return (
        <>
            <div className="toggle-container">
                <button 
                    type="button" 
                    onClick={handleToggle} 
                    className={`toggle ${isToggled ? 'selected': ''}`} //if isToggled === true, .selected css applies
                    disabled={isToggled}                               //disable button if it is clicked/isToggled === true
                >
                    <h5 className="text">{options[0]}</h5> 
                </button>
                <button 
                    type="button" 
                    onClick={handleToggle} 
                    className={`toggle ${isToggled ? '': 'selected'}`} //if isToggled != true, .selected css applies
                    disabled={!isToggled}
                >
                    <h5 className="text">{options[1]}</h5>
                </button>
            </div>
        </>
    )
}