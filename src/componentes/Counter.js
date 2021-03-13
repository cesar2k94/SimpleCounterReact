import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Counter = ({ seconds }) => {
    console.log(seconds);
    return (
        <div className="body">
            <div className="counter-clock">
                <FontAwesomeIcon icon={faClock}
                    className="icono-clock" />
            </div>
            <div className="counter-base">
                <p>{seconds.cenMiles}</p>
            </div>
            <div className="counter-base">
                <p>{seconds.decMiles}</p>
            </div>
            <div className="counter-base">
                <p>{seconds.miles}</p>
            </div>
            <div className="counter-base">
                <p>{seconds.centenas}</p>
            </div>
            <div className="counter-base">
                <p>{seconds.decenas}</p>
            </div>
            <div className="counter-base">
                <p>{seconds.unidades}</p>
            </div>
        </div>
    );
}

export default Counter;