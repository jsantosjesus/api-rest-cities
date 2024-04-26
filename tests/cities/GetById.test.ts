import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Cities - GetAll', () => {


    it('get city by id', async () => {
        const res01 = await testServer.get('/cities/123')

        expect(res01.statusCode).toEqual(StatusCodes.ACCEPTED);

    });

    it('trying to catch cities passing zero page', async () => {
        const res01 = await testServer.get('/cities/1')

        expect(res01.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res01.body).toHaveProperty('errors.params.id');
    });

});