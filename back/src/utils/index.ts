import dotenv from "dotenv";
import axios from "axios";
import path from "path";

const envPath =  path.resolve(__dirname,'../../../.env')
dotenv.config({path:envPath});
const apiKey = process.env.GOOGLE_API_KEY;
export const getRouteData = async (addressOrigin: string, addressDestination: string) => {
    const data = {
        origin: {
            address: addressOrigin,
        },
        destination: {
            address: addressDestination,
        },
        travelMode: "DRIVE",
        computeAlternativeRoutes:false,
    };
    try {
        const url = `https://routes.googleapis.com/directions/v2:computeRoutes`;
        const response = await axios.post(url, data, {
            headers: {
                "Content-Type": "application/json",
                "X-Goog-Api-Key": apiKey, 
                "X-Goog-FieldMask": "routes.duration,routes.distanceMeters,routes.legs.startLocation.latLng,routes.legs.endLocation.latLng,routes.legs.steps.startLocation,routes.legs.steps.endLocation,",
            },
        });
        const route = response.data.routes[0];
        const legs= route.legs[0]
        const origin = legs.startLocation.latLng
        const destination = legs.endLocation.latLng
        return{duration:response.data.routes[0].duration,distance:response.data.routes[0].distanceMeters,origin,destination,routeResponse:response.data}
    } catch (error) {
        return {error:400}
    }
   
};
