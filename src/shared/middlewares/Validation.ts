import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { ObjectSchema, ValidationError } from "yup";

type TValidation = (field: 'body' | 'header' | 'params' | 'query', schema: ObjectSchema<any>) => RequestHandler



export const validation: TValidation = (field, schema: ObjectSchema<any>) => async (req, res, next) => {
    try {
        await schema.validate(req[field], { abortEarly: false });
        return next();
    } catch (e) {
        const yupError = e as ValidationError;
        const validationErrors: Record<string, string> = {};

        yupError.inner.forEach(e => {
            if (!e.path) return;

            validationErrors[e.path] = e.message;

        });

        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: validationErrors
        });
    }
};