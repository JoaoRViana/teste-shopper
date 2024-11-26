import {Router,Response,Request} from 'express';
import DriversControler from '../controller/driversController';


const driversRouter = Router();
const driverController = new DriversControler();
driversRouter.get('/',(req:Request,res:Response)=>driverController.getAllDrivers(req,res))

export default driversRouter;


