import React, { useState } from 'react';
import './style.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: 'Php', votes: 0 },
    { name: 'Python', votes: 0 },
    { name: 'JavaScript', votes: 0 },
    { name: 'Java', votes: 0 }
  ]);

  const handleVote = (languageName) => {
    // Find the language object in the array
    const updateLanguages = languages.map((language) => {
      if (language.name === languageName) {
        return { ...language, votes: language.votes + 1 };
      }
      return language;
    });

    // Update the state with the new vote count
    setLanguages(updateLanguages);
  };

  return (
    <div>
      <h1>Vote Your Language!</h1>
      <div className='languages'>
      {languages.map((language) => (
        <div key={language.name} className='language-item'>
          <p>
            {language.name}: {language.votes} votes
          </p>
          <button onClick={() => handleVote(language.name)} className='button-style'>Click Here!</button>
          </div>
      ))}
      </div>
    </div>
  );
}

export default App;
