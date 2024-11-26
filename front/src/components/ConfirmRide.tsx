import { TDRIVER, TRIDEESTIMATE, TSAVERIDE } from "../types";
import DriversContainer from "./DriversContainer";
import { renderMap } from "../utils";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


interface ConfirmRideProps {
  cancelRide: () => void;
  data: TRIDEESTIMATE;
  customer_id: string;
  destination: string;
  origin: string;
}

export default function ConfirmRide({
  cancelRide,
  data,
  customer_id,
  destination,
  origin,
}: ConfirmRideProps) {
  const [map, setMap] = useState<string>("");
  const navigate = useNavigate();

  const getMap = () => {
    const newMap = renderMap(data.routeResponse.routes[0].legs[0].steps);
    setMap(newMap);
  };

  const saveRide = async ({
    customer_id, origin,destination,distance,duration,driver: { id, name },value,
  }: TSAVERIDE): Promise<void> => {
    const requestBody={customer_id,origin,destination,distance,duration,driver:{id,name},value}
    try {
      await axios.patch('http://localhost:8080/ride/confirm',requestBody)
      navigate('/history')
    } catch (error:any) {
        toast.error(error.response.data.error_description,{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme:'dark'
    })
    }
  };

  useEffect(() => {
    getMap();
  }, [data]);

  return (
    <div className="block justify-center items-center h-screen w-full downToUp p-10" id="confirmRide">
      <div className="w-full flex justify-center items-center py-2 ">
        <img className="rounded " src={map} alt="Route Map" />
      </div>
      <div className="flex justify-center items-center py-2">
        <h2 className="text-lg font-bold">{customer_id} escolha um motorista</h2>
      </div>
      <div className="py-2 flex flex-col items-center gap-4">
        {data.options.map((e: TDRIVER) => (
          <DriversContainer
            key={`driversContainer${e.id}`}
            name={e.name}
            description={e.description}
            value={e.value}
            review={e.review}
            vehicle={e.vehicle}
            saveRide={() =>
              saveRide({
                customer_id,
                origin,
                destination,
                distance: data.distance,
                duration: data.duration,
                value: e.value,
                driver: { id: e.id, name: e.name },
              })
            }
          />
        ))}
      </div>
      <div className="flex w-full  justify-end p-2">
        <button
            onClick={cancelRide}
            className="font-bold text-slate-100 place-self-end rounded bg-black p-2 hover:brightness-125 ">
            Cancelar viagem
        </button>
      </div>
    </div>
  );
}
