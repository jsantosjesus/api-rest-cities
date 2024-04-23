import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

interface ICity {
    nome: String
}

const bodyValidation: yup.ObjectSchema<ICity> = yup.object({
  nome: yup.string().required().min(3) 
})

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
    let validateData: ICity | undefined = undefined;

    try{
        validateData = await bodyValidation.validate(req.body);
    } catch (e) {
        const yupError = e as yup.ValidationError;

        return res.status(StatusCodes.BAD_GATEWAY).json({
            errors: {
                default: yupError.message,
            }
        });
    }
    

    console.log(validateData);
    return res.status(StatusCodes.ACCEPTED).json({'nome' : 'Tobias Barreto'});


}