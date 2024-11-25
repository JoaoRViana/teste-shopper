export type TDRIVER={
    id:number,
    name:string,
    vehicle:string,
    value:number,
    review:{rating:number,comment:string}
    description:string,
}

export type TRIDEESTIMATE={
    origin:{latitude:number,longitude:number},
    destination:{latitude:number,longitude:number},
    distance:number,
    duration:string,
    options:TDRIVER[],
    routeResponse:any,
}

export type TSAVERIDE={
    customer_id: string;
    origin: string;
    destination: string;
    distance: number;
    duration: string;
    driver: { id:number,name: string };
    value: number;
}