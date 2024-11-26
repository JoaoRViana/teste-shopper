interface HistoryContainerProps {
    date: Date;
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
    const formatDate = (date: Date) => {
      const dateObj = new Date(date);
      const day = String(dateObj.getDate()).padStart(2, '0');
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const year = String(dateObj.getFullYear()).slice(-2);
      const hours = String(dateObj.getHours()).padStart(2, '0');
      const minutes = String(dateObj.getMinutes()).padStart(2, '0');
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    };
  
    return (
      <div className="flex flex-col items-center min-h-[300px] w-full max-w-md bg-black p-4 my-4 rounded-lg shadow-md text-slate-200 gap-5 ">
        <p className="text-sm text-gray-400">{formatDate(date)}</p>
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <div className="flex flex-col font-bold test-sm gap-2">
          <p className="">Origem: {origin}</p>
          <p className="">Destino: {destination}</p>
          <p className="">Distância: {distance} km</p>
          <p className="">Duração: {duration}</p>
        </div>
        <div className="flex justify-center items-center w-full">
          <h3 className="text-lg font-bold text-green-500">R$ {value.toFixed(2)}</h3>
        </div>
      </div>
    );
  }
  