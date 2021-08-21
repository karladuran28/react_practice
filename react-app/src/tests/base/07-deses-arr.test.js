import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('Pruebas en desestructuración', () => {

    test('debe retornar un string y un número', () => {
        
        const [ letras, numeros ] = retornaArreglo(); 

        expect( letras ).toBe( 'ABC' );

    })
    

});