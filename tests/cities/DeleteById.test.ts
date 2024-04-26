import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Cities - Delete', () => {


    it('Delete city', async () => {
        const res01 = await testServer.delete('/cities/123')


        expect(res01.statusCode).toEqual(StatusCodes.ACCEPTED);
        expect(res01.text).toEqual('Successfully in delete city!');

    });

    it('try to delete city with id must curt', async () => {
        const res01 = await testServer.delete('/cities/1')


        expect(res01.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res01.body).toHaveProperty('errors.params.id');
    });
});