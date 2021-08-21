import CounterApp from "../CounterApp";
import { shallow } from 'enzyme';

describe('Pruebas en CounterApp', () => {

    let wrapper = shallow( <CounterApp /> );

    beforeEach(() => {
        wrapper = shallow( <CounterApp /> );
    });

    test('debe mostrar CounterApp correctamente', () => {
        const wrapper = shallow(<CounterApp value={ 28 }/>);

        expect( wrapper ).toMatchSnapshot();
    });
    test('debe mostrar el valor por defecto 1998', () => {
        const numTest = 1998;
        const numero = wrapper.find('h3').text();

        expect( numero ).toBe( numTest.toString() );

    });
    test('debe de incrementar con el botón +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const numero = wrapper.find('h3').text();

        expect ( numero ).toBe('1999');
    });
    test('debe de incrementar con el botón -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const numero = wrapper.find('h3').text();

        expect ( numero ).toBe('1997');
    });
    test('debe de incrementar con el botón -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const numero = wrapper.find('h3').text();

        expect ( numero ).toBe('1997');
    });
    test('debe colocar el valor por defecto bon el btn reset', () => {
        const wrapper = shallow(<CounterApp value={ 8 }/>);
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterTest = wrapper.find('h3').text().trim();

        expect( counterTest ).toBe( '8' );

    })
    

});