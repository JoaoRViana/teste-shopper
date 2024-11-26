import DriverModel from "../database/models/DriverModel";
import { SERVER_RETURN } from "../types";

export default class DriversService{
    private driverModel = DriverModel;

    public async getAllDrivers():Promise<SERVER_RETURN>{
        const drivers = await this.driverModel.findAll();
        return {status:200,message:drivers}
    }
}