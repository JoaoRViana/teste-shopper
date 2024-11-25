import { TDRIVER,TRIDEESTIMATE } from "../types";
import DriversContainer from "./DriversContainer";
import { renderMap } from "../utils";
import { useEffect, useState } from "react";

interface confirmRideProps{
    cancelRide: ()=>void;
    data:TRIDEESTIMATE;
}

export default function ConfirmRide({cancelRide,data}:confirmRideProps){
    const [map,setMap] = useState<string>('')
    const selectedDriver = async():Promise<void>=>{
        
    }
    const getMap = async()=>{
        const newMap = renderMap(data.routeResponse.routes[0].legs[0].steps)
        setMap(newMap)
    }
    useEffect(()=>{
        getMap()
    },[data])
    
    return(
        <div className="block justify-center items-center h-screen w-full downToUp" id="confirmRide">
            <div className="w-full flex justify-center items-center">
                <img src={map}></img>
            </div>
            {data.options.map((e:TDRIVER,i)=>(
                <div key={`driversContainer${i}`}>
                    <DriversContainer name={e.name} description={e.description} value={e.value} review={e.review} vehicle={e.vehicle}></DriversContainer>
                </div>
            ))}
            <button onClick={cancelRide}>Cancel</button>
        </div>
    )
}