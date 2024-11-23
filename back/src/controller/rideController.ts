import { Request,Response } from "express";
import RideService from "../services/rideService";

export default class RideController{

    constructor(private rideService:any = new RideService()){}

    public async estimateValue(req:Request,res:Response):Promise<any>{
        const{origin,destination} = req.body;
        const {status,message} = await this.rideService.estimateValue(origin,destination);
        return res.status(status).json(message);
    }
}