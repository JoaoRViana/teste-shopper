import { Request,Response } from "express";
import RideService from "../services/rideService";

export default class RideController{

    constructor(private rideService:any = new RideService()){}

    public async estimateValue(req:Request,res:Response):Promise<any>{
        const{origin,destination,customer_id} = req.body;
        const {status,message} = await this.rideService.estimateValue(origin,destination,customer_id);
        return res.status(status).json(message);
    }

    public async rideConfirm(req:Request,res:Response):Promise<any>{
        const{customer_id,origin,destination,distance,duration,driver,value}=req.body
        const {id,name} = driver
        const {status,message} = await this.rideService.rideConfirm(customer_id,origin,destination,distance,duration,id,name,value);
        return res.status(status).json(message)
    }
}