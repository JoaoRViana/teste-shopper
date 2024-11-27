import { useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import ConfirmRide from "../components/ConfirmRide";
import { disappearAnimation } from "../utils";
import { TRIDEESTIMATE } from "../types";
import { toast } from "react-toastify";
export default function ChooseRide() {
    const [customer_id, setCustomerId] = useState<string>("");
    const [destination, setDestination] = useState<string>("");
    const [origin, setOrigin] = useState<string>("");
    const [formSubmit,setFormSubmit] = useState<boolean>(false);
    const [data,setData]=useState<TRIDEESTIMATE>({
        origin:{latitude:0,longitude:0},
        destination:{latitude:0,longitude:0},
        distance:0,
        duration:'',
        options:[],
        routeResponse:'',
    });
    const cleanInputs = ():void=>{
        setCustomerId("")
        setDestination("")
        setOrigin("")
    }
    const getEstimateValue = async (): Promise<void> => {
        const requestBody = {
            customer_id,
            destination,
            origin,
        };
        try {
            const response = await axios.post("http://localhost:8080/ride/estimate",requestBody)
            setData(response.data)
            setTimeout(()=>{
                setFormSubmit(true);
            },510)
            disappearAnimation('formRide','upToDown','downToUpDisappear')
        } catch (error:any) {
            if(!error.response){
                toast.error("Não foi possível conectar com o servidor",{
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme:'dark'
                })
                cleanInputs()
                return
            }
            toast.error(error.response.data.error_description,{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:'dark'
            })
            cleanInputs()
        }
    };
    const cancelRide = ():void=>{
        setTimeout(()=>{
            setFormSubmit(false)
        },510)
        disappearAnimation('confirmRide','downToUp','upToDownDisappear')
        cleanInputs()
    }

    return (
        <main className="">
            {!formSubmit?
            <Form
            customer_id={customer_id}
            destination={destination}
            origin={origin}
            setCustomerId={setCustomerId}
            setDestination={setDestination}
            setOrigin={setOrigin}
            getEstimateValue={getEstimateValue}
        />:<ConfirmRide
        data={data}
        cancelRide = {cancelRide}
        customer_id={customer_id}
        destination={destination}
        origin={origin}
        ></ConfirmRide>}
        </main>
    );
}
