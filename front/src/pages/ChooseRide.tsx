import { useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import ConfirmRide from "../components/ConfirmRide";
import { downToUpDisappearAnimation, upToDownDisappearAnimation } from "../utils";
import { TRIDEESTIMATE } from "../types";
import { oneDriveReturn, twoDrivers } from "../fakeData";
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

    const getEstimateValue = async (): Promise<void> => {
        const requestBody = {
            customer_id,
            destination,
            origin,
        };
        const response = await axios.post("http://localhost:8080/ride/estimate",requestBody)
        setData(response.data)
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
