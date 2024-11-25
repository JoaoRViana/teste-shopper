const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export function downToUpDisappearAnimation(divId:string):void{
    const div = document.getElementById(divId)
    div?.classList.remove('upToDown')
    div?.classList.add('downToUpDisappear')
}

export function upToDownDisappearAnimation(divId:string):void{
    const div = document.getElementById(divId)
    div?.classList.remove('downToUp')
    div?.classList.add('upToDownDisappear')
}

export function renderMap(routeSteps: Array<{ lat: number; lng: number }>){
    const path = routeSteps.map((step: any) => {
        const start = step.startLocation;
        const end = step.endLocation;
        return `${start.latLng.latitude},${start.latLng.longitude}%7C${end.latLng.latitude},${end.latLng.longitude}`;
    }).join("&path=weight:3%7Ccolor:0xff0000%7C");;
    const map = `https://maps.googleapis.com/maps/api/staticmap?size=600x400&path=weight:3%7Ccolor:0xff0000%7C${path}&key=${apiKey}`;
    return map;
}