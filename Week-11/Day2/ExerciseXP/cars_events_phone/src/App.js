import React from 'react';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';

const carinfo = {
  name: 'Fofd',
  model: 'Mustang'
};


function App() {
  return (
    <>
    <div>
      <Car carInfo={carinfo} />
      <hr/>
    </div>
    <div>
      <Events />
      <hr/>
    </div>
    <div>
      <Phone />
    </div>
    </>
  );
}

export default App;
