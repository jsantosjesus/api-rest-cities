import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares";

interface IQueryProps{
    page?: number;
    limit?: number;
    filter: String;
}


export const getValidation = validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({
      page: yup.number().notRequired().moreThan(0),
      limit: yup.number().notRequired().moreThan(0),
      filter: yup.string().notRequired().length(3),
    }))
  }));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {

    console.log(req.query);
    return res.status(StatusCodes.ACCEPTED).send('Successfully in get citys!');

}