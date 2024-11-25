interface FormProps {
    customer_id: string;
    destination: string;
    origin: string;
    setCustomerId: (value: string) => void;
    setDestination: (value: string) => void;
    setOrigin: (value: string) => void;
    getEstimateValue: () => void;
}

export default function Form({
    customer_id,
    destination,
    origin,
    setCustomerId,
    setDestination,
    setOrigin,
    getEstimateValue,
}: FormProps) {
    return (
        <div className="flex justify-center items-center h-screen w-full upToDown" id="formRide">
            <div className="block gap-7 h-[420px] p-10 rounded">
                <div className="mb-10">
                    <input
                        className="rounded h-[34px] pl-4"
                        placeholder="Name"
                        value={customer_id}
                        onChange={(e) => setCustomerId(e.target.value)}
                    />
                </div>
                <div className="mb-10">
                    <input
                        className="rounded h-[34px] w-[600px] pl-4"
                        placeholder="Address Origin"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                    />
                </div>
                <div className="mb-10">
                    <input
                        className="rounded h-[34px] w-[600px] pl-4"
                        placeholder="Address Destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
                <div className="w-full justify-end flex">
                    <button
                        onClick={getEstimateValue}
                        className="font-bold text-stone-200 place-self-end rounded bg-green-900 p-2 hover:brightness-125"
                    >
                        Estimate Value
                    </button>
                </div>
            </div>
        </div>
    );
}
