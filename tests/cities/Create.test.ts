import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Cities - Create', () => {


    it('create record', async () => {
        const res01 = await testServer.post('/cities')
        .send({
            nome: 'Tobias Barreto'
        });


        expect(res01.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res01.body).toEqual('number');

    });

    it('try to create a record with name curt', async () => {
        const res01 = await testServer.post('/cities')
        .send({
            nome: 'To'
        });


        expect(res01.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res01.body).toHaveProperty('errors.body.nome');
    });
});