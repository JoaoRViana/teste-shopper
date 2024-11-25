import { getRouteData } from "../utils"
import { SERVER_RETURN } from "../types"
import {Sequelize} from "sequelize";
import DriverModel from "../database/models/DriverModel"
import TravelHistoryModel from "../database/models/RideHistoryModel";

export default class RideService{

    private driverModel =  DriverModel;
    private travelHistoryModel = TravelHistoryModel;


    public async estimateValue (addressOrigin:string,addressDestination:string,customer_id:string):Promise<SERVER_RETURN>{
        if(addressOrigin == addressDestination || !addressOrigin || !addressDestination || !customer_id){
            return {status:400,message:{error_code:"INVALID_DATA",error_description:"Os dados fornecidos no corpo da requisição são inválidos"}}
        }
        const {origin,destination,distance,duration,routeResponse,error} = await getRouteData(addressOrigin,addressDestination)
        if(error){
            return {status:400,message:{error_code:"INVALID_DATA",error_description:"Os dados fornecidos no corpo da requisição são inválidos"}}
        }
        let data = await this.driverModel.findAll({ where: Sequelize.literal(`${distance} >= km_mínimo * 1000 `),})
        let drivers = data.sort((a,b)=>a.value - b.value).map((e)=>{
            return {id:e.id,name:e.name,description:e.description,vehicle:e.vehicle,review:{rating:e.rating,comment:e.comment},value:+(+e.value *(+distance/1000)).toFixed(2)}
        })
        return {status:200,message:{origin,destination,distance,duration,options:[...drivers],routeResponse}}
    }

    public async rideConfirm(
        customer_id:string,origin:string,destination:string,distance:number,duration:string,id:number,name:string,value:number
    ):Promise<SERVER_RETURN>{
        const driver = await this.driverModel.findOne({where:{id}})
        if(!customer_id || !origin || !destination || distance == null || distance < 0 || !duration || !id || !name || value == null || 
            customer_id.length<1 || origin.length <1 || destination.length <1 || origin == destination){
            return{status:400,message:{error_code:"INVALID_DATA",error_description:"Os dados fornecidos no corpo da requisição são inválidos"}}
        }
        if(!driver){
            return{status:404,message:{error_code:"DRIVER_NOT_FOUND",error_description:`Motorista ${name} não encontrado`}}
        }
        if(+distance <= +driver.km_mínimo*1000){
            return{status:406,message:{error_code:"INVALID_DISTANCE",error_description:`Quilometragem inválida para o motorista`}}
        }
        const newHistoryData = {customer_id,origin,destination,distance,duration,driver_id:id,value,date:new Date()}
        const newHistory = this.travelHistoryModel.build(newHistoryData);
        newHistory.save();
        return{status:200,message:{sucess:true}}
    }

    public async getHistory(customer_id:string,driver_id:number|null):Promise<SERVER_RETURN>{
        let history:any;
        if(!customer_id){
            return {status:404,message:{error_code:"NO_RIDES_FOUND",error_description:"Nenhum registro encontrado"}}
        }
        if(driver_id){
            let driver = await this.driverModel.findOne({where:{id:driver_id}})
            if(!driver){
                return {status:400,message:{error_code:"INVALID_DRIVER",error_description:"Motorista inválido "}}
            }
            history = await this.travelHistoryModel.findAll({where:{driver_id,customer_id}, order: [['date', 'DESC']],})
        }else{
            history = await this.travelHistoryModel.findAll({where:{customer_id} ,order: [['date', 'DESC']],})
        }
        if(history.length<1){
            return {status:404,message:{error_code:"NO_RIDES_FOUND",error_description:"Nenhum registro encontrado"}}
        }
        return{status:200,message:{customer_id,rides:[...history]}}

    }
}