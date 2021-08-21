import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 08-imp-exp', () => {

    test('debe retornar un héroe por id', () => {
       
        const id = 1;
        const heroe = getHeroeById( id );
        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );

    });
    test('debe retornar un undefined si héroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
        
    });
    test('debe retonar un arreglo con los héroes de DC, según owner', () => {

        const owner = 'DC';
        const arr = getHeroesByOwner( owner );
        const arrTest = heroes.filter( (h) => h.owner === owner );

        expect( arr ).toEqual( arrTest );
        
    });
    test('debe retornar un arreglo con los héroes de Marvel, comparar longitud', () => {
        const owner = 'Marvel';
        const arrLength = getHeroesByOwner(owner).length;
        const arrLengthTest = heroes.filter( (h) => h.owner === owner ).length;
 
        expect( arrLength ).toBe( arrLengthTest );
    });
    
});