import { getSaludo } from "../../base-pruebas/02-template-string";

getSaludo

describe('Pruebas en 02-template-string', () => {

    test('getSaludo debe retornar hola Karla', () => {
        const nombre = 'Karla';
        const saludo = getSaludo( nombre );
        console.log( saludo );

        expect( saludo ).toBe( `Hola ${nombre}` );
    })
    
    test('getSaludo debe retornar Hola Carlos si no hay argumento', () => {
        const saludo = getSaludo();
        console.log( saludo );

        expect( saludo ).toBe( `Hola Carlos` );
    })
    
});