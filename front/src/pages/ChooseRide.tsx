import { useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import ConfirmRide from "../components/ConfirmRide";
import { downToUpDisappearAnimation, upToDownDisappearAnimation } from "../utils";
export default function ChooseRide() {
    const [customer_id, setCustomerId] = useState<string>("");
    const [destination, setDestination] = useState<string>("");
    const [origin, setOrigin] = useState<string>("");
    const [formSubmit,setFormSubmit] = useState<boolean>(false);

    const getEstimateValue = async (): Promise<void> => {
        const data = {
            customer_id,
            destination,
            origin,
        };
        setTimeout(()=>{
            setFormSubmit(true);
        },600)
        downToUpDisappearAnimation('formRide');
    };
    const cancelRide = ():void=>{
        setTimeout(()=>{
            setFormSubmit(false)
        },600)
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
        cancelRide = {cancelRide}
        ></ConfirmRide>}
        </main>
    );
}
