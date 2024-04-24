import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";

interface ICity {
    nome: String,
    estado: String
}

interface IFilter {
    filter? : String
}


export const createValidation = validation((getSchema) => ({
    body: getSchema<ICity>(yup.object().shape({
      nome: yup.string().required().min(3),
      estado: yup.string().required().min(2),
    })),
    query: getSchema<IFilter>(yup.object().shape({
      filter: yup.string().required().min(3),
    })),
  }));

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {

    console.log(req.body);
    return res.status(StatusCodes.ACCEPTED).send('Successfully created city!');

}