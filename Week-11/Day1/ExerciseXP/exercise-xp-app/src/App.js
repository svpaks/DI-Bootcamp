// import logo from './logo.svg';
import React from 'react';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import './App.css';
import Exercise from './Exercise3';

const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5;


const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};


function App() {
  return (
    <div className="App">
          <p>
            Hello World!
          </p>
          {myelement}
          <p>React is {sum} times better with JSX</p>
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <UserFavoriteAnimals blabla={user.favAnimals} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Exercise />
    </div>
  );
}

export default App;
