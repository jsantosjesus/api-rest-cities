import { Router } from "express";

import { CitiesController } from "../../controllers";

const router = Router();

router.get('/', (_, res) => {

    return res.send('hello world');
});

router.post('/cities', CitiesController.create);

export { router };