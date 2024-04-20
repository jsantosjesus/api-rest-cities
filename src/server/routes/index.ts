import { Router } from "express";

const router = Router();

router.get('/', (_, res) => {

    return res.send('hello world');
});

router.post('/post', (req, res) => {
    console.log(req.body);
    return res.json(req.body);
});

export { router };