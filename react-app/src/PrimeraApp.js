import React from 'react';
import PropTypes from 'prop-types';
/* functional component */

const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        <>
            <h1>Hola Mundo</h1>
            <h2>Mi primera aplicación</h2>
            <h3>{ saludo }</h3>
            <p>{ subtitulo }</p> 
        </>
    );

};

/* tipo de dato de cada prop */
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

/* Valores default */
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo',
}

export default PrimeraApp;