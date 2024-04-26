import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Cities - Update', () => {


    it('update record', async () => {
        const res01 = await testServer.put('/cities/123')
        .send({
            nome: 'Tobias Barreto'
        });


        expect(res01.statusCode).toEqual(StatusCodes.ACCEPTED);
        expect(typeof res01.body).toEqual('number');

    });

    it('try to update a record with name curt', async () => {
        const res01 = await testServer.put('/cities/123')
        .send({
            nome: 'To'
        });


        expect(res01.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res01.body).toHaveProperty('errors.body.nome');
    });

    it('try to update a record with id curt', async () => {
        const res01 = await testServer.put('/cities/1')
        .send({
            nome: 'Tobias Barreto'
        });


        expect(res01.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res01.body).toHaveProperty('errors.params.id');
    });
});