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
        <main>
            <h3>Seu nome:</h3>
            <input onChange={(e)=>setName(e.target.value)}></input>
            <h3>Endereço de Origem:</h3>
            <input onChange={(e)=>setOrigin(e.target.value)}></input>
            <h3>Destino</h3>
            <input onChange={(e)=>setDestination(e.target.value)}></input>
            <button onClick={getEstimateValue}>Estimar o valor</button>
        </main>
    )
}