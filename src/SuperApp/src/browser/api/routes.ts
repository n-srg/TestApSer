import { Router } from 'express';

const routes = Router();

routes.get('/my-api', (req, res, err) => {
	res.status(200).send('42');
});

export default routes;
