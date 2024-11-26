import axios from "axios";
import { useEffect, useState } from "react"
import HistoryContainer from "../components/HistoryContainer";
import { toast } from "react-toastify";


export default function HistoryRides(){
    const [customer_id,setCustomerId]=useState<string>('');
    const [alldrivers,setAllDrivers]=useState([]);
    const [selectedDriver,setSelectedDriver]= useState('');
    const [history,setHistory]=useState([]);
    const getAllDrivers =async()=>{
        const response = await axios.get('http://localhost:8080/drivers')
        setAllDrivers(response.data)
    }
    useEffect(()=>{
        getAllDrivers()
    },[alldrivers,history])

    const getHistory = async()=>{
        try {
            const response = await axios.get(`http://localhost:8080/ride/${customer_id}?driver_id=${selectedDriver}`)
            setHistory(response.data.rides);

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
    }

    return(
        <div className="block justify-center items-center  w-full  p-10">
            <div className="mb-10 flex justify-center flex-wrap gap-2 font-bold">
                <input
                    className="rounded h-[40px] pl-4 font-bold"
                    placeholder="Name"
                    value={customer_id}
                    onChange={(e) => setCustomerId(e.target.value)}
                />
                <select className="p-2 text-sm h-[40px]" onChange={({target})=>{setSelectedDriver(target.value)}}>
                    <option value='' key={'todos'}>
                        Todos
                    </option>
                    {alldrivers.map((e:any)=>(
                        <option value={e.id} key={`selectOption${e.id}`}>
                            {e.name}
                        </option>
                    ))}
                </select>
                <button className="font-bold text-slate-100 place-self-end rounded bg-black p-2 hover:brightness-125 " onClick={getHistory}>Buscar</button>
            </div>
            <div className="py-2 flex flex-col items-center gap-4">
                {history.map((e:any)=>(
                    <HistoryContainer date={e.date} name={e.driver.name} origin={e.origin} destination={e.destination} distance={e.distance} duration={e.duration} value={e.value}                    
                    />
                ))}
            </div>
        </div>
    )
}