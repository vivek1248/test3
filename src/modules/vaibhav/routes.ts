import express from 'express';
import {createVaibhav,getVaibhav,searchVaibhav,updateVaibhav,deleteVaibhav,} from './controller';
import {
validateCreateVaibhavRequest,
validateDeleteVaibhavRequest,
validateUpdateVaibhavRequest,
} from './validators';

const router = express.Router();

router.get('/vaibhav/search',/* isAuthenticated,*/ searchVaibhav);
router.get('/vaibhav/:id',/* isAuthenticated,*/ getVaibhav);
router.post('/vaibhav/', /* isAuthenticated,*/ validateCreateVaibhavRequest(), createVaibhav);
router.put('/vaibhav/:id',validateUpdateVaibhavRequest(), updateVaibhav);
router.delete('/vaibhav/:id',validateDeleteVaibhavRequest(), deleteVaibhav);

export default router;