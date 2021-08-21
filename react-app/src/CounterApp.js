import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value=1998 }) => {

    const [counter, setcounter] = useState( value );

    const handleAdd = () => {
        setcounter((c) => c + 1);
    };
    const handleSub = () => {
        setcounter( counter - 1 );
    };
    const handleReset = () => {
        setcounter( value );
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>
            <h3>{ counter }</h3>
            <button onClick={() => { handleAdd() }}>+1</button>
            <button onClick={() => { handleReset() } }>Reset</button>
            <button onClick={() => { handleSub()}}>-1</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number,
};

export default CounterApp; 