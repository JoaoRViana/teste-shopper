import {Router,Response,Request} from 'express';
import RideController from '../controller/rideController';

const rideRouter = Router();
const rideController = new RideController();

rideRouter.post('/estimate',(req:Request,res:Response)=>rideController.estimateValue(req,res))
rideRouter.patch('/confirm',(req:Request,res:Response)=>rideController.rideConfirm(req,res))
rideRouter.get('/:customer_id',(req:Request,res:Response)=>rideController.getHistory(req,res))


export default rideRouter