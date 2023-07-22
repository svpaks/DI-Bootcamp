import React from "react";
import './Exercise.css'; // Import the Exercise.css file

const style_header = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Arial'
};

class Exercise extends React.Component {
    render() {
        return (
            <div>
                <h1 style={style_header}>Hello, I'm Exercise!</h1>
                <p className="para">This is a paragraph.</p>
                <a href="https://www.example.com">This is a link</a>
                <form>
                    <input type="text" placeholder="Enter your name" />
                    <button type="submit">Submit</button>
                </form>
                <img src="wave-1353491.jpg" alt="Here is an image" />
                <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </div>
        );
    };
};

export default Exercise;