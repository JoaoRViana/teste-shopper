
interface confirmRideProps{
    cancelRide: ()=>void;
}

export default function ConfirmRide({cancelRide}:confirmRideProps){
    return(
        <div className="flex justify-center items-center h-screen w-full downToUp" id="confirmRide">
            <button onClick={cancelRide}>Cancel</button>
        </div>
    )
}