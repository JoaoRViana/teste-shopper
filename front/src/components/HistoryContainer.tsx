interface HistoryContainerProps {
    date: string;
    name: string;
    origin: string;
    destination: string;
    distance: number;
    duration: string;
    value: number;
  }
  
  export default function HistoryContainer({
    date,
    name,
    origin,
    destination,
    distance,
    duration,
    value,
  }: HistoryContainerProps) {
    return (
      <div className="flex flex-col items-center min-h-[300px] w-full max-w-md bg-black p-4 my-4 rounded-lg shadow-md text-slate-200 gap-5 ">
        <p className="text-sm text-gray-400">{date}</p>
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Origem: {origin}</p>
          <p className="text-sm">Destino: {destination}</p>
          <p className="text-sm">Distância: {distance} km</p>
          <p className="text-sm">Duração: {duration}</p>
        </div>
        <div className="flex justify-between items-center w-full">
          <h3 className="text-lg font-bold text-green-500">R$ {value}</h3>
        </div>
      </div>
    );
  }
  