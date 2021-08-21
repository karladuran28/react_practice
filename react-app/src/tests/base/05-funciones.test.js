import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502',
        };
    
        const user = getUser();
    
        expect( user ).toStrictEqual( userTest );
    })

    test('getUsuarioActivo debe retornar un objeto según nombre', () => {
        
        const user = 'FRESKYALE';

        const getUsuarioActivoTest = {
            uid: 'ABC567',
            username: user,
        };

        const userTest = getUsuarioActivo( user );
        console.log( userTest );

        expect( userTest ).toEqual( getUsuarioActivoTest );

    })
    

});