export type TDRIVER={
    name:string,
    vehicle:string,
    value:number,
    review:{rating:number,comment:string}
    description:string,
}

export type TRIDEESTIMATE={
    origin:{latitude:string,longitude:string},
    destination:{latitude:string,longitude:string},
    distance:number,
    duration:string,
    options:TDRIVER[],
    routeResponse:any,
}