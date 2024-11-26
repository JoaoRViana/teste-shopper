import { Request,Response } from "express";
import DriversService from "../services/driversService";


export default class DriversControler{
    constructor( private driverService = new DriversService()){}

    public async getAllDrivers(req:Request,res:Response):Promise<any>{
        const {status,message} = await this.driverService.getAllDrivers();
        return res.status(status).json(message);
    }
}