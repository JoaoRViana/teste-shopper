import { getRouteData } from "../utils"
import { SERVER_RETURN } from "../types"
import {Sequelize} from "sequelize";
import DriverModel from "../../database/models/DriverModel"

export default class RideService{

    private driverModel =  DriverModel;

    public async estimateValue (addressOrigin:string,addressDestination:string):Promise<SERVER_RETURN>{
        if(addressOrigin == addressDestination){
            return {status:400,message:{error_code:"INVALID_DATA",error_description:"Origin and Destination same place"}}
        }
        const {origin,destination,distance,duration,routeResponse} = await getRouteData(addressOrigin,addressDestination)
        let drivers = await this.driverModel.findAll({ where: Sequelize.literal(`km_mínimo * 1000 >= ${distance}`),})
        drivers.sort((a,b)=>{
            let newA = a.taxa.slice(2,-3).split('')
            newA[newA.length-3] = '.'
            let newB = b.taxa.slice(2,-3).split('')
            newB[newB.length-3] = '.'
            return +newA.join('') - +newB.join('')
        })
        return {status:200,message:{origin,destination,distance,duration,options:{drivers},routeResponse}}
    }
}