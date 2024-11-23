import { getRouteData } from "../utils"
import { SERVER_RETURN } from "../types"

export default class RideService{

    public async estimateValue (addressOrigin:string,addressDestination:string):Promise<SERVER_RETURN>{
        if(addressOrigin == addressDestination){
            return {status:400,message:{error_code:"INVALID_DATA",error_description:"Origin and Destination same place"}}
        }
        const {origin,destination,distance,duration,routeResponse} = await getRouteData(addressOrigin,addressDestination)
        return {status:200,message:{origin,destination,distance,duration,routeResponse}}
    }
}