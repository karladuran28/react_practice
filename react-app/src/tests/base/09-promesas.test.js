import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas en 09-promesas', () => {

    test('getHeroByIdAsync debe retornar un héroe async ', ( done ) => {
    
        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {

                expect( heroe ).toBe( heroes[0] );
                done();

            });
    });    
    
});