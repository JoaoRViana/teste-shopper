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
    const url = `https://routes.googleapis.com/directions/v2:computeRoutes`;
        const response = await axios.post(url, data, {
            headers: {
                "Content-Type": "application/json",
                "X-Goog-Api-Key": apiKey, 
                "X-Goog-FieldMask": "routes.duration,routes.distanceMeters,routes.legs.startLocation.latLng,routes.legs.endLocation.latLng",
            },
        });
    const origin = {latitude:response.data.routes[0].legs[0].startLocation.latLng}
    const destination = {latitude:response.data.routes[0].legs[0].endLocation.latLng}
    return{duration:response.data.routes[0].duration,distance:response.data.routes[0].distanceMeters,origin,destination,routeResponse:response.data}
};
