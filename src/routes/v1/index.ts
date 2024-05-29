import * as express from 'express';
import usersRoutes from '../../modules/users/routes';
import vaibhavRoutes from '../../modules/vaibhav/routes';
// PLOP_INJECT_IMPORT

const router = express.Router();

router.use(usersRoutes, vaibhavRoutes);

export default router;
