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
        const newMap = await renderMap(data.origin,data.destination)
        setMap(newMap)
    }
    useEffect(()=>{
        getMap()
    })

    return(
        <div className="flex justify-center items-center h-screen w-full downToUp" id="confirmRide">
            {data.options.map((e:TDRIVER)=>(
                <DriversContainer name={e.name} description={e.description} value={e.value} review={e.review} vehicle={e.vehicle}></DriversContainer>
            ))}
            <img src={map}></img>
            <button onClick={cancelRide}>Cancel</button>
        </div>
    )
}