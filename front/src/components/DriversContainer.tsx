interface DriversProps {
    name: string;
    description: string;
    vehicle: string;
    review: { rating: number; comment: string };
    value: number;
    saveRide:()=>Promise<void>;
  }
  
  export default function DriversContainer({
    name,
    description,
    vehicle,
    review,
    value,
    saveRide
  }: DriversProps) {
    return (
      <div className="flex flex-col items-center min-h-[300px] w-full max-w-md bg-black p-4 my-4 rounded-lg shadow-md text-slate-200 gap-5">
        <h3 className="text-lg font-bold ">{name}</h3>
        <div className="flex flex-col font-bold test-sm gap-2">
          <p className="text-sm ">{description}</p>
          <p className="text-sm ">Carro: {vehicle}</p>
          <p className="text-sm ">Avaliação: {review.rating}/5 - {review.comment}
          </p>
        </div>
        <h3 className="text-lg font-bold text-green-500">R$ {value.toFixed(2)}</h3>
        <button className="font-bold text-md text-black bg-slate-200 p-2 rounded hover:brightness-125" onClick={saveRide}>Confirmar</button>
      </div>
    );
  }
  