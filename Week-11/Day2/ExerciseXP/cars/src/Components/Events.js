import React, { useState } from 'react';

const Events = () => {
const [isToggleOn, setIsToggleOn] = useState(true);


    const clickMe = () => {
        alert('I was clicked');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert('You pressed Enter! The input value is: ' + event.target.value);
        }
    };

    const toggleState = () => {
        setIsToggleOn((prevToggle) => !prevToggle);
    };

    return (
        <div>
            <button inClick={clickMe}>Click Me</button>
            <br />
            <input type='text' onKeyDown={handleKeyDown} placeholder='Press the ENTER key!' />
            <br />
            <button onClick={toggleState}>{isToggleOn ? 'ON' : 'OFF'}</button>
        </div>
    );
};

export default Events;