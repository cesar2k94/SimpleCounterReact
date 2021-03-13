import './App.css';
import React from 'react';
import Counter from './componentes/Counter';

function App({ counter }) {

  let seconds = {
    unidades: 0,
    decenas: 0,
    centenas: 0,
    miles: 0,
    decMiles: 0,
    cenMiles: 0
  };

    seconds.decenas = Math.trunc(counter / 10);
    seconds.unidades = counter % 10;
    if (seconds.decenas > 9) {
      seconds.centenas = Math.trunc(seconds.decenas / 10);
      seconds.decenas = seconds.decenas % 10;
      if (seconds.centenas > 9) {
        seconds.miles = Math.trunc(seconds.centenas / 10);
        seconds.centenas = seconds.centenas % 10;
        if (seconds.miles > 9) {
          seconds.decMiles = Math.trunc(seconds.miles / 10);
          seconds.miles = seconds.miles % 10;
          if (seconds.decMiles > 9) {
            seconds.cenMiles = Math.trunc(seconds.decMiles / 10);
            seconds.decMiles = seconds.decMiles % 10;
            if (counter === 999999) {
              counter = 0;
            }
          }
        }
      }
    }
  

  return (
    <div className="total">
      <Counter seconds={seconds} />
    </div>
  );
}

export default App;
