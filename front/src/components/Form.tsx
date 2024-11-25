import { useState } from "react"
import axios from "axios"

export default function Form(){
    const [customer_id,setName] = useState<String>("")
    const [destination,setDestination] = useState<String>("")
    const [origin,setOrigin] = useState<String>("")

    const getEstimateValue=async ()=>{
        const data = {
            customer_id,
            destination,
            origin,
        }
        const response = await axios.post("http://localhost:8080/ride/estimate",data)
        console.log(response.data)
    }

    return(
        <main className="flex justify-center items-center h-screen w-full">
            <div className=" block gap-7 h-[420px] p-10 rounded ">
                <div className="mb-10">
                    <input className="rounded h-[34px] pl-4" placeholder="Name" onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div className="mb-10">
                    <input className="rounded h-[34px] w-[600px] pl-4" placeholder="Address Origin" onChange={(e)=>setOrigin(e.target.value)}></input>
                </div>
                <div className="mb-10">
                    <input className="rounded h-[34px] w-[600px] pl-4" placeholder="Addres destination" onChange={(e)=>setDestination(e.target.value)}></input>
                </div>
                <div className="w-full justify-end flex ">
                    <button onClick={getEstimateValue} className="font-bold text-stone-200 place-self-end rounded bg-green-900 p-2 hover:brightness-125">Estimate Value</button>
                </div>
            </div>
        </main>
    )
}