import {Router} from 'express';
import rideRouter from './rideRouter';
import driversRouter from './driversRouter';

const router  = Router();

router.use('/ride',rideRouter)
router.use('/drivers',driversRouter)

export default router;