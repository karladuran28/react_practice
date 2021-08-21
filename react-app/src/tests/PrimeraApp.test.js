import React from 'react';
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme'

describe('Pruebas en <PrimeraApp />', () => {

/*     test('demostrar mostrar Hola soy Karla', () => {
        const saludo = 'Hola soy Karla';
        const { getByText } = render( <PrimeraApp saludo={ saludo }/> );

        expect(  getByText(saludo) ).toBeInTheDocument();

    }); */

    test('debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola soy Karla';
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/> );
        
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola soy Karla';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo }
                subtitulo={ subtitulo }
            /> 
        );

        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);
        
        expect( textoParrafo ).toBe( subtitulo );


    });
    
    
    
});