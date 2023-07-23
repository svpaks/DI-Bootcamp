import React, { useState } from 'react';
import Garage from './Garage';

const Car = ({ carInfo }) => {
    const [color, setColor] = useState('');

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <div>
            <h1>This car is {color} {carInfo.model}</h1>
            <input type='text' value={color} onChange={handleColorChange} placeholder='Enter car color' />
            <Garage size="small" /> {/* Pass the size 'small' as a prop to the Garage component */}
        </div>
    );
};

export default Car;