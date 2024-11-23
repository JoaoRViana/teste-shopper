import {Router,Response,Request} from 'express';
import RideController from '../controller/rideController';

const rideRouter = Router();
const rideController = new RideController();

rideRouter.post('/estimate',(req:Request,res:Response)=>rideController.estimateValue(req,res))

export default rideRouter