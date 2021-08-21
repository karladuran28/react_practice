import { getImagen } from "../../base-pruebas/11-async-await";


describe('Pruebas de 11-async-await', () => {

    test('debe retonar url de imagen', async() => {
        
        const url = await getImagen();

        expect(  url.includes('https://') ).toBe( true );

    })
    

});