import dotenv from "dotenv";
import axios from "axios";
import path from "path";

const envPath =  path.resolve(__dirname,'../../../.env')
dotenv.config({path:envPath});
const apiKey = process.env.GOOGLE_API_KEY;
export const getRouteData = async (origin: string, destination: string) => {
    const data = {
        origin: {
            address: origin,
        },
        destination: {
            address: destination,
        },
        travelMode: "DRIVE",
    };
    const originCoordinates = await(getCoordinates(origin))
    const destinationCoodinates = await(getCoordinates(destination))
    const url = `https://routes.googleapis.com/directions/v2:computeRoutes`;
        const response = await axios.post(url, data, {
            headers: {
                "Content-Type": "application/json",
                "X-Goog-Api-Key": apiKey, 
                "X-Goog-FieldMask": "routes",
            },
        });
    console.log({origin:originCoordinates,destination:destinationCoodinates,distance:response.data})
    return{origin:originCoordinates,destination:destinationCoodinates,distance:response.data}
};


const getCoordinates = async (address: string) => {
    const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
    const response = await axios.get(geocodingUrl);
    if (response.data.status === 'OK') {
        const location = response.data.results[0].geometry.location;
        return location;
    } else {
        throw new Error('Geocoding API não conseguiu encontrar o endereço.');
    }
};