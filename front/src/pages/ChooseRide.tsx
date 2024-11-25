import { useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import ConfirmRide from "../components/ConfirmRide";
import { downToUpDisappearAnimation, upToDownDisappearAnimation } from "../utils";
import { TRIDEESTIMATE } from "../types";
export default function ChooseRide() {
    const [customer_id, setCustomerId] = useState<string>("");
    const [destination, setDestination] = useState<string>("");
    const [origin, setOrigin] = useState<string>("");
    const [formSubmit,setFormSubmit] = useState<boolean>(false);
    const [data,setData]=useState<TRIDEESTIMATE>({
        origin:{latitude:'',longitude:''},
        destination:{latitude:'',longitude:''},
        distance:0,
        duration:'',
        options:[],
        routeResponse:'',
    });

    const getEstimateValue = async (): Promise<void> => {
        const requestBody = {
            customer_id,
            destination,
            origin,
        };
        setTimeout(()=>{
            setFormSubmit(true);
        },510)
        downToUpDisappearAnimation('formRide');
    };
    const cancelRide = ():void=>{
        setTimeout(()=>{
            setFormSubmit(false)
        },510)
        upToDownDisappearAnimation('confirmRide')
        setCustomerId("")
        setDestination("")
        setOrigin("")
    }

    return (
        <main className="overflow-hidden">
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
        ></ConfirmRide>}
        </main>
    );
}
