import { Router } from "express";

import { CitiesController } from "../../controllers";

const router = Router();

router.get('/', (_, res) => {

    return res.send('hello world');
});

router.post('/cities', CitiesController.createValidation, CitiesController.create);

router.get('/cities/:id', CitiesController.getByIdValidation, CitiesController.getById);

router.get('/cities', CitiesController.getValidation, CitiesController.getAll);

router.delete('/cities/:id', CitiesController.deleteByIdValidation, CitiesController.deleteById);

router.put('/cities/:id', CitiesController.updateByIdValidation, CitiesController.updateById);


export { router };