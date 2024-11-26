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

export function renderMap(polyline:string){
    const encodedPolyline = encodeURIComponent(polyline);
    const map = `https://maps.googleapis.com/maps/api/staticmap?size=600x400&path=weight:3%7Ccolor:orange%7Cenc:${encodedPolyline}&key=${apiKey}`;
    return map;
}