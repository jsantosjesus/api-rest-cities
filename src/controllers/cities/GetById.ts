import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";

interface IParamsProps{
    id?: string;
}


export const getByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamsProps>(yup.object().shape({
      id: yup.string().notRequired().min(3),
    }))
  }));

export const getById = async (req: Request<IParamsProps>, res: Response) => {

    console.log(req.params);
    return res.status(StatusCodes.ACCEPTED).send('Successfully in get city!');

}