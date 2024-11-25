interface driversProps{
    name:string;
    description:string;
    vehicle:string;
    review:{rating:number,comment:string};
    value:number;
}

export default function DriversContainer({name,description,vehicle,review,value}:driversProps){
    return(
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{vehicle}</p>
            <p>{review.rating}/5</p>
            <p>{review.comment}</p>
            <h3>{value}</h3>
        </div>
    )
}