import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

interface ICity {
    nome: String,
    estado: String
}

const bodyValidation: yup.ObjectSchema<ICity> = yup.object({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(2)
})

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
    let validateData: ICity | undefined = undefined;

    try {
        validateData = await bodyValidation.validate(req.body, { abortEarly: false });
    } catch (e) {
        const yupError = e as yup.ValidationError;
        const validationErrors: Record<string, string> = {};

        yupError.inner.forEach(e => {
            if(!e.path) return;

            validationErrors[e.path] = e.message;

        });

        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: validationErrors
        });
    }


    console.log(validateData);
    return res.status(StatusCodes.ACCEPTED).json({ 'nome': 'Tobias Barreto' });


}