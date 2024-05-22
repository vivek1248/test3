import * as express from 'express';
import usersRoutes from '../../modules/users/routes';
// PLOP_INJECT_IMPORT

const router = express.Router();

router.use(usersRoutes);

export default router;
