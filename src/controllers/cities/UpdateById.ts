import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";

interface IParamsProps{
    id?: string;
}

interface IBodyProps{
    nome?: string;
}


export const updateByIdValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().notRequired().min(3),
      })),
    params: getSchema<IParamsProps>(yup.object().shape({
      id: yup.string().notRequired().min(3),
    }))
  }));

export const updateById = async (req: Request<IParamsProps, {}, IBodyProps>, res: Response) => {

    console.log(req.body);
    return res.status(StatusCodes.ACCEPTED).json(123);

}