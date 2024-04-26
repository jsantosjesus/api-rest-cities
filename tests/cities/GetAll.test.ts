import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Cities - GetAll', () => {


    it('get all cities', async () => {
        const res01 = await testServer.get('/cities?page=1&limit=1&filter=teste')

        expect(res01.statusCode).toEqual(StatusCodes.ACCEPTED);

    });


    it('trying to catch cities passing zero limit', async () => {
        const res01 = await testServer.get('/cities?limit=0')

        expect(res01.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res01.body).toHaveProperty('errors.query.limit');
    });

    it('trying to catch cities passing filter with just two letters', async () => {
        const res01 = await testServer.get('/cities?filter=te')

        expect(res01.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res01.body).toHaveProperty('errors.query.filter');
    });

    it('trying to catch cities passing zero page', async () => {
        const res01 = await testServer.get('/cities?page=0')

        expect(res01.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res01.body).toHaveProperty('errors.query.page');
    });

});