import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";

interface ICity {
    nome: String,
    estado: String
}

const bodyValidation: yup.ObjectSchema<ICity> = yup.object({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(2)
})


export const createValidation = validation('body', bodyValidation);


export const create = async (req: Request<{}, {}, ICity>, res: Response) => {


    console.log(req.body);
    return res.status(StatusCodes.ACCEPTED).send('Successfully created city!');


}