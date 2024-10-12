import React from 'react';

function SecondsCounter(props) {
    const digito6 = Math.floor(props.seconds / 100000) % 10;
    const digito5 = Math.floor(props.seconds / 10000) % 10;
    const digito4 = Math.floor(props.seconds / 1000) % 10;
    const digito3 = Math.floor(props.seconds / 100) % 10;
    const digito2 = Math.floor(props.seconds / 10) % 10;
    const digito1 = props.seconds % 10;

    return (
        <div className="contador">
            <div className="digito"><i className="fa-regular fa-clock"></i></div>
            <div className="digito">{digito6}</div>
            <div className="digito">{digito5}</div>
            <div className="digito">{digito4}</div>
            <div className="digito">{digito3}</div>
            <div className="digito">{digito2}</div>
            <div className="digito">{digito1}</div>
        </div>
    );
}

export default SecondsCounter;
